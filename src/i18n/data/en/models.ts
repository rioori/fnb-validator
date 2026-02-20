import type { FnBModel, ModelKey } from '@/types';

const MODELS_EN: Record<ModelKey, FnBModel> = {
  coffee: {
    name: 'Coffee Shop', icon: 'coffee', investRange: '200M - 1.5B VND',
    desc: 'From sidewalk coffee to specialty. High gross margin (70-80%), but fierce competition.',
    defaults: {
      sqm: 40, seats: 25, avg_ticket: 55000, cust_weekday: 80, cust_weekend: 130, food_cost_pct: 25, rent: 25000000, budget: 700000000,
      ticket_items: [['Coffee', 45000], ['Tea / Juice', 40000], ['Pastry', 35000], ['Smoothie / Frappe', 50000]],
      cust_matrix: { wd: [20, 25, 10, 25], we: [30, 35, 20, 45] },
      inv_matbang: [['Takeover fee (if any)', 0]],
      inv_xaydung: [['Interior design & construction', 200000000], ['Signage', 15000000]],
      inv_thietbi: [['Espresso machine + grinder', 80000000], ['Fridge, freezer', 20000000], ['Tables & chairs', 40000000], ['Air conditioning', 20000000], ['POS, printer', 10000000]],
      inv_khac: [['Initial ingredients (2 weeks)', 15000000], ['Permits & legal', 10000000], ['Grand opening marketing', 25000000]],
      working_cap: 100000000,
      staff: [{ pos: 'Manager', count: 1, salary: 12000000 }, { pos: 'Barista', count: 2, salary: 8000000 }, { pos: 'Server', count: 2, salary: 6000000 }, { pos: 'Janitor', count: 1, salary: 5000000 }],
      fixed_other: [['Internet', 500000], ['POS software', 500000], ['Equipment maintenance', 500000]],
      var_other: [['Electricity', 7000000], ['Water', 1000000], ['Monthly marketing', 5000000], ['Takeaway packaging', 1500000]]
    },
    benchmarks: { ticket: [40000, 70000], cust_wd: [60, 120], cust_we: [80, 180], food_cost: [20, 30] }
  },
  eatery: {
    name: 'Small Eatery', icon: 'eatery', investRange: '100 - 500M VND',
    desc: 'Rice, noodles, pho. Moderate capital, stable demand.',
    defaults: {
      sqm: 40, seats: 30, avg_ticket: 45000, cust_weekday: 100, cust_weekend: 140, food_cost_pct: 33, rent: 15000000, budget: 350000000,
      ticket_items: [['Rice / Noodle / Pho', 40000], ['Beverages', 15000], ['Side dishes', 25000]],
      cust_matrix: { wd: [15, 45, 10, 30], we: [20, 50, 15, 55] },
      inv_matbang: [],
      inv_xaydung: [['Basic renovation', 80000000], ['Signage', 8000000]],
      inv_thietbi: [['Commercial gas stove', 30000000], ['Fridge, freezer', 15000000], ['Tables & chairs', 25000000], ['POS', 8000000]],
      inv_khac: [['Ingredients (2 weeks)', 20000000], ['Permits', 8000000], ['Marketing', 10000000]],
      working_cap: 60000000,
      staff: [{ pos: 'Head chef', count: 1, salary: 10000000 }, { pos: 'Sous chef', count: 1, salary: 6000000 }, { pos: 'Server', count: 2, salary: 5500000 }, { pos: 'Cashier', count: 1, salary: 6000000 }],
      fixed_other: [['Internet', 500000], ['Software', 300000]],
      var_other: [['Electricity', 5000000], ['Water', 1500000], ['Gas', 2000000], ['Marketing', 3000000], ['Packaging', 1000000]]
    },
    benchmarks: { ticket: [35000, 60000], cust_wd: [80, 150], cust_we: [100, 200], food_cost: [30, 40] }
  },
  bubbletea: {
    name: 'Bubble Tea', icon: 'bubbletea', investRange: '300M - 1.5B VND',
    desc: 'Very high margins (COGS 15-25%), but saturated market.',
    defaults: {
      sqm: 25, seats: 12, avg_ticket: 40000, cust_weekday: 100, cust_weekend: 180, food_cost_pct: 22, rent: 20000000, budget: 500000000,
      ticket_items: [['Bubble tea', 38000], ['Toppings', 10000], ['Fruit juice', 35000], ['Ice cream / Frappe', 42000]],
      cust_matrix: { wd: [15, 30, 20, 35], we: [30, 45, 35, 70] },
      inv_matbang: [],
      inv_xaydung: [['Design & construction', 150000000], ['Signage', 15000000]],
      inv_thietbi: [['Beverage equipment', 60000000], ['Fridge', 15000000], ['Tables & chairs', 20000000], ['POS', 10000000]],
      inv_khac: [['Ingredients', 10000000], ['Permits', 8000000], ['Grand opening marketing', 30000000]],
      working_cap: 70000000,
      staff: [{ pos: 'Manager', count: 1, salary: 10000000 }, { pos: 'Beverage maker', count: 2, salary: 7000000 }, { pos: 'Server', count: 1, salary: 5500000 }],
      fixed_other: [['Internet', 500000], ['Software', 500000]],
      var_other: [['Electricity', 4000000], ['Water', 800000], ['Marketing', 8000000], ['Cups & packaging', 3000000]]
    },
    benchmarks: { ticket: [35000, 55000], cust_wd: [80, 200], cust_we: [120, 300], food_cost: [15, 25] }
  },
  restaurant: {
    name: 'Restaurant', icon: 'restaurant', investRange: '1 - 5B VND',
    desc: 'Mid-range and above. Large investment, requires tight management.',
    defaults: {
      sqm: 100, seats: 50, avg_ticket: 200000, cust_weekday: 60, cust_weekend: 100, food_cost_pct: 32, rent: 40000000, budget: 2000000000,
      ticket_items: [['Main course', 120000], ['Appetizer', 50000], ['Beverages', 40000], ['Dessert', 35000]],
      cust_matrix: { wd: [0, 30, 5, 25], we: [0, 45, 10, 45] },
      inv_matbang: [],
      inv_xaydung: [['Design & construction', 500000000], ['Signage', 25000000]],
      inv_thietbi: [['Kitchen equipment', 250000000], ['Tables & interior furniture', 150000000], ['Air conditioning', 50000000], ['POS & cameras', 30000000]],
      inv_khac: [['Ingredients', 40000000], ['Permits', 15000000], ['Grand opening marketing', 50000000]],
      working_cap: 200000000,
      staff: [{ pos: 'Manager', count: 1, salary: 15000000 }, { pos: 'Head chef', count: 1, salary: 18000000 }, { pos: 'Sous chef', count: 2, salary: 7000000 }, { pos: 'Server', count: 3, salary: 6000000 }, { pos: 'Cashier', count: 1, salary: 7000000 }, { pos: 'Janitor', count: 1, salary: 5000000 }],
      fixed_other: [['Internet', 1000000], ['Software', 1000000], ['Maintenance', 2000000]],
      var_other: [['Electricity', 15000000], ['Water', 3000000], ['Gas', 4000000], ['Marketing', 10000000], ['Packaging', 2000000]]
    },
    benchmarks: { ticket: [150000, 400000], cust_wd: [50, 100], cust_we: [80, 150], food_cost: [28, 38] }
  },
  cloudkitchen: {
    name: 'Cloud Kitchen', icon: 'cloudkitchen', investRange: '100 - 500M VND',
    desc: 'Virtual kitchen, delivery only. Low capital but 20-30% app commission.',
    defaults: {
      sqm: 20, seats: 0, avg_ticket: 65000, cust_weekday: 50, cust_weekend: 60, food_cost_pct: 33, rent: 8000000, budget: 350000000,
      ticket_items: [['Main course', 55000], ['Sides / Toppings', 15000], ['Beverages', 20000]],
      cust_matrix: { wd: [5, 20, 5, 20], we: [5, 25, 5, 25] },
      inv_matbang: [],
      inv_xaydung: [['Kitchen renovation', 60000000]],
      inv_thietbi: [['Kitchen equipment', 100000000], ['POS & printer', 15000000]],
      inv_khac: [['Ingredients', 20000000], ['Permits', 8000000], ['Online marketing', 30000000]],
      working_cap: 60000000,
      staff: [{ pos: 'Head chef', count: 1, salary: 10000000 }, { pos: 'Sous chef', count: 1, salary: 6000000 }, { pos: 'Packer', count: 1, salary: 5500000 }],
      fixed_other: [['Internet', 500000], ['Software', 500000]],
      var_other: [['Electricity', 6000000], ['Water', 1000000], ['Gas', 2000000], ['Marketing', 10000000], ['Packaging', 4000000]]
    },
    benchmarks: { ticket: [50000, 100000], cust_wd: [30, 80], cust_we: [40, 100], food_cost: [30, 40] }
  },
  bakery: {
    name: 'Bakery', icon: 'bakery', investRange: '300M - 2B VND',
    desc: 'Bread, pastries. Good margins, frequent repeat customers.',
    defaults: {
      sqm: 35, seats: 12, avg_ticket: 50000, cust_weekday: 80, cust_weekend: 130, food_cost_pct: 30, rent: 20000000, budget: 600000000,
      ticket_items: [['Pastry', 45000], ['Bread', 25000], ['Beverages', 35000], ['Birthday cake (avg. share)', 50000]],
      cust_matrix: { wd: [25, 20, 15, 20], we: [35, 30, 25, 40] },
      inv_matbang: [],
      inv_xaydung: [['Design & construction', 150000000], ['Signage', 15000000]],
      inv_thietbi: [['Oven + mixer', 100000000], ['Refrigerated display case', 30000000], ['Tables & chairs', 25000000], ['POS', 10000000]],
      inv_khac: [['Ingredients', 15000000], ['Permits', 8000000], ['Marketing', 20000000]],
      working_cap: 70000000,
      staff: [{ pos: 'Baker', count: 2, salary: 9000000 }, { pos: 'Sales staff', count: 2, salary: 6000000 }, { pos: 'Janitor', count: 1, salary: 5000000 }],
      fixed_other: [['Internet', 500000], ['Software', 500000]],
      var_other: [['Electricity', 6000000], ['Water', 800000], ['Gas', 1500000], ['Marketing', 5000000], ['Boxes & packaging', 2000000]]
    },
    benchmarks: { ticket: [20000, 80000], cust_wd: [80, 200], cust_we: [100, 250], food_cost: [25, 35] }
  },
  bar: {
    name: 'Bar / Pub', icon: 'bar', investRange: '1 - 8B VND',
    desc: 'High alcohol margins (60-80%). Large capital, legal risks.',
    defaults: {
      sqm: 70, seats: 40, avg_ticket: 200000, cust_weekday: 40, cust_weekend: 90, food_cost_pct: 22, rent: 35000000, budget: 1500000000,
      ticket_items: [['Craft beer', 60000], ['Cocktail', 100000], ['Spirits (per serving)', 80000], ['Bar snacks', 50000]],
      cust_matrix: { wd: [0, 0, 10, 30], we: [0, 0, 20, 70] },
      inv_matbang: [],
      inv_xaydung: [['Design & construction', 400000000], ['Signage', 30000000]],
      inv_thietbi: [['Bar counter + equipment', 150000000], ['Tables & chairs', 80000000], ['Sound & lighting', 60000000], ['Air conditioning', 30000000]],
      inv_khac: [['Initial alcohol & beer stock', 30000000], ['Permits (+ liquor license)', 20000000], ['Marketing', 40000000]],
      working_cap: 150000000,
      staff: [{ pos: 'Manager', count: 1, salary: 15000000 }, { pos: 'Bartender', count: 2, salary: 10000000 }, { pos: 'Server', count: 3, salary: 6000000 }, { pos: 'Security', count: 1, salary: 6000000 }],
      fixed_other: [['Internet', 1000000], ['Music license', 1000000]],
      var_other: [['Electricity', 12000000], ['Water', 1500000], ['Marketing', 8000000]]
    },
    benchmarks: { ticket: [100000, 500000], cust_wd: [30, 70], cust_we: [60, 150], food_cost: [15, 25] }
  },
  kiosk: {
    name: 'Kiosk / Food Court', icon: 'kiosk', investRange: '200M - 1B VND',
    desc: 'Small stall in a mall. Built-in foot traffic, but high rent.',
    defaults: {
      sqm: 15, seats: 8, avg_ticket: 70000, cust_weekday: 70, cust_weekend: 120, food_cost_pct: 30, rent: 25000000, budget: 500000000,
      ticket_items: [['Main course', 60000], ['Beverages', 25000], ['Toppings / Sides', 15000]],
      cust_matrix: { wd: [10, 30, 10, 20], we: [15, 45, 20, 40] },
      inv_matbang: [],
      inv_xaydung: [['Stall construction', 100000000]],
      inv_thietbi: [['Kitchen / Beverage equipment', 80000000], ['Tables & chairs', 15000000], ['POS', 10000000]],
      inv_khac: [['Ingredients', 10000000], ['Permits', 8000000], ['Marketing', 15000000]],
      working_cap: 50000000,
      staff: [{ pos: 'Head chef', count: 1, salary: 9000000 }, { pos: 'Server', count: 2, salary: 6000000 }],
      fixed_other: [['Software', 500000]],
      var_other: [['Electricity', 3000000], ['Water', 500000], ['Gas', 1000000], ['Marketing', 3000000], ['Packaging', 1500000]]
    },
    benchmarks: { ticket: [50000, 120000], cust_wd: [60, 150], cust_we: [80, 200], food_cost: [28, 35] }
  }
};

export default MODELS_EN;
