import { Box } from "@chakra-ui/react";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "22 feb 2021",
    uv: 2,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "23 feb 2021",
    uv: 2,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "24 feb 2021",
    uv: 2,
    pv: 1000,
    amt: 2290,
  },
  {
    name: "25 feb 2021",
    uv: 0,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "26 feb 2021",
    uv: -0.3,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "27 feb 2021",
    uv: -2.5,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "28 feb 2021",
    uv: -2.5,
    pv: 4300,
    amt: 2100,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default function Charts() {
  return (
    <Box p="50px">
      <Box bg="#000">
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 40,
              right: 40,
              left: 0,
              bottom: 40,
            }}
          >
            <CartesianGrid
              strokeWidth={1}
              stopColor="#504F4F"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              padding={{ left: 25 }}
              dy={20}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(tick) => {
                return `$ ${tick}M`;
              }}
            />
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor="#a8894a" stopOpacity={1} />
                <stop offset={off} stopColor="#c43e3e" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="#a8894a" />
                <stop offset="45%" stop-color="#2e2618" stop-opacity="1" />
                <stop offset="10%" stop-color="#411c1c" stop-opacity="1" />
                <stop offset="100%" stop-color="#c43e3e" />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              strokeWidth={2}
              stroke="url(#splitColor)"
              fill="url(#Gradient2)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
