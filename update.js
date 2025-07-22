const fs = require("fs");

const filePath = "metrics/daily.json";

if (!fs.existsSync(filePath)) {
  const initialData = {
    days_active: 0,
    total_runs: 0,
    last_updated: new Date().toISOString()
  };
  fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));
}

const data = JSON.parse(fs.readFileSync(filePath));

data.days_active += 1;
data.total_runs += Math.floor(Math.random() * 10 + 1);
data.last_updated = new Date().toISOString();  


fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
