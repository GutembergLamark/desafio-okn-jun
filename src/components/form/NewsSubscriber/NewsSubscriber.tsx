import "./NewsSubscriber.scss";

const NewsSubscriber = () => {
  return (
    <form className="newsletter-form form">
      <fieldset className="newsletter-form__container">
        <label htmlFor="email">E-mail address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@company.com"
        />
      </fieldset>
      <button className="newsletter-form__submit" type="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export { NewsSubscriber };
