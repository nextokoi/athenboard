
"use client";
import { Icon, Input, Slider } from "keep-react";
import { useState } from "react";
import { FaEuroSign } from "react-icons/fa6";

export const SliderComponent = () => {
    const [rangeValues, setRangeValues] = useState<number | number[]>([35, 100])

    return (
        <>
            <Slider
                step={5}
                min={25}
                max={100}
                tooltip="bottom"
                range={true}
                defaultValue={rangeValues}
                onChange={(value) => setRangeValues(value)}
            />
            <div className="flex justify-between items-center gap-5">
                <fieldset className="relative max-w-md">
                    <Input placeholder="Min" className="ps-11" value={Array.isArray(rangeValues) ? rangeValues[0] : ''}/>
                    <Icon>
                        <FaEuroSign className="text-xl"/>
                    </Icon>
                </fieldset>
                <hr className="w-10"/>    
                <fieldset className="relative max-w-md">
                    <Input placeholder="Max" className="ps-11" value={Array.isArray(rangeValues) ? rangeValues[1] : ''}/>
                    <Icon>
                        <FaEuroSign className="text-xl" />
                    </Icon>
                </fieldset>
            </div>

        </>
    );
}
