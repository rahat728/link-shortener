import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../UrlData/UrlData';
import { serverUrl } from '../../helpers/Constants';
import axios from 'axios';
import DataTable from '../DataTable.tsx/DataTable';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);
  const updateReloadState = (): void => {
    setReload(true);
  }
  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("The response from server is: ", response);
    setData(response.data);
    setReload(false);
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload]);
  return(
    <div className='bg-errie-black min-h-screen'>
        <FormContainer updateReloadState = {updateReloadState}/>
        <DataTable updateReloadState = {updateReloadState} data={data} />
    </div>
  ) ;
};

export default Container;
