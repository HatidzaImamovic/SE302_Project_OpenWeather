class WeatherPage{
    constructor(page){
        this.page=page;

        this.temperatureValue=page.locator('.current-temp');
        this.temperatureC=page.locator('a:has-text("°C")');
        this.temperatureF=page.locator('a:has-text("°F")');
    }

    async getTemperature(){
        return await this.temperatureValue.textContent();
    }

    async CelsiusToFahrenheit(){
        await this.temperatureF.click();
    }

    async FahrenheitToCelsius(){
        await this.temperatureC.click();
    }
}

module.exports={WeatherPage};