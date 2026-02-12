import { RegistrationForm } from "@/components/employee-registration/registration-form";

async function getCities() {
  try {
    const response = await fetch("https://cgrems.com/crm/web/Apply.php?action=get_cities&api_key=MY_SECURE_TOKEN_786", {
      // next: { revalidate: 3600 } // Optionally revalidate every hour if not strictly static
    });
    const data = await response.json();

    // Handle different API response structures
    const citiesArray = Array.isArray(data) ? data : (data.data || data.cities || []);

    if (Array.isArray(citiesArray)) {
      return citiesArray;
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch cities at build time:", error);
    return [];
  }
}

export default async function EmployeeRegistrationPage() {
  const cities = await getCities();

  return <RegistrationForm initialCities={cities} />;
}
