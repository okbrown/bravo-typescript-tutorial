import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { App } from './src/app';

describe("App", () => {
    it("should display div with text", () => {
        const {getByText} = render(<App/>);
        expect(getByText('whats happen')).toBeInTheDocument();
    });
});
