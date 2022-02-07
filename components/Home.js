import {useState, useEffect} from "react"
import { Text, View, Button } from 'react-native';

export default function Home({navigation}) {
    const [stats, setStats] = useState()

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all", {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            console.log("Global Statistics:")
            console.log(data)
            setStats(data)
        })
    }, [])

    return (
        (stats)
        ?
            <View>
                <Text>
                    <h1 style={{textAlign: "center"}}>Global Statistics</h1>
                    <h3 style={{textDecoration: "underline", textAlign: "center"}}>Total so far</h3>
                    <p style={{textAlign: "center"}}>Active Cases: {stats.cases}</p>
                    <p style={{textAlign: "center"}}>Recovered: {stats.recovered}</p>
                    <p style={{textAlign: "center"}}>Deaths: {stats.deaths}</p>
                    <h3 style={{textDecoration: "underline", textAlign: "center"}}>Today</h3>
                    <p style={{textAlign: "center"}}>Active Cases: {stats.todayCases}</p>
                    <p style={{textAlign: "center"}}>Recovered: {stats.todayRecovered}</p>
                    <p style={{textAlign: "center"}}>Deaths: {stats.todayDeaths}</p>
                </Text>
                <View style={{display: "flex", flexDirection: "column"}}>
                    <Button
                        title="Malaysia"
                        onPress={() => navigation.navigate("Malaysia")}
                    />
                    <Button
                        title="USA"
                        onPress={() => navigation.navigate("USA")}
                    />
                </View>
            </View>
        :
            <View>
                <Text>
                    <h1 style={{textAlign: "center"}}>Loading...</h1>
                </Text>
            </View>
    )
}