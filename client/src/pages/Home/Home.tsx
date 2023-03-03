import React from "react";
import Header from "../../components/Header/Header";
import FormWineMeasurements from "../../components/Forms/FormWineMeasurements/FormWineMeasurements";
import TableWIneMeasurements from "../../components/Tables/TableWineMeasurements/TableWineMeasurements";
import HomeHooks from "./hooks/Home.hooks";
import HomeHooksReturn from "./models/HomeHooksReturn";
import HomeContext from "./contexts/Home.context";
import HomeContextModel from "./models/HomeContext.model";

const Home: React.FC = () => {

    const { wineMeasurements, fetchMeasurements } = HomeHooks() as HomeHooksReturn;

    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <HomeContext.Provider value={{ fetchMeasurements } as HomeContextModel}>
                    <FormWineMeasurements />
                </HomeContext.Provider>
                <TableWIneMeasurements measurements={wineMeasurements} />
            </div>

        </div>
    )
}

export default Home;