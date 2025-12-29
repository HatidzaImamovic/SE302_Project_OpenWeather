class HomePage {
  constructor(page) {
    this.page = page;

    this.searchInput = page.locator('input[placeholder="Search city"]');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.cityName = page.locator('.current-container h2');
    this.signInLink = page.locator('a[href="/home/sign_in"]');
    this.errorMsg = page.locator('.search-dropdown-menu li', { hasText: 'Not found' });
  }

  async navigate() {
    await this.page.goto('https://openweathermap.org/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async searchCity(city) {
  await this.searchInput.fill(city);
  await this.searchButton.click();

  const dropdown = this.page.locator('.search-dropdown-menu');

  // Wait for dropdown OR "Not found"
  await dropdown.waitFor({ state: 'visible', timeout: 7000 });

  const items = dropdown.locator('li');

  // If "Not found" appears → stop here
  const notFound = items.filter({ hasText: 'Not found' });
  if (await notFound.count() > 0) {
    return;
  }

  // Prefer Bosnia cities explicitly
  const exactMatch = items.filter({ hasText: `${city}, BA` });

  if (await exactMatch.count() > 0) {
    await exactMatch.first().click();
    return;
  }

  // Fallback: click first result ONLY if exact match missing
  await items.first().click();
}



  async getCityName() {
    return await this.cityName.textContent();
  }

  async goToSignIn() {
    await this.signInLink.click();
  }

  async getErrorMsg() {
    return await this.errorMsg.textContent();
  }
}

module.exports = { HomePage };
