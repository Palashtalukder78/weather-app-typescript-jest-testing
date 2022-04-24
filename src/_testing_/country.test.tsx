import { render } from "@testing-library/react"
import Country from "../components/Country/Country"
import FetchCountry from "../fetch/fetch"

test('fetch weather in the component', async()=>{
   render(<Country></Country>) 
   const data = await FetchCountry.getWeather('bangladesh');
   expect(data).toBeDefined();
})
test('fetch country in the documnet', async()=>{
    const data = await FetchCountry.getCountry('bangladesh')
    expect(data).toBeDefined();
})