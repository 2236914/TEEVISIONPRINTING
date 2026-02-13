import SixthSectionServerWrapper from '@/components/main/sixthSection/SixthSectionServerWrapper';

import FifthSection from '@/components/main/fifthSection/FifthSection';
import FirstSection from '@/components/main/firstSection/FirstSection';
import FourthSection from '@/components/main/fourthSection/FourthSection';
import SecondSection from '@/components/main/secondSection/SecondSection';
import ThirdSection from '@/components/main/thirdSection/ThirdSection';
import TeeVisionHomepageSchema from '@/components/schemas/HomePage';
import Footer from '@/components/shared/Footer/Footer';
import MainNavigation from '@/components/shared/Navigation/components/MainNavigation/MainNavigation';
import { fetchAllHomePageProductsOnServer } from '@/server-actions/product-actions';
import { HomePageCategory } from '@/utilities/types/shared.types';
import type { HomePageProducts } from '@/utilities/fetch/product';

export default async function Home() {
  const homepageProducts = (await fetchAllHomePageProductsOnServer()) || [];

  const homepageTshirtProducts: HomePageProducts[] = [];
  const homepageSweatshirtProducts: HomePageProducts[] = [];
  const homepageLongSleeveShirtProducts: HomePageProducts[] = [];

  homepageProducts.forEach((product) => {
    if (product.categories.includes(HomePageCategory.SHORT_SLEEVE)) {
      homepageTshirtProducts.push(product);
    }
    if (product.categories.includes(HomePageCategory.SWEATSHIRT)) {
      homepageSweatshirtProducts.push(product);
    }
    if (product.categories.includes(HomePageCategory.LONG_SLEEVE_SHIRT)) {
      homepageLongSleeveShirtProducts.push(product);
    }
  });

  return (
    <main className="bg-white">
      <TeeVisionHomepageSchema />
      <div className="absolute z-[60] w-full">
        <MainNavigation />
      </div>
      <FirstSection />
      <SecondSection
        homepageTshirtProducts={homepageTshirtProducts}
        homepageSweatshirtProducts={homepageSweatshirtProducts}
        homepageLongSleeveShirtProducts={homepageLongSleeveShirtProducts}
      />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSectionServerWrapper />
      <Footer />
    </main>
  );
}
