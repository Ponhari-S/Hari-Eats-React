import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { render, waitFor, screen } from "@testing-library/react";
import Body from "../Body";
import store from "../../utils/Store";
import { topRestaurants } from "../../mock/dummyAPI";

jest.mock("../../utils/useOnline", () => ({
  __esModule: true,
  default: () => true,
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        statusCode: 0,
        data: {
          cards: [
            {},
            {},
            {},
            {},
            {  
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: topRestaurants,
                    },
                  },
                },
              },
            },
          ],
        },
      }),
  })
);

test("Shimmer loads before data is fetched", () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  expect(screen.getByTestId("shimmer")).toBeInTheDocument();
});

test("Restaurant list loads after data is fetched", async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  expect(screen.getByTestId("shimmer")).toBeInTheDocument();

  await waitFor(() => {
    const restaurantCards = screen.getAllByTestId("restaurant-card");
    expect(restaurantCards).toHaveLength(topRestaurants.length);
  });

  expect(screen.queryByTestId("shimmer")).not.toBeInTheDocument();
});