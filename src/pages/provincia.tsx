import FlexLayout from 'layout/FlexLayout';
import ProvinciaApi from 'features/provincia/ProvinciaApi';
import { ApiList } from 'features/provincia/services/ApiList';

export default function Provincia() {
  return (
    <FlexLayout name="Provincia">
      <ProvinciaApi list={ApiList} />
    </FlexLayout>
  );
}
