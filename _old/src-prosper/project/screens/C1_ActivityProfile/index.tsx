// ----------- import Packs
import React from 'react';

// ----------- import Internals
import ViewDF, {
  OpportunityCardView,
  OpportunityItemView,
  ActivityCardView,
  ActivityItemView,
} from './Views';
import { useRouter, UseInitData, useData } from '../../../config/useMorfos';
import { ClientCard, ClosedComp } from '../../comps';

// ----------- set Info Screen
export const infoSc = {
  path: 'activityProfile',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'C1',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('C1.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('signin');

  // ----------- set Return
  const infoView = { content, btnGoto };

  return (
    <UseInitData reducer={'C1_InitData'}>
      <ViewDF info={infoView}>
        <ClientComp />
        <OpportunitiesComp />
        <ActivitiesComp />
      </ViewDF>
    </UseInitData>
  );
};

const ClientComp = () => {
  // ---------- set Data
  const itemId = useData('C1.selecteds.clientId');

  return <ClientCard itemId={itemId} />;
};

const OpportunitiesComp = () => {
  // ---------- set Data
  const selId = useData('C1.selecteds.opportunityId');
  const item = useData('B1.clients.itemsInfo.' + selId);

  // ---------- set Temp Hooks
  const [sttShow, setShow] = React.useState(false);

  // ---------- set Toggle Item
  const toggle = () => setShow(!sttShow);

  // ---------- set info Return
  const infoClosed = {
    toggle,
    title: 'Oportunidades',
  };

  const infoView = {
    item,
    toggle,
    title: 'Oportunidades',
  };

  // ---------- set Return
  return (
    <>
      {!sttShow && <ClosedComp info={infoClosed} icon />}
      {sttShow && (
        <OpportunityCardView info={infoView}>
          {[1, 2].map(() => (
            <OpportunityItemView />
          ))}
        </OpportunityCardView>
      )}
    </>
  );
};

const ActivitiesComp = () => {
  // ---------- set Data
  const selId = useData('C1.selecteds.activityId');
  const item = useData('B1.clients.itemsInfo.' + selId);

  // ---------- set Temp Hooks
  const [sttShow, setShow] = React.useState(false);

  // ---------- set Toggle Item
  const toggle = () => setShow(!sttShow);

  // ---------- set info Return
  const infoClosed = {
    toggle,
    title: 'Atividades',
  };

  const infoView = {
    item,
    toggle,
    title: 'Atividades',
  };

  // ---------- set Return
  return (
    <>
      {!sttShow && <ClosedComp info={infoClosed} icon />}
      {sttShow && (
        <ActivityCardView info={infoView}>
          {[1, 2].map(() => (
            <ActivityItemView info={item} />
          ))}
        </ActivityCardView>
      )}
    </>
  );
};
