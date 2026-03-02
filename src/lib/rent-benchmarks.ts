/**
 * District-level rent benchmark data for Vietnamese cities.
 * Prices in k VND/m²/month (thousands VND per sqm per month).
 * Normalized for F&B street-level (nhà phố) — excludes flagship mall outliers.
 * Sources: Savills, CBRE, Cushman & Wakefield, batdongsan.com.vn, mogi.vn (2024-2026 data).
 */

interface RentRange {
  min: number; // k VND/m²/month
  max: number;
}

export interface DistrictData {
  slug: string;
  nameVi: string;
  nameEn: string;
  prime: RentRange;     // center, mall — mặt tiền đường lớn, TTTM
  secondary: RentRange; // suburb, residential — hẻm, khu dân cư
}

interface CityRentData {
  districts: DistrictData[];
  cityLevel: { prime: RentRange; secondary: RentRange };
}

// ─── HCMC (21 quận/huyện + Other) ───────────────────────
const hcmDistricts: DistrictData[] = [
  // Trung tâm
  { slug: 'quan-1',      nameVi: 'Quận 1',                  nameEn: 'District 1',                prime: { min: 1500, max: 5000 }, secondary: { min: 500, max: 1500 } },
  { slug: 'quan-3',      nameVi: 'Quận 3',                  nameEn: 'District 3',                prime: { min: 800, max: 2500 },  secondary: { min: 350, max: 800 } },
  { slug: 'quan-4',      nameVi: 'Quận 4',                  nameEn: 'District 4',                prime: { min: 500, max: 1500 },  secondary: { min: 250, max: 600 } },
  { slug: 'quan-5',      nameVi: 'Quận 5',                  nameEn: 'District 5',                prime: { min: 500, max: 1400 },  secondary: { min: 250, max: 600 } },
  { slug: 'quan-6',      nameVi: 'Quận 6',                  nameEn: 'District 6',                prime: { min: 400, max: 1200 },  secondary: { min: 200, max: 500 } },
  // Cận trung tâm
  { slug: 'quan-7',      nameVi: 'Quận 7 (Phú Mỹ Hưng)',   nameEn: 'District 7 (Phu My Hung)',  prime: { min: 600, max: 2000 },  secondary: { min: 300, max: 700 } },
  { slug: 'quan-8',      nameVi: 'Quận 8',                  nameEn: 'District 8',                prime: { min: 400, max: 1200 },  secondary: { min: 200, max: 500 } },
  { slug: 'quan-10',     nameVi: 'Quận 10',                 nameEn: 'District 10',               prime: { min: 500, max: 1500 },  secondary: { min: 250, max: 600 } },
  { slug: 'quan-11',     nameVi: 'Quận 11',                 nameEn: 'District 11',               prime: { min: 400, max: 1200 },  secondary: { min: 200, max: 500 } },
  { slug: 'binh-thanh',  nameVi: 'Bình Thạnh',              nameEn: 'Binh Thanh',                prime: { min: 600, max: 1800 },  secondary: { min: 300, max: 700 } },
  { slug: 'phu-nhuan',   nameVi: 'Phú Nhuận',               nameEn: 'Phu Nhuan',                 prime: { min: 500, max: 1500 },  secondary: { min: 250, max: 600 } },
  { slug: 'tan-binh',    nameVi: 'Tân Bình',                nameEn: 'Tan Binh',                  prime: { min: 500, max: 1500 },  secondary: { min: 250, max: 600 } },
  { slug: 'tan-phu',     nameVi: 'Tân Phú',                 nameEn: 'Tan Phu',                   prime: { min: 400, max: 1200 },  secondary: { min: 200, max: 500 } },
  // Ngoại thành
  { slug: 'go-vap',      nameVi: 'Gò Vấp',                  nameEn: 'Go Vap',                    prime: { min: 400, max: 1200 },  secondary: { min: 200, max: 500 } },
  { slug: 'quan-12',     nameVi: 'Quận 12',                 nameEn: 'District 12',               prime: { min: 300, max: 900 },   secondary: { min: 150, max: 400 } },
  { slug: 'thu-duc',     nameVi: 'TP. Thủ Đức',             nameEn: 'Thu Duc City',              prime: { min: 500, max: 1800 },  secondary: { min: 250, max: 700 } },
  { slug: 'binh-tan',    nameVi: 'Bình Tân',                nameEn: 'Binh Tan',                  prime: { min: 300, max: 900 },   secondary: { min: 150, max: 400 } },
  // Huyện ngoại thành
  { slug: 'nha-be',      nameVi: 'Nhà Bè',                  nameEn: 'Nha Be',                    prime: { min: 250, max: 700 },   secondary: { min: 120, max: 300 } },
  { slug: 'hoc-mon',     nameVi: 'Hóc Môn',                 nameEn: 'Hoc Mon',                   prime: { min: 200, max: 600 },   secondary: { min: 100, max: 250 } },
  { slug: 'cu-chi',      nameVi: 'Củ Chi',                  nameEn: 'Cu Chi',                    prime: { min: 150, max: 450 },   secondary: { min: 80, max: 200 } },
  { slug: 'other',       nameVi: 'Quận/huyện khác',         nameEn: 'Other district',            prime: { min: 200, max: 600 },   secondary: { min: 100, max: 300 } },
];

