import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAppState } from '../../store/state';
import { DetailsWrapper } from './details-wrapper';

const mapStateToProps = (state: IAppState) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => {
  return {
  };
};

export const DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(DetailsWrapper);