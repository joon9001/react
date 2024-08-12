import React, {memo} from "react";

const UnitConv = ({unit, unitConv}) => {

    return(
        <div>
            미터 : {unit} / 센티미터 : {unitConv}
        </div>
    );
}

export default memo(UnitConv);