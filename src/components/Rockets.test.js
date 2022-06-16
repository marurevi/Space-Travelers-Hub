import {
  render, screen, waitFor, fireEvent, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../pages/Rockets';
import store from '../redux/configureStore';
import MyProfile from './MyProfile';

describe('Rockets page component', () => {
  afterEach(() => {
    act(() => store.dispatch({
      type: 'rockets/SHOW_ROCKETS',
      payload: [],
    }));
  });

  it('should render the page', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    await waitFor(() => expect(screen.getAllByText('rockets').length).toBeGreaterThan(0));
  });

  it('Should reserve a rocket', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const button = await screen.findAllByText('Reserve');
    fireEvent.click(button[0]);

    const reserveBadge = await screen.findAllByText('Reserved');
    const cancelButton = await screen.findAllByText('Delete Reservation');
    expect(reserveBadge.length).toBe(1);
    expect(cancelButton.length).toBe(1);
  });

  it('Should cancel reservation to rocket', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const reserveButton = await screen.findAllByText('Reserve');
    fireEvent.click(reserveButton[0]);

    const cancelButton = await screen.findAllByText('Delete Reservation');
    fireEvent.click(cancelButton[0]);

    const button = await screen.findAllByText('Reserve');
    expect(button.length).toBe(4);
  });

  it('Should contain my rockets reservations', async () => {
    const { unmount } = render(<Provider store={store}><Rockets /></Provider>);
    const reserveButton = await screen.findAllByText('Reserve');
    fireEvent.click(reserveButton[0]);
    unmount();

    render(<Provider store={store}><MyProfile /></Provider>);
    expect(screen.queryByText('Falcon 1')).not.toBeNull();
  });

  it('Should math de snapshot', async () => {
    const dom = render(<Provider store={store}><Rockets /></Provider>);
    await act(() => expect(dom).toMatchSnapshot());
  });
});