// ─── Hanoi (14 quận/huyện + Other) ──────────────────────
const hanoiDistricts: DistrictData[] = [
  // Nội thành lõi
  { slug: 'hoan-kiem',    nameVi: 'Hoàn Kiếm',       nameEn: 'Hoan Kiem',     prime: { min: 1500, max: 4500 }, secondary: { min: 500, max: 1200 } },
  { slug: 'ba-dinh',      nameVi: 'Ba Đình',          nameEn: 'Ba Dinh',       prime: { min: 800, max: 1800 },  secondary: { min: 400, max: 800 } },
  { slug: 'hai-ba-trung', nameVi: 'Hai Bà Trưng',     nameEn: 'Hai Ba Trung',  prime: { min: 600, max: 1400 },  secondary: { min: 300, max: 700 } },
  { slug: 'dong-da',      nameVi: 'Đống Đa',          nameEn: 'Dong Da',       prime: { min: 600, max: 1300 },  secondary: { min: 300, max: 700 } },
  // Nội thành mở rộng
  { slug: 'cau-giay',     nameVi: 'Cầu Giấy',        nameEn: 'Cau Giay',      prime: { min: 700, max: 1800 },  secondary: { min: 350, max: 800 } },
  { slug: 'thanh-xuan',   nameVi: 'Thanh Xuân',       nameEn: 'Thanh Xuan',    prime: { min: 500, max: 1200 },  secondary: { min: 250, max: 600 } },
  { slug: 'tay-ho',       nameVi: 'Tây Hồ',           nameEn: 'Tay Ho',        prime: { min: 700, max: 1800 },  secondary: { min: 350, max: 800 } },
  { slug: 'long-bien',    nameVi: 'Long Biên',        nameEn: 'Long Bien',     prime: { min: 500, max: 1300 },  secondary: { min: 250, max: 600 } },
  { slug: 'nam-tu-liem',  nameVi: 'Nam Từ Liêm',      nameEn: 'Nam Tu Liem',   prime: { min: 600, max: 1500 },  secondary: { min: 300, max: 700 } },
  { slug: 'bac-tu-liem',  nameVi: 'Bắc Từ Liêm',      nameEn: 'Bac Tu Liem',   prime: { min: 450, max: 1200 },  secondary: { min: 250, max: 600 } },
  // Ngoại thành
  { slug: 'hoang-mai',    nameVi: 'Hoàng Mai',        nameEn: 'Hoang Mai',     prime: { min: 350, max: 900 },   secondary: { min: 150, max: 400 } },
  { slug: 'ha-dong',      nameVi: 'Hà Đông',          nameEn: 'Ha Dong',       prime: { min: 350, max: 900 },   secondary: { min: 150, max: 400 } },
  { slug: 'dong-anh',     nameVi: 'Đông Anh',         nameEn: 'Dong Anh',      prime: { min: 250, max: 700 },   secondary: { min: 120, max: 350 } },
  { slug: 'gia-lam',      nameVi: 'Gia Lâm',          nameEn: 'Gia Lam',       prime: { min: 250, max: 700 },   secondary: { min: 120, max: 350 } },
  { slug: 'other',        nameVi: 'Quận/huyện khác',   nameEn: 'Other district', prime: { min: 200, max: 600 },  secondary: { min: 100, max: 300 } },
];

