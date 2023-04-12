import React from "react";
import { render, screen } from "@testing-library/react";
import NewMeetupsPage from "pages/newMeetup/newMeetup";

describe("NewMeetupsPage", () => {
  test("renders the 'Add New Meetup' heading", () => {
    render(<NewMeetupsPage />);
    const headingElement = screen.getByRole("heading", {
      name: /add new meetup/i,
    });
    expect(headingElement).toBeDefined();
  });
});