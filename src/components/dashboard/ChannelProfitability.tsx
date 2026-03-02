'use client';

import type { ChannelPnL } from '@/types';
import { formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

interface ChannelProfitabilityProps {
  channels: ChannelPnL[];
}

export default function ChannelProfitability({ channels }: ChannelProfitabilityProps) {
  const { t } = useTranslation();
  const labels = t.dashboard.channelProfit;

  return (
    <div>
      <p className="text-xs text-text-muted mb-3">{labels.subtitle}</p>
      <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
        {channels.map((ch) => {
          const chLabel = labels.channelLabels[ch.channel as keyof typeof labels.channelLabels] || ch.channel;
          const isProfitable = ch.contribution >= 0;
          const hasRevenue = ch.revenue > 0;

          return (
            <div key={ch.channel} className={`clay-sm p-3.5 ${!hasRevenue ? 'opacity-50' : ''}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold font-[family-name:var(--font-heading)]">{chLabel}</span>
                <span className="text-[11px] text-text-muted">{ch.revenuePct}%</span>
              </div>

              {!hasRevenue ? (
                <div className="text-xs text-text-muted text-center py-3">{labels.noRevenue}</div>
              ) : (
                <>
                  {/* Revenue */}
                  <div className="flex justify-between text-[12px] mb-1">
                    <span className="text-text-muted">{labels.revenue}</span>
                    <span className="font-medium">{formatVND(ch.revenue)}</span>
                  </div>

                  {/* Cost breakdown */}
                  <div className="flex justify-between text-[12px] mb-0.5">
                    <span className="text-text-muted">- {labels.cogs}</span>
                    <span className="text-text-muted">{formatVND(ch.cogs)}</span>
                  </div>
                  {ch.commission > 0 && (
                    <div className="flex justify-between text-[12px] mb-0.5">
                      <span className="text-text-muted">- {labels.commission}</span>
                      <span className="text-text-muted">{formatVND(ch.commission)}</span>
                    </div>
                  )}
                  {ch.packaging > 0 && (
                    <div className="flex justify-between text-[12px] mb-0.5">
                      <span className="text-text-muted">- {labels.packaging}</span>
                      <span className="text-text-muted">{formatVND(ch.packaging)}</span>
                    </div>
                  )}
                  {ch.marketing > 0 && (
                    <div className="flex justify-between text-[12px] mb-0.5">
                      <span className="text-text-muted">- {labels.marketing}</span>
                      <span className="text-text-muted">{formatVND(ch.marketing)}</span>
                    </div>
                  )}

                  {/* Contribution */}
                  <div className="border-t border-border-light mt-1.5 pt-1.5">
                    <div className="flex justify-between text-[12px]">
                      <span className="font-semibold font-[family-name:var(--font-heading)]">{labels.contribution}</span>
                      <span className={`font-bold ${isProfitable ? 'text-cta' : 'text-danger'}`}>
                        {formatVND(ch.contribution)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px] mt-0.5">
                      <span className="text-text-muted">{labels.contributionMargin}</span>
                      <span className={`font-medium ${isProfitable ? 'text-cta' : 'text-danger'}`}>
                        {ch.contributionMargin.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="mt-2 text-center">
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                      isProfitable ? 'bg-mint-light text-cta' : 'bg-[#FEE2E2] text-danger'
                    }`}>
                      {isProfitable ? labels.profitable : labels.losing}
                    </span>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