// ─── Da Nang (7 quận/huyện + Other) ─────────────────────
const danangDistricts: DistrictData[] = [
  { slug: 'hai-chau',     nameVi: 'Hải Châu',         nameEn: 'Hai Chau',       prime: { min: 500, max: 1500 },  secondary: { min: 250, max: 600 } },
  { slug: 'thanh-khe',    nameVi: 'Thanh Khê',        nameEn: 'Thanh Khe',      prime: { min: 350, max: 900 },   secondary: { min: 150, max: 400 } },
  { slug: 'son-tra',      nameVi: 'Sơn Trà',          nameEn: 'Son Tra',        prime: { min: 500, max: 1500 },  secondary: { min: 200, max: 500 } },
  { slug: 'ngu-hanh-son', nameVi: 'Ngũ Hành Sơn',     nameEn: 'Ngu Hanh Son',   prime: { min: 400, max: 1200 },  secondary: { min: 200, max: 450 } },
  { slug: 'lien-chieu',   nameVi: 'Liên Chiểu',       nameEn: 'Lien Chieu',     prime: { min: 250, max: 700 },   secondary: { min: 120, max: 350 } },
  { slug: 'cam-le',       nameVi: 'Cẩm Lệ',          nameEn: 'Cam Le',         prime: { min: 250, max: 700 },   secondary: { min: 120, max: 350 } },
  { slug: 'hoa-vang',     nameVi: 'Hòa Vang',         nameEn: 'Hoa Vang',       prime: { min: 150, max: 450 },   secondary: { min: 60, max: 200 } },
  { slug: 'other',        nameVi: 'Quận/huyện khác',   nameEn: 'Other district', prime: { min: 150, max: 500 },   secondary: { min: 80, max: 250 } },
];

// ─── City rent data map ──────────────────────────────────
const RENT_DATA: Record<string, CityRentData> = {
  hcm: {
    districts: hcmDistricts,
    cityLevel: { prime: { min: 300, max: 1500 }, secondary: { min: 150, max: 600 } },
  },
  hanoi: {
    districts: hanoiDistricts,
    cityLevel: { prime: { min: 300, max: 1200 }, secondary: { min: 150, max: 500 } },
  },
  danang: {
    districts: danangDistricts,
    cityLevel: { prime: { min: 200, max: 800 }, secondary: { min: 100, max: 400 } },
  },
  other: {
    districts: [],
    cityLevel: { prime: { min: 100, max: 500 }, secondary: { min: 50, max: 250 } },
  },
};

// ─── Public API ──────────────────────────────────────────

export function cityHasDistricts(cityKey: string): boolean {
  const data = RENT_DATA[cityKey];
  return !!data && data.districts.length > 0;
}

export function getDistrictsForCity(cityKey: string): DistrictData[] {
  return RENT_DATA[cityKey]?.districts ?? [];
}

export function compareRentToBenchmark(
  rent: number,       // VND/month total
  sqm: number,        // m²
  cityKey: string,
  districtSlug: string,
  areaType: string,
): { userRentPerSqm: number; min: number; max: number; status: 'good' | 'warn' | 'high' } | null {
  if (rent <= 0 || sqm <= 0) return null;

  const data = RENT_DATA[cityKey];
  if (!data) return null;

  // Map area type to prime/secondary
  const isPrime = areaType === 'center' || areaType === 'mall';

  // Find benchmark range
  let range: RentRange;
  if (districtSlug && data.districts.length > 0) {
    const district = data.districts.find(d => d.slug === districtSlug);
    range = district
      ? (isPrime ? district.prime : district.secondary)
      : (isPrime ? data.cityLevel.prime : data.cityLevel.secondary);
  } else {
    range = isPrime ? data.cityLevel.prime : data.cityLevel.secondary;
  }

  const userRentPerSqm = Math.round(rent / sqm / 1000); // k VND/m²/month

  let status: 'good' | 'warn' | 'high';
  if (userRentPerSqm <= range.max) {
    status = 'good';
  } else if (userRentPerSqm <= range.max * 1.3) {
    status = 'warn';
  } else {
    status = 'high';
  }

  return { userRentPerSqm, min: range.min, max: range.max, status };
}
