# Legal GEM

## Open ideas on where to steer the project 

- [ ] find publically accessible archives of court cases from various states, high courts and supreme court
        For this you can look into the official judiciary app that exists and what APIs it is using.
        In case those APIs are public, or you are able to scrape those APIs or you are able to write a wrapper around 
        those APIs, you can give the functionality of fetching the next court session date etc, to the user and lawyer
        basically it'll be a complete legal dashboard:
            - to find lawyers
            - get consultations
            - manage ongoing cases
            hence it will be very usable and managable for people statying in other states and having court cases
            in other states and will streamline the process of lawyer-client interaction


## backend features

- [ ] Lawyer's POV
    - [ ] login
    - [ ] signup
    - [ ] Lawyers can fill in pricing tiers for casees and appointments
        - [ ] Will be different for both
        - [ ] We should have some alerts to tell the lawyer and the client upon exhaustion of the benefits in a tier.
        - [ ] Can also define per service charge on a-la-carte basis:
            - [ ] charge sheet filing
            - [ ] A consultation appointment can be a part of these a-la-carte services as well
            - [ ] researh for other services lawyers provide
    - [ ] lawyer verification
        - [ ] Can this be automateed??? Research.
        - [ ] In case automation is not possible add the feature for manual verification, this will include
        asking the lawyer to upload all the relevant documents (again research on what all documents will be relevant) and then say a team will manually verify those documents
    - [ ] consultancies --> these will turn into cases and will be initiated by clients (users in the system)
        - [ ] Appointments - (pending, upcoming, completed)
        - [ ] filings
        - [ ] Documents -- Point to take care of is security -- this will mostly be done by enabling some sort of cryptographic encryption to protect the files
        - [ ] Past cases - this will be more like a order completed thing 
        - [ ] based on available appointment slots
    - Rules to turn consultations into cases
        - Atleast one appointment should be scheduled between lawyer and client and it should be attended by both
        - Either client or lawyer can initate the process of converting a consultancy into a case, but the process will only be completed after getting the approval from both parties.
        

- [ ] User's POV
    - [ ] Login
    - [ ] Signup
    - [ ] Have reputation system based on cancellation of appointments, cases taken up, cases won, cases lost, appointments scheduled and user reviews. -- design a small algorithm which will generate the reputation of any lawyers based on these metrics.
    - [ ] View lawyers 
        - [ ] functionality to filter lawyers
             - [ ] based on years of experience
             - [ ] based on the level of court they take cases in (session court lawyers, high court lawyers, supreme court lawyer) [TODO: find better technical terms]
             - [ ] based on number of cases done
             - [ ] based on the specialisation (finance, criminal, housing, banking etc. etc.)
             - [ ] based on per consultation prices
             - [ ] based on pending appointments
             - [ ] based on location where the lawyer practices
             - [ ] based on locatons they take up cases in
    - Make this a separate application 

- [ ] Drive sort of functionality -- can see all the docs, but they will be organised folder wise based on the case
    - [ ] authentication and authorization -- so that no other user can access these files
    - [ ] sharing funcitonality as well
        - [ ] Access roles:
            - owner: can update, delete and share further
            - viewer: can only view
            - editor: can update but not delete or share further
    - Make this a separate application -- drive.legalgem.com

- [ ] Archive collation
    - [ ] Research: find sources where old case datas and citations are available -- this can then be made easily searchable using elastic search
    - [ ] freely available books 
    - Make this a separate application  -- archive.legalgem.com

- [ ] Community Sections
    - [ ] collection of blogs for now