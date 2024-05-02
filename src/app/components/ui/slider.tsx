
"use client";
import { Icon, Slider } from "keep-react";
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
                tooltip="bottom"
                range={true}
                defaultValue={rangeValues}
                onChange={(value) => onRangeValuesChange(value as number[])}
            />
            <div className="flex justify-between items-center gap-5">
                <fieldset className="relative max-w-md">
                    <div className="border border-slate-200 w-32 h-12 rounded-lg">
                        <Icon>
                            <FaEuroSign className="text-xl mr-3" />
                            {Array.isArray(rangeValues) ? rangeValues[0] : ''}
                        </Icon>
                    </div>
                </fieldset>
                <hr className="w-10" />
                <fieldset className="relative max-w-md">
                    <div className="border border-slate-200 w-32 h-12 rounded-lg">
                        <Icon className="border border-slate-200 w-32 h-12 rounded-lg">
                            <FaEuroSign className="text-xl mr-3" />
                            {Array.isArray(rangeValues) ? rangeValues[1] : ''}
                        </Icon>
                    </div>
                </fieldset>
            </div>

        </>
    );
}