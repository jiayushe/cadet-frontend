import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  createMaterialFolder,
  deleteMaterial,
  deleteMaterialFolder,
  fetchMaterialIndex,
  uploadMaterial
} from '../../../actions';
import MaterialUpload, {
  IDispatchProps,
  IStateProps
} from '../../../components/academy/materialsUpload';
import { IState } from '../../../reducers/states';

const mapStateToProps: MapStateToProps<IStateProps, {}, IState> = state => ({
  materialIndex: state.session.materialIndex
});

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      handleCreateMaterialFolder: (title: string) => createMaterialFolder(title),
      handleDeleteMaterial: (id: number) => deleteMaterial(id),
      handleDeleteMaterialFolder: (id: number) => deleteMaterialFolder(id),
      handleFetchMaterialIndex: (id?: number) => fetchMaterialIndex(id),
      handleUploadMaterial: (file: File, title: string, description: string) =>
        uploadMaterial(file, title, description)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialUpload);
