import React from 'react'

interface SizeItem {
    size: string;
    ton: string;
}

interface ChartProps {
    chart_label: string[];
    size_chart: SizeItem[];
}

export const SizeChart: React.FC<ChartProps> = ({ chart_label, size_chart }) => {
    return (
        <div className='xl:px-[50px] lg:px-[50px] md:px-[50px] px-[10px] py-[30px]'>
            <table className='w-full'>
                <thead>
                    <tr>
                        {chart_label?.map((item, index) => (
                            <th key={index} className='border p-2 border-solid border-[#dddddd] text-center xl:text-[15px] lg:text-[15px] md:text-[15px] text-[12px]'>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {size_chart?.map((item, index) => (
                        <tr key={index} className='even:bg-gray-100'>
                            <td className='border text-center p-2 border-solid border-[#dddddd] xl:text-[15px] lg:text-[15px] md:text-[15px] text-[12px]'>{item.size}</td>
                            <td className='border text-center p-2 border-solid border-[#dddddd] xl:text-[15px] lg:text-[15px] md:text-[15px] text-[12px]'>{item.ton}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
