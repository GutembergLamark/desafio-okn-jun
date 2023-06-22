import { MotionSection } from "@/utils/lib/motion";

import { BenefitsItem, NewsBanner } from "@/components/general";

import "./SingleContent.scss";
import { NewsSubscriber } from "@/components/form";

const SingleContent = () => {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="single wrapper"
    >
      <NewsBanner />
      <div>
        <article className="single__content">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <BenefitsItem>
              Product discovery and building what matters
            </BenefitsItem>
            <BenefitsItem>
              Measuring to ensure updates are a success
            </BenefitsItem>
            <BenefitsItem>And much more!</BenefitsItem>
          </ul>
        </article>
        <NewsSubscriber />
      </div>
    </MotionSection>
  );
};

export { SingleContent };
