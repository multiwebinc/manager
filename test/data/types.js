export const apiTestType = {
  hourly_price: 0.015,
  id: 'linode2048.5',
  label: 'Linode 2048',
  mbits_out: 125,
  monthly_price: 10,
  ram: 2048,
  service_type: 'linode',
  storage: 24576,
  transfer: 2000,
  vcpus: 2,
  backups_price: 2.5,
  class: 'standard',
};

export const testType = {
  ...apiTestType,
  _polling: false,
};

export const types = {
  'g5-nanode-1': {
    mbits_out: 1000,
    backups_price: 2.0,
    id: 'g5-nanode-1',
    storage: 20480,
    ram: 1024,
    class: 'nanode',
    hourly_price: 0.0075,
    transfer: 1000,
    vcpus: 1,
    label: 'Linode 1024',
    monthly_price: 5.0,
  },
  'linode1024.5': {
    hourly_price: 0.0075,
    id: 'linode1024.5',
    label: 'Linode 1024',
    mbits_out: 125,
    monthly_price: 5.0,
    ram: 1024,
    service_type: 'linode',
    storage: 24576,
    transfer: 1000,
    vcpus: 1,
    backups_price: 2.0,
    class: 'standard',
  },
  'linode2048.5': testType,
  'g5-highmem-1': {
    mbits_out: 1000,
    backups_price: 5.0,
    id: 'g5-highmem-1',
    storage: 20480,
    ram: 16384,
    class: 'highmem',
    hourly_price: 0.09,
    transfer: 5000,
    vcpus: 1,
    label: 'Linode 16384',
    monthly_price: 60.0,
  },
};
