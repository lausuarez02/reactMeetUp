import { render, screen,fireEvent } from '@testing-library/react';
import NewMeetupForm from './NewMeetupForm';

describe('NewMeetupForm', () => {
  test('renders all input fields and submit button', () => {
    render(<NewMeetupForm />);
    
    const titleInput = screen.getByLabelText(/meetup title/i);
    const imageInput = screen.getByLabelText(/meetup image/i);
    const addressInput = screen.getByLabelText(/address/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const submitButton = screen.getByTestId('buttonTest');

    expect(titleInput).toBeDefined();
    expect(imageInput).toBeDefined();
    expect(addressInput).toBeDefined();
    expect(descriptionInput).toBeDefined();
    expect(submitButton).toBeDefined();
  });

  test('calls submitHandler function when form is submitted', () => {
    const { getByTestId } = render(<NewMeetupForm />);
    const formElement = getByTestId("submitTest");
    const submitHandler = jest.fn();

    formElement.addEventListener("submit", submitHandler);
    fireEvent.submit(formElement);

    expect(submitHandler).toHaveBeenCalled();
  });
});