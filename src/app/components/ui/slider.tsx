
"use client";
/* import { Icon, Slider } from "keep-react"; */
import { Input, Slider } from "antd";
import { FaEuroSign } from "react-icons/fa6";

interface SliderProps {
    rangeValues: number[]
    onRangeValuesChange: React.Dispatch<React.SetStateAction<number[]>>
}

export const SliderComponent = ({ onRangeValuesChange, rangeValues }: SliderProps) => {
    return (
        <>
            <Slider
                step={5}
                min={25}
                max={100}
                range={true}
                defaultValue={rangeValues}
                onChange={(value) => onRangeValuesChange(value as number[])}
            />
            <div className="flex justify-between items-center gap-5">
                <fieldset className="relative max-w-md">
                    <Input size="large" prefix={<FaEuroSign className="text-xl" />} disabled value={Array.isArray(rangeValues) ? rangeValues[0] : ''} /> 
                </fieldset>
                <hr className="w-10" />
                <fieldset className="relative max-w-md">
                    <Input size="large" prefix={<FaEuroSign className="text-xl" />} disabled value={Array.isArray(rangeValues) ? rangeValues[1] : ''} />                            
                </fieldset>
            </div>

        </>
    );
}
