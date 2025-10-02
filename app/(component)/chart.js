"use client"

 
import { LineChart } from '@mui/x-charts/LineChart';

export default function ChartDashboard() {
  return (
    <div style={{ width: '100%', height: 300 }} className="flex max-md:bg-purple-300 rounded-md pr-[40px]">
      <LineChart
        xAxis={[{ data: [0, 1, 2, 3, 4, 5, 6, 7] }]}
        series={[{ data: [10, 20, 15, 25, 30, 18, 22, 35] }]}
        height={300}
      />
    </div>
  );
}



// import { LineChart } from "@mui/x-charts/LineChart"

// const ChartDashboard = () => {
//   return (
//     <section className='w-full h-fit flex-1 rounded-md flex-grow bg-purple-50/50'>
// <LineChart
//         xAxis={[{ data: [1, 2, 3, 5, 8, 10], label: "Days" }]}
//         series={[
//           {
//             data: [2, 5.5, 2, 8.5, 1.5, 5],
//             label: "Deposits",
//             color: "purple", // green
//           },
//           {
//             data: [1, 3, 1.5, 4, 2.5, 3],
//             label: "Withdrawals",
//             color: "red", // red
//           },
//         ]}
//         height={300}
        
//       />

//     </section>
//   )
// }

