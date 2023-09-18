## User attributes in the db

- username
- password
- name
- email
- mobile number 
- ongoing cases: string[] -> FK to cases, array will have case ids (PKs)
- scheduled appointments: string[] -> FK to appointments, array will have appointment ids (PKs)
- payment receipts
- past cases (this will have both closed and abandoned cases)
- past appointments
- past services
- pending appointments
- role: to give something like a Pro subscription etc etc
- pending consultation to case conversion requests