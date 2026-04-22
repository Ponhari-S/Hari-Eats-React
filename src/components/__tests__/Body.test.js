import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { render } from "@testing-library/react";
import Body from "../Body";
import store from "../../utils/Store";
import { topRestaurants } from "../../mock/dummyAPI";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        statusCode: 0,
        data: {
          cards: [
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
  const { getByTestId } = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmerUI = getByTestId("shimmer");
  expect(shimmerUI).toBeInTheDocument();
});