import type { ChecklistCategory } from '@/types';

const CHECKLIST_EN: Record<string, ChecklistCategory> = {
  phap_ly: {
    name: 'Legal & Permits', icon: 'legal',
    items: ['Business Registration (DKKD)', 'Food Safety Certificate (ATTP)', 'Fire Safety Certificate (PCCC)', 'Staff Health Certificates', 'Notarized Lease Agreement', 'Tax Registration + Tax ID', 'E-Invoice Registration', 'Signage Permit', 'Alcohol License (if applicable)']
  },
  mat_bang: {
    name: 'Premises & Build-out', icon: 'construction',
    items: ['Sign Lease Agreement', 'Survey Electrical / Plumbing / Drainage', 'Design Kitchen Layout', 'Design Interior', 'Construction / Renovation', 'Install Adequate Electrical Capacity', 'Install Water Supply & Kitchen Drainage', 'Install Exhaust / Ventilation', 'Install Air Conditioning', 'Signage']
  },
  thiet_bi: {
    name: 'Equipment & Supplies', icon: 'wrench',
    items: ['Main Kitchen Equipment', 'Beverage Preparation Equipment', 'Kitchen Utensils', 'Customer Tables & Chairs', 'POS / Order Printer / Bill Printer', 'Security Cameras', 'Fire Extinguishers', 'Cups / Bowls / Plates / Chopsticks', 'Delivery Packaging', 'Uniforms']
  },
  menu: {
    name: 'Menu & Suppliers', icon: 'menu',
    items: ['Build Menu + Pricing', 'Design Menu (Print / QR)', 'Find Primary + Backup Suppliers', 'Negotiate Pricing / MOQ', 'Standardize Recipes', 'Calculate Food Cost per Item', 'Food Photography', 'Set Up Inventory Management']
  },
  nhan_su: {
    name: 'Human Resources', icon: 'team',
    items: ['Org Chart + Headcount per Shift', 'Recruitment', 'Sign Employment Contracts', 'Social Insurance (BHXH / BHYT)', 'Train on Preparation SOPs', 'Train on Service SOPs', 'Train on Cashier SOPs', 'Train on Food Safety & Hygiene', 'Schedule Shifts', 'Dry Run / Soft Opening']
  },
  cong_nghe: {
    name: 'Technology', icon: 'laptop',
    items: ['Set Up POS System', 'Register on GrabFood', 'Register on ShopeeFood', 'QR Payments (Momo / VNPay / ZaloPay)', 'Google Business Profile', 'Facebook Fanpage', 'Instagram + TikTok', 'Customer WiFi', 'Accounting Software']
  },
  marketing: {
    name: 'Marketing & Launch', icon: 'megaphone',
    items: ['Brand Identity (Logo / Colors / Fonts)', 'Print Materials (Cards / Vouchers / Banners)', 'Launch Strategy', 'Invite KOLs for Reviews', 'First Month Content Plan', 'List on Foody / Google Maps', 'Set Up Ads (FB / IG / TikTok)', 'Soft Opening', 'Grand Opening']
  },
  van_hanh: {
    name: 'Operations', icon: 'gear',
    items: ['Opening SOP', 'Closing SOP', 'Receiving & Inventory SOP', 'Cleaning SOP', 'Complaint Handling SOP', 'Incident SOP (Power Outage, etc.)', 'Cash Management SOP', 'Daily Task Assignments', 'KPIs per Role']
  }
};

export default CHECKLIST_EN;
