import { Provider } from 'react-redux';
import {
  render, screen, fireEvent, act,
} from '@testing-library/react';
import Missions from '../pages/Missions';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile';
import { joinMission, leaveMission } from '../redux/missions/missions';

describe('Tests: Missions', () => {
  afterEach(() => {
    act(() => store.dispatch({
      type: 'space-travelers-hub/missions/GET_MISSIONS',
      payload: [],
    }));
  });

  it('Join a mission', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const button = await screen.findAllByText('Join Mission');
    fireEvent.click(button[0]);

    const joinBtn = await screen.findAllByText('Leave Mission');
    expect(joinBtn.length).toBe(1);
  });

  it('Leave the mission', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const joinBtn = await screen.findAllByText('Join Mission');
    fireEvent.click(joinBtn[0]);

    const leaveBtn = await screen.findAllByText('Leave Mission');
    fireEvent.click(leaveBtn[0]);

    const button = await screen.findAllByText('Join Mission');
    expect(button.length).toBe(10);
  });

  it('Contain Join missions', async () => {
    const { unmount } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const joinBtn = await screen.findAllByText('Join Mission');
    fireEvent.click(joinBtn[0]);
    unmount();

    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(screen.queryByText('Thaicom')).not.toBeNull();
  });

  it('Should match the snapshot', async () => {
    const dom = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    await act(() => expect(dom).toMatchSnapshot());
  });

  it('Return an action with type missions/JOIN', () => {
    const id = 1;
    const action = joinMission(id);
    expect(action.type).toBe('space-travelers-hub/missions/JOIN');
  });

  it('Return an action with payload id = 1', () => {
    const id = 1;
    const action = joinMission(id);
    expect(action.payload).toBe(1);
  });

  it('Return an action with type /missions/REMOVE', () => {
    const id = 1;
    const action = leaveMission(id);
    expect(action.type).toBe('space-travelers-hub/missions/REMOVE');
  });

  it('Return an action with payload id = 1', () => {
    const id = 1;
    const action = leaveMission(id);
    expect(action.payload).toBe(1);
  });
});
