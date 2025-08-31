import "../styles/globals.css";
import { NavBar, Footer } from "../Components";
import { CrowdFundingProvider } from "../Context/CrowdFunding";
import { AuthProvider } from "../Context/AuthContext"; // ✅ Added for Firebase Auth

import HowItWorks from "../Components/howitworks";
import AboutUs from "../Components/AboutUs";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider> {/* ✅ Firebase Auth Context */}
      <CrowdFundingProvider>
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
          <NavBar />

          {/* Main Content */}
          <main className="flex-grow">
            <Component {...pageProps} />

            {/* How It Works Section */}
            <HowItWorks />

            {/* About Us Section */}
            <AboutUs />
          </main>

          <Footer />
        </div>
      </CrowdFundingProvider>
    </AuthProvider>
  );
}


