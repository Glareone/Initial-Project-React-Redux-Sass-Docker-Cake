import SomethingApi from '../api/SomethingApiLayer';

const getPreparedData = data => ({
  favIconUrl: data.fav_icon_url,
  title: data.title,
  layouts: data.layouts
    ? data.layouts.map(layout => layout.id)
    : [],
});

const getPreparedSomethingForFrontEnd = (something) => {
  const preparedSomething = {
    customerId: something.customer_id,
    name: something.name,
    createdOn: something.created_on,
    publishedOn: something.published_on,
  };

  return {
    ...preparedSomething,
    data: getPreparedData(something.data),
  };
};

class SomethingProvider {
  constructor(params) {
    this.api = params.api;
  }

  getSomething(name) {
    return this.api.getSomething(name)
      .then(something => getPreparedSomethingForFrontEnd(something));
  }
}

export default new SomethingProvider({
  api: SomethingApi,
});
