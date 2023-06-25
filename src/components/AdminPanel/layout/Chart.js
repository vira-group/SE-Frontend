import { AreaChart } from "recharts/lib/chart/AreaChart";
import { Area } from "recharts/lib/cartesian/Area";
import { XAxis } from "recharts/lib/cartesian/XAxis";
import { YAxis } from "recharts/lib/cartesian/YAxis";
import { CartesianGrid } from "recharts/lib/cartesian/CartesianGrid";
import { Tooltip } from "recharts/lib/component/Tooltip";
import { ResponsiveContainer } from "recharts/lib/component/ResponsiveContainer";

export default function Chart(props) {
  return (
    <div className="chart">
      <span className="title">{props.title}</span>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={props.data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#cd9a2d" stopOpacity={1} />
              <stop offset="95%" stopColor="#cd9a2d" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="1 1" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#cd9a2d"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
