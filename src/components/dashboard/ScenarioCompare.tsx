'use client';

import { useState, useEffect, useMemo } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { useScenarios } from '@/hooks/useScenarios';
import { calcFromScenarioData } from '@/lib/scenarioCalc';
import { formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { CalcResults } from '@/types';

interface ScenarioCompareProps {
  onClose: () => void;
}

interface LoadedScenario {
  id: string;
  name: string;
  results: CalcResults;
}

const COLORS = ['#16A34A', '#2563EB', '#D97706'];

export default function ScenarioCompare({ onClose }: ScenarioCompareProps) {
  const { t } = useTranslation();
  const d = t.dashboard.scenarioCompare;
  const { scenarios, load } = useScenarios();

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState<LoadedScenario[]>([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<'kpi' | 'chart'>('kpi');

  const toggle = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev; // max 3
      return [...prev, id];
    });
  };

  const handleCompare = async () => {
    if (selectedIds.length < 2) return;
    setLoading(true);
    const results: LoadedScenario[] = [];
    for (const id of selectedIds) {
      const row = await load(id);
      if (!row) continue;
      const data = row.data as Record<string, unknown>;
      const scenario = scenarios.find((s) => s.id === id);
      results.push({
        id,
        name: scenario?.name || id,
        results: calcFromScenarioData(data),
      });
    }
    setLoaded(results);
    setLoading(false);
  };

  // Auto-compare when exactly 2 are selected on first load
  useEffect(() => {
    if (selectedIds.length >= 2 && loaded.length === 0) {
      handleCompare();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // KPI rows for the comparison table
  type Status = 'good' | 'warn' | 'bad' | 'neutral';
  interface KPIRow { label: string; values: string[]; status: Status[] }
  const st = (v: Status): Status => v;

  const kpiRows: KPIRow[] = useMemo(() => {
    if (loaded.length === 0) return [];
    return [
      {
        label: d.score,
        values: loaded.map((s) => `${s.results.score}`),
        status: loaded.map((s) => st(s.results.score >= 70 ? 'good' : s.results.score >= 50 ? 'warn' : 'bad')),
      },
      {
        label: d.revenue,
        values: loaded.map((s) => formatVND(s.results.stableRev)),
        status: loaded.map(() => st('neutral')),
      },
      {
        label: d.profit,
        values: loaded.map((s) => formatVND(s.results.stableMonth.netProfit)),
        status: loaded.map((s) => st(s.results.stableMonth.netProfit > 0 ? 'good' : 'bad')),
      },
      {
        label: d.margin,
        values: loaded.map((s) => `${s.results.stableMonth.netMargin.toFixed(1)}%`),
        status: loaded.map((s) => st(s.results.stableMonth.netMargin >= 10 ? 'good' : s.results.stableMonth.netMargin >= 5 ? 'warn' : 'bad')),
      },
      {
        label: d.payback,
        values: loaded.map((s) => (s.results.paybackMonth ? `${s.results.paybackMonth} ${d.months}` : d.noPayback)),
        status: loaded.map((s) => st(s.results.paybackMonth && s.results.paybackMonth <= 12 ? 'good' : s.results.paybackMonth ? 'warn' : 'bad')),
      },
      {
        label: d.investment,
        values: loaded.map((s) => formatVND(s.results.totalInvestment)),
        status: loaded.map(() => st('neutral')),
      },
      {
        label: d.rentRatio,
        values: loaded.map((s) => `${s.results.rentRatio.toFixed(1)}%`),
        status: loaded.map((s) => st(s.results.rentRatio <= 20 ? 'good' : s.results.rentRatio <= 25 ? 'warn' : 'bad')),
      },
      {
        label: d.primeCost,
        values: loaded.map((s) => `${s.results.primeCost.toFixed(1)}%`),
        status: loaded.map((s) => st(s.results.primeCost <= 65 ? 'good' : s.results.primeCost <= 70 ? 'warn' : 'bad')),
      },
      {
        label: d.breakeven,
        values: loaded.map((s) => formatVND(s.results.bepRevenue)),
        status: loaded.map(() => st('neutral')),
      },
    ];
  }, [loaded, d]);

  // Chart data: overlay profit lines for each scenario
  const chartData = useMemo(() => {
    if (loaded.length === 0) return [];
    return Array.from({ length: 12 }, (_, i) => {
      const point: Record<string, string | number> = { name: `T${i + 1}` };
      loaded.forEach((s, idx) => {
        point[`profit_${idx}`] = Math.round(s.results.months[i].netProfit);
        point[`rev_${idx}`] = Math.round(s.results.months[i].netRev);
      });
      return point;
    });
  }, [loaded]);

  const statusColor = (s: string) => {
    if (s === 'good') return 'text-cta';
    if (s === 'warn') return 'text-warning';
    if (s === 'bad') return 'text-danger';
    return 'text-text';
  };

  // Find the best value for each KPI row to highlight
  const getBest = (row: KPIRow, idx: number) => {
    if (loaded.length < 2) return false;
    const statuses = row.status;
    const hasGood = statuses.includes('good');
    return hasGood && statuses[idx] === 'good' && statuses.filter((s) => s === 'good').length < loaded.length;
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[1000] no-print p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[720px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border-light sticky top-0 bg-white rounded-t-2xl z-10">
          <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text">
            {d.title}
          </h3>
          <button onClick={onClose} className="text-text-muted hover:text-text text-lg cursor-pointer">&times;</button>
        </div>

        <div className="p-4">
          {/* Scenario selection */}
          {loaded.length === 0 && (
            <>
              <p className="text-[13px] text-text-muted mb-3">{d.pickHint}</p>
              <div className="space-y-2 mb-4">
                {scenarios.map((s) => (
                  <label
                    key={s.id}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      selectedIds.includes(s.id)
                        ? 'border-cta bg-pastel-mint/50'
                        : 'border-border-light hover:bg-surface2'
                    } ${!selectedIds.includes(s.id) && selectedIds.length >= 3 ? 'opacity-40 pointer-events-none' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(s.id)}
                      onChange={() => toggle(s.id)}
                      className="accent-cta w-4 h-4"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[13px] font-semibold text-text truncate block">{s.name}</span>
                      <span className="text-[11px] text-text-muted">
                        {new Date(s.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </label>
                ))}
              </div>

              <button
                onClick={handleCompare}
                disabled={selectedIds.length < 2 || loading}
                className="clay-btn clay-btn-primary text-[13px] w-full disabled:opacity-50"
              >
                {loading ? '...' : d.compareBtn}
              </button>
            </>
          )}

          {/* Comparison results */}
          {loaded.length >= 2 && (
            <>
              {/* Tab bar */}
              <div className="flex gap-1 mb-4 bg-surface2 rounded-lg p-1">
                <button
                  onClick={() => setTab('kpi')}
                  className={`flex-1 text-[12px] font-semibold py-2 rounded-md transition-colors cursor-pointer ${
                    tab === 'kpi' ? 'bg-white text-text shadow-sm' : 'text-text-muted'
                  }`}
                >
                  {d.tabKPI}
                </button>
                <button
                  onClick={() => setTab('chart')}
                  className={`flex-1 text-[12px] font-semibold py-2 rounded-md transition-colors cursor-pointer ${
                    tab === 'chart' ? 'bg-white text-text shadow-sm' : 'text-text-muted'
                  }`}
                >
                  {d.tabChart}
                </button>
              </div>

              {tab === 'kpi' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="border-b-2 border-border-light">
                        <th className="text-left py-2 pr-3 text-text-muted font-normal uppercase tracking-wider text-[10px]">
                          {d.metric}
                        </th>
                        {loaded.map((s, idx) => (
                          <th key={s.id} className="text-right py-2 px-2 min-w-[120px]">
                            <div
                              className="inline-block w-2.5 h-2.5 rounded-full mr-1.5"
                              style={{ backgroundColor: COLORS[idx] }}
                            />
                            <span className="font-bold text-text">{s.name}</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {kpiRows.map((row) => (
                        <tr key={row.label} className="border-b border-border-light/50">
                          <td className="py-2 pr-3 text-text-muted font-medium">{row.label}</td>
                          {row.values.map((v, idx) => (
                            <td
                              key={idx}
                              className={`py-2 px-2 text-right font-semibold ${statusColor(row.status[idx])} ${
                                getBest(row, idx) ? 'bg-pastel-mint/30 rounded' : ''
                              }`}
                            >
                              {v}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {tab === 'chart' && (
                <div>
                  {/* Profit overlay chart */}
                  <p className="text-[11px] text-text-muted mb-2 font-semibold uppercase tracking-wider">{d.profitOverlay}</p>
                  <div className="h-[260px] w-full mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
                        <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                        <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => formatVND(v)} />
                        <Tooltip formatter={(value) => formatVND(Number(value))} />
                        <Legend wrapperStyle={{ fontSize: 11 }} iconType="circle" />
                        {loaded.map((s, idx) => (
                          <Line
                            key={s.id}
                            dataKey={`profit_${idx}`}
                            name={s.name}
                            stroke={COLORS[idx]}
                            strokeWidth={2.5}
                            dot={{ r: 3, fill: COLORS[idx], stroke: '#fff', strokeWidth: 2 }}
                          />
                        ))}
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Revenue overlay chart */}
                  <p className="text-[11px] text-text-muted mb-2 font-semibold uppercase tracking-wider">{d.revenueOverlay}</p>
                  <div className="h-[260px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
                        <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                        <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => formatVND(v)} />
                        <Tooltip formatter={(value) => formatVND(Number(value))} />
                        <Legend wrapperStyle={{ fontSize: 11 }} iconType="circle" />
                        {loaded.map((s, idx) => (
                          <Bar
                            key={s.id}
                            dataKey={`rev_${idx}`}
                            name={s.name}
                            fill={COLORS[idx]}
                            fillOpacity={0.3}
                            stroke={COLORS[idx]}
                            strokeWidth={1}
                            radius={[4, 4, 0, 0]}
                          />
                        ))}
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Reset button */}
              <button
                onClick={() => { setLoaded([]); setSelectedIds([]); }}
                className="text-[12px] text-text-muted hover:text-text mt-4 cursor-pointer underline"
              >
                {d.reset}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
