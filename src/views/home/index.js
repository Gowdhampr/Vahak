import React, { useState } from 'react'
import Card from '../../components/Core/Card'

// Components
import LabelComponent from "../../components/Core/Label"
import VehicleDetailsCard from "../../components/Core/VehicleDetailsCard"
import CurrencyField from '../../components/Core/CurrencyInputField';
import { ButtonOutlined } from '../../components/Core/ButtonOutlined';

function Home() {
    const vehicleDetails = {
        ownerDetails: {
            firstName: "Rohan",
            lastName: "Sharma",
            city: "Bengaluru",
            state: "Karnataka"
        },
        vehicleModel: "Honda City",
        postedAt: "1 Nov, 9.30 AM",
        data1: "Specification 01",
        data2: "Specification 02",
        data3: "Specification 03"
    }

    const [priceAmount, setPriceAmount] = useState(0);

    const handlePriceChange = (e) => {
        setPriceAmount(e.target.value);
    }
    return (
        <div>
            <LabelComponent className="text-center">Old Car Available</LabelComponent>
            {/* Vehicle details card */}
            <VehicleDetailsCard showShadow={true} data={vehicleDetails} />
            {/* Biding card */}
            <Card>
                <LabelComponent className="text-center">Place Your BID</LabelComponent>
                {/* Currency field */}
                <CurrencyField handlePriceChange={e => handlePriceChange(e)} />
                {/* Price negotiate buttons */}
                <div className="priceButtonContainer">
                    <ButtonOutlined disabled={!priceAmount ? true : false} label="Fixed Price" />
                    <ButtonOutlined disabled={!priceAmount ? true : false} label="Rate Negiotable" />
                </div>
            </Card>
        </div>
    )
}

export default Home;
