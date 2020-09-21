import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phase: "beginning",
      state: "unknown",
      event: "unknown",
      dates: ["start", "finish"],
      outdoorOrIndoor: "unknown"
    }; 
  };

  render() {
    return(
      <div className="App">
        <select class="state">
          <option value="start">pick a state</option>
          <option value="vic">Victoria</option>
          <option value="nsw">New South Whales</option>
          <option value="act">Australian Capital Territory</option>
          <option value="nt">Northern Territory</option>
          <option value="tas">Tasmania</option>
          <option value="wa">Western Australia</option>
          <option value="qld">Queensland</option>
        </select>
        <select class="number-of-people">
          <option value="start">number of people</option>
          <option value="10>">10 or less</option>
          <option value="50>">50 or less</option>
          <option value="100>">100 or less</option>
          <option value="200>">200 or less</option>
          <option value="200<">200 or more</option>
        </select>
      </div>
    );
  }
}


let federal = `
Jurisdiction	Current Restrictions / Road to Recovery Stage / Step / Phase	Effective from	Are Live Music Events permitted?	Maximum No. of patrons permitted / sqm rule	Physical distancing	Must all patrons be seated?	Can alcohol be served to unseated patrons?	Can patrons dance?	Patron contact register required?	COVID Safety Guidelines / Industry Framework	COVID-19 Safety Plan / Checklist  / Certificate Required?	Ticketing 	Mandatory Training	Border Controls	Additional Government Support	Other considerations	Proposed Next Recovery Stage	Proposed Effective Date
Federal	Step 3	Friday 26 June	Yes, as determined by states & territories. Note restrictions may follow the AHPPC Statement on high risk environments.					No as per AHPPC statement		"AHPPC Statement on very high risk environments – nightclubs, dance venues, and large unstructured outdoor events.

SafeWork Australia Guiding Principles
"Each state or territory has its own entry requirements and travel restrictions. You must comply with any border rules of the state or territory that you are entering or leaving.	Payments and Services during COVID-19			
New South Wales	"Current Restrictions

NSW Public Health Order - Restrictions on Gathering & Movement 

"Friday 31 July	" Yes, seated live music events are permitted with restrictions laid out in the NSW Public Health order for gatherings. Nightclubs operating for dancing & music festivals within the meaning of the Music Festivals Act 2019 incl. those with < 2000 people ARE NOT permitted.
Night clubs may open for other activities."	"Outdoors: No more than 20 people are allowed to gather outside in a public place.  This is not applicable for a complying premises listed in Schedule 1 of the NSW Public Health Order required to develop and keep a COVID-19 Safety Plan.

Hospitality venues such as cafes, restaurants, registered clubs, small bars and pubs: maximum of 300 people in the venue at any one time or one customer per 4 sqm, whichever is lesser.   For venues with separate areas, max capacity is 300 people in each separate area at any one time or one customer per 4 sqm, whichever is lesser.    

Corporate events: no more than 150 people or one customer per 4 sqm rule, whichever is lesser.

How to calculate the 4 sqm rule:
- if the size of the premises is not more than 200 sqm of floor space,
the entire premises

- if the size of the premises is more than 200 sqm of floor space, only
those areas that are open to the public.

For major recreation facilties with more than 500 people; all patrons must have a ticket for entry with an allocated seat with the total capacity to the lesser of 25% or 10,000 people.  

Select stadiums in Sydney will have increased capacity to the lesser of 50% or 40,000 people frm 1 October, at this stage only for sporting events.



"	"A dedicated COVID Safe Hygiene Marshall in distinctive clothing must oversee social distancing, cleaning and hygiene for all venues, or each section of a venue, with 250 persons or more -  whenever venue is open.  Smaller venues with capacity < 250, COVID Safe Hygiene Marshall is only required during peak periods (lunch 12pm to 3pm and dinner 5pm to 9pm)

Max 10 people per booking or per table.

For concert halls and seated theatre, seated groups or individuals should be separated by 1–2 empty seats on both sides.

Consider markers on the floor in all areas where queuing may occur.

1.5m between between others where possible

Refer also NSW Health Guidelines regarding singing and the playing of instruments."	"Yes -  as far as practicable, persons on the premises remain seated
"	 As far as practicable, persons on the premises remain seated.  Alcohol may be purchased at the bar but must only be consumed while seated.	"No dancing by patrons.  
Guidelines outline that additional planning should be considered for performances with high energy dance, singing and wind instruments, 
including ensuring 3m distance from the audience.  "	Venues such as cafes, restaurants, registered clubs, small bars and pubs: Yes, a digital record must be created within 24 hours if paper register used.  QR code sign-in is strongly encouraged.	"
Most common COVID Safe Guidelines relevant for live music events are:

COVID Safe Guidelines for major receation facilities & stadiums

COVID Safe Guidelines for conferences, functions and corporate events

COVID Safe Guidelines for pubs, clubs, small bars

COVID Safe Guidelines for restaurants & cafes

COVID Safe Guidelines for theatres and concert halls
"	"Registering as a COVID Safe business is mandatory for hospitality venues such as cafes, restaurants, food and drink premises, micro-breweries, cellar doors, casinos, registered clubs, small bars and casinos. Venues must have a copy of their COVIDSafe plan onsite and complete a plan for each section of their venue. For other types of businesses, registration is optional but recommended:

Refer to Schedule 1 of the NSW Public Health Order - Restrictions on Gatherings & Movement for the types of premises that require a COVID Safe Plan.  Those relevant for live music events include:

COVID Safe Plan for major recreational facilities & stadiums

COVID Safe Plan for conferences, functions and corporate events

COVID Safe Plan for pubs, clubs, small bars

COVID Safe Plan for restaurants

COVID Safe Plan for theatres and concert halls


"	"No specific requirements.

Seated ticketing  should adhere to the social distancing requirements depending on the type of premises seating arrangements.

Consider flexibility for patrons that require to cancel or not attend due to COVID-19 factors.

Promote digital ticketing wherever practical.

"	No	"
NSW-Victoria border closed - ‬Current NSW-Victoria border restrictions

Current border restrictions - frequently asked questions

Anyone who has been in Victoria within the last 14 days must not enter NSW unless they hold a current entry permit.  

From 12.01am Friday 7 August NSW residents returning from Victoria must go into mandatory hotel quarantine for 14 days at their own expense. All returning NSW residents, unless they live within the NSW border regions, will only be allowed to return to NSW through Sydney Airport.

Residents in a border zone can apply for a NSW border entry permit to cross the border into NSW, with certain conditions.
A border zone resident who is a Victorian resident is authorised to enter and remain in NSW only for work, education, medical or health care, or providing or receiving care to a vulnerable person, and
must not travel to any part of NSW that is outside of the border zone and must not enter NSW if they have travelled in Victoria outside the border zone within the previous 14 days.
"	"Small businesses in industries highly impacted by COVID-19 are eligible to apply for a grant of up to $3000 to safely re-launch operations. Applications open 1 July via the Service NSW website.

Payroll tax relief"	"NSW Chief Health Officer specifically recommends the use of face masks (where practical) in indoor settings with a higher risk of transmission, such as for the staff of hospitality and customer-facing venues i.e. cafes, restaurants, pubs and clubs, during attendance at places of worship. Wearing a mask in any of these settings is not mandatory but is highly recommended, especially in areas where there has been community transmission.       

Employers and self-employed people must notify SafeWork NSW by calling 13 10 50 of any confirmed case of COVID-19 arising out of work, and a person requiring treatment as an in-patient in a hospital for a COVID-19 infection which arose out of work.  

Also refer relevant COVID Safe Plans.

"	TBC	TBC
Victoria	"Updates on Current Restriction Levels Here

Melbourne metro:  Roadmap

Rest of Victoria: Roadmap"	"From 11:59pm on 13 September, metro areas will start first step restrictions and regional areas start second step restrictions.

From 11:59pm on 16 September, regional areas will start third step restrictions."	No	"All indoor venues currently closed.

For other categories and the expected reopening Stages that your live music business may fall under, please see Here

All indoor venues in Metro and Regional Victoria to be closed until Road Map Final Step (estimated to be 23 November 2020) and then will have capacity restrictions on patrons which will only be lifted when Victoria attains the COVID Normal Stage"	Use of face coverings is mandatory throughout Victoria.				Yes	"
Creative Victoria Arts and Culture Return-to-Business Guideliness

Music Victoria COVID-19 Guidance Note: Live Music Venues

Business Victoria Hospitality Industry Guidelines
"	"Arts & Culture Checklist for venues owners and managers  - before you open

Arts & Culture Checklist for venue owners and managers - after you open

Arts & Culture Checklist for staff and volunteers - after you open"			"The border between NSW and Victoria was closed from 12.01am Wednesday 8 July 2020.  A permit is not required to travel to Victoria from NSW.   A COVID-19 NSW border entry permit to travel from Victoria to NSW. 

A permit is not required to travel to Victoria from New South Wales.
"	"
COVID Business Support

Creative Victoria - Victorian Live Music Venues Program"		TBC	TBC
Queensland	"Recovery Stage 3
"	Friday 3 July	Yes - the key principle in staging and participating is to avoid overcrowding and venues/organisers must have the necessary plans in place.   	"From 8:00am on 22 August 2020, max 10 people for gatherings in public spaces in listed Local Government Areas in greater Brisbane. Outside of these areas, gatherings in public spaces are limited to  max 30 people.

Businesses operating under a COVID Safe plan are not affected by the latest restrictions announced on 22 August 2020 for the Greater Brisbane areas. This includes businesses operating under a COVID Safe Industry Plan, a COVID Safe Checklist, COVID Safe Site-Specific Plan or COVID Safe Event Plan as set out below:

Up to 25,000 people or 50% of capacity (whichever is lesser) at Queensland’s Major Sports Facilities, with a COVID Safe Plan.

Concert venues, theatres and auditoriums - up to 50% capacity or 1 person per 4 sqm (whichever greater), with a COVID Safe Plan.   

How to Determine Maximum Patronage for Event Organisers

All other venues such as licensed venues:  
1 patron per 4 sqm if venue > 200 sqm 
1 patron per 2sqm if venue < 200 sqm up to
50 patrons at a time.

Any dining in services no longer needs to be divided into designated areas. 
"	"1.5m between others (except if in the same group)

COVID Safe Checklist for seated drinking and dining"	Yes	"From 24 July, Queensland Chief Health Officer's Direction has reinstated the restriction for all dining and drinking for seated patrons only.  How to understand this direction, including Q&A’s can be viewed here 

Under this direction these venues can only provide food and drink for seated patrons:
pubs, licensed clubs, RSL clubs, function centres, bars, wineries, distilleries and microbreweries and licensed premises in hotels"	Dance floors not permitted incl. in bars, nightclubs or wedding venues	"Yes, venues or event organisers must keep contact information of staff and all patrons (full name, phone number, email (residential address if email unavailable) and date and time period of patronage) for 56 days. Patron details need to be verified at the point of entry.

To capture the time period, businesses must keep a person’s ‘in-time’ and either the person’s ‘out-time’, have policies that restrict time periods (for example, a two-hour table limit) or inform the person they are more likely to be contacted by authorities in the event of contact tracing if an ‘out-time’ is not provided.

QLD Health has strict expectations regarding the collection, storage and verification  at point of entry of all contact information:
* Advise patrons it is a condition of entry to leave their contact information.
* Have a clear and consistent method for keeping, storing, producing and destroying contact information. Ensure this method is discussed with all staff.
* Contact information is required from each patron, not a single patron within a group.
* Review details provided by patrons to ensure there are no missing fields or clearly false or misleading information.
* Contact information must be stored such that it cannot be reviewed or tampered with by other patrons (e.g. a running list kept permanently on a dining table is not suitable).
* Contact information must be stored in a manner that facilitates efficient retrieval for a specified date and/or time (e.g. batched per day).
When choosing to use a mobile application or QR code to collect contact information, if only a single patron within a group downloads the mobile application or uses the QR code, it must contain the contact information of all patrons within that group. Staff must be able to readily review contact information submitted via the mobile application or QR code.

Contact tracing registers and privacy rights"	" All businesses must comply with the COVID Safe Business Framework - this includes having their Work Health and Safety (WHS) Plan in place, and up to date including strategies to manage COVID-19

Organising an Event Fact Sheet - Advice for Event Organisers - having the appropriate documentation and approvals in place  General Industry 

Framework for COVID Safe Events in Queensland, plus frequently asked questions    

Event Organisers must identify which approved COVID Safe Industry Plans apply to parts of their event, and refer to the relevant COVID Safe Industry Plan for guidance on measures that should be implemented in relation to the particular activity.   Organisers must ensure compliance with these approved COVID Safe Industry Plans for the relevant components of their event, including any specific requirements regarding approvals.      

Individual businesses don’t need to develop their own Safe Industry Plan or site-specific plan if they are following an approved Safe Industry Plan:   

Industry Specific COVID Safe Plan for Hotels, Clubs & Nightclubs
     
 Industry Specific COVID Safe Plan for Live Performance Venues & Theatres

Industry Specific COVID Safe Plan for Live Music Venues - work in progress  

Further Guidance from Licensed Venues from Business Queensland "	"Events may operate in compliance with an Approved Industry or Site Specific Plan, in addition to a COVID SAFE Event Plan.   COVID Safe Site-Specific Plans exist for some of QLD’s major venues
including stadiums, conventions centres, performing arts centres, concert venues and theatres and auditoriums with seating capacity greater than 1,000. All activities occurring on these
sites are governed by the Site Specific Plan. Event organisers who are holding events in these major venues
should ask the venue operator if a Site Specific Plan has been developed for the venue and approved by
Queensland Health. 

If > 500 people attending an event operating under an Industry or Site Specific Plan, organiser must notify the local public health unit at least 10 business days before the event taking place.

Category 3 Events: < 500 people - no approval needed when following a Safe Event Checklist 
Advice for organisers of Category 3 events

Category 2 Events: 500 to 10,000 people – Safe Event Plan to be approved by local public health units required

Category 1 Events:  > 10,000 people –  Safe Event Plan to be approved by the Queensland Chief Health Officer

Statement of Compliance for Safe Events - COVID Safe Event Checklist

Statement of Compliance for Safe Events - COVID Safe Event Plan

Statement of Compliance to be displayed in a prominent, visible location at events / venues

"	Seated ticketing  should adhere to the social distancing requirements depending on the type of premises seating arrangements	"Online training has been developed to provide all staff in industries requiring a COVID Safe Checklist with training that will allow them to help ensure a COVID Safe work environment. This training is mandatory and must be completed within 2 weeks of a business opening/reopening. Staff that commence with your business after this 2-week period must complete this training before commencing.

Free COVID Safe training programs are available online through TAFE Queensland. 
Course developed for dining services by Restaurant & Catering Australia

You can also meet this mandatory training requirement by doing a COVID Safe online course developed by industry and reviewed by Queensland Health and the Office of Industrial Relations. Please contact info@desbt.qld.gov.au  to facilitate this review. 
"	"Current border restrictions

A QLD Border Declaration Pass is needed to cross the QLD border.  Anyone can enter Queensland unless they have been in a COVID-19 hotspot in the last 14 days.  Persons entering from COVID hotspots will be turned away at the border, except people needed in QLD  for essential activities. 

All of Victoria, New South Wales and the Australian Capital Territory are now COVID-19 hotspots."	"Assistance for business and industry from the QLD and Australian governments

QLD Treasury COVID Economic Recovery Plan

QLD COVID-19 Supplier Portal







"	Venue/land owners including local councils, and other approval bodies remain responsible for assessing event arrangements which relate to any usual approvals/permits/licenses necessary to be obtained, and for issuing relevant approvals/permits/licenses but are not responsible for determining whether an event is able to proceed from a public health perspective. Event Organisers must show venue/land owners a completed an approval from the Public Health Unit or Chief Health Officer or a completed COVID Safe Event Checklist, and a signed Statement of Compliance to demonstrate that the event is being conducted in accordance with Queensland Government public health expectations. 	TBC	TBC
South Australia	"Recovery Step 3

Current Restrictions

Emergency Management (Public Activities No 8) Direction"	29 June 2020, with additional restrictions to come in as at 12.01am on 21 August	Yes	"Density requirement of 1 person per 2 sqm applies for defined public activities. 

The maximum number of members of the public in any single room or enclosed area must not exceed 1 person per 2 sqm. 

Only the areas of the place/Venue that are used by members of the public for the purposes of the activity are to be included in calculating Venue's density allowance (e.g. Venues can't include the space behind the bar, or in other staff only areas, in their calculations).

For the avoidance of doubt, staff are NOT counted when calculating the Venue's density allowance. Children and minors DO count towards calculating Venue density allowance."	Venue operators must take reasonable steps to ensure that facilities (meaning all aspects of the place/Venue where an event is being held) allow for 1.5m between people.	Yes	No	"Any Venue intending to allow patrons to both consume alcohol and dance whilst at the event/within the Venue cannot do so without a COVID Management Plan approved by SA Health. 

From 27 July 2020, approval of certain activities and venues that require a COVID Management Plan by SA Health has been temporarily paused while the risks arising from the outbreaks in Victoria and NSW can be assessed.

Applications on hold include those involving the consumption of alcohol and dancing in a licensed premises, or, the consumption of alcohol, playing loud amplified music and dancing in a licensed premises. This decision will impact nightclubs, function centres and some events which have already submitted plans for approval.

Until further notice, patrons cannot dance and drink at the same venue."	"Access template here.  

Businesses currently required to keep records for contact tracing are: 
- Gaming Machine venues 
- indoor fitness classes
-indoor public meetings
- personal care services, 
- ceremonies, 
- weddings (including wedding ceremonies and receptions), 
- funeral services (including a wake) 
- auctions and inspections of premises for
the purpose of sale or rental, 
- provision of recreational transport, and driver instruction

***Note*** - provision of public entertainment (where referred to in the above linked template) 
"	"Current Emergency Management Direction - Restrictions for events/activities/gatherings - Frequently Asked Questions

Restrictions & Responsibilities - common questions

Communal food service areas are not permitted to be opened, including buffet and salad bars. This includes both self-service and/or staff serving food - Frequently Asked Question: Communal / Shared Food

COVID Management Plan provides insights into the risks that industry needs to combat and mitigate

Table summarising Public Activity requirements"	"COVD-SAFE PLAN 
Businesses involved in a defined public activity must have a COVID-Safe Plan in place in order to trade.  

For the avoidance of doubt, if there are multiple people hiring a venue or place to conduct seperate defined public activities (record sales events, etc) then the owner of the place or Venue must have a COVID-Safe Plan in place.

COVID-Safe plans need to be kept in a visible place, much like a liquor license is required to be kept on display. You need to provide it to SAPOL or authorised SA Health representatives if and on request.

Frequently Asked Questions for COVID-Safe Plans  

COVID MANAGEMENT PLAN
An approved COVID Management Plan, will be required for:  
- events/activities where > 1000 people are reasonably expected to be attend;
- the onsite purchase and consumption of food or beverages where the total no. of persons present at the site is reasonably expected to exceed 1000 people;
- the operation of a nightclub;
- the operation of licensed premises where drinking and dancing occurs.

For venues/activities with drinking and dancing that has multiple vendors or activities, events, gatherings with > 1,000 people that has multiple individual vendors, both a COVID Management Plan for the event/activity and a COVID-Safe Plan for each vendor will be required.  

Communal food service areas are not permitted to be opened, including buffet and salad bars. This includes both self-service and/or staff serving food.Frequently Asked Question: Communal / Shared Food  "		"COVID MARSHALS
From 21 August certain venues MUST have a trained and Nominated OR Appointed COVID Marshal in place. To see whether you are required to have a COVID Marshal see the link here. 

As a general rule, If you have a capacity of 200 people or less then you must have a Nominated COVID Marshal. This means that you can nominate one of your regular staff members to also perform the role of COVID Marshal in addition to conducting his/her usual duties.

If you have a capacity of more than 200 then you must have a Dedicated COVID Marshal. This means that you must have a staff member on site that only and exclusively performs the role of COVID Marshal during your business or activity’s operations.

For the training requirements for a COVID Marshall, please see this link here.

GENERAL COVID STAFF TRAINING
Committing to a mandatory staff training in awareness, prevention and best health practices regarding COVID-19 is recommended as part of an effective COVID-Management Plan with some resources available here."	"Full Travel Restrictions details here

INTRASTATE - WITHIN SA
Travel within South Australia is unrestricted. People are free to visit regional areas.

INTERSTATE
Travellers from Victoria, other than Essential Travellers, are not permitted to travel to South Australia.

Travellers from NSW must quarantine for 14 days upon arrival in South Australia.

Travellers from ACT, NT, QLD, TAS and WA are able to enter South Australia directly without restriction (i.e. no requireent to quarantine).

INTERSTATE TRAVEL PROCESS
A pre-approval process is now in place for travellers wishing to enter South Australia. The Cross Border Travel Registration should speed up the border crossing process and provide certainty for people who want to enter SA.

Travellers from NSW, other than essential travellers, will be required to:
- self-quarantine for 14 days after entering SA
- submit for COVID-19 testing on:
- the first day of entry to SA (the day of arrival)
- the twelfth day of arrival.

OVERSEAS ARRIVALS
All international arrivals in South Australia are subject to 14 days hotel quarantine. If SA is not an international travellers last point of travel/destination, they will not be subject to 14 days hotel quarantine UNLESS they leave the airport."	SA Business Information Hub - further information and support	"From 21 August certain venues MUST have a trained and appointed COVID Marshal in place. To see whether you are required to have a COVID Marshal see the link here. 

If you are required to have a COVID Marshal, please see the ""Mandatory Training"" column of this document."		TBC
Northern Territory	Recovery Stage 3	Friday 5 June	Yes		1.5m between groups not known to you		Groups of up to 10 people can dine or drink together. They can be seated at the same table	Yes, with physical distancing	Not mandatory but currently strongly encouraged especially at large scale events 	"Stage 3 Guidelines for events and gatherings

Stage 3 Guidelines for gaming, amusement and other entertainment venues

Stage 3 Guidelines for restaurants, cafes, bars, pubs
"	"Events < 100 people - no Event Safety Plan or checklist required, however physical distancing and hygiene practices still apply.

Events 100 - 500 people - Event Safety Plan does not require CHO approval but will receive a Statement of Commitment upon receipt of the Event Safety Plan

Events > 500 people - Event Safety Plan requires prior CHO approval before event can proceed

Events < 100 people - no Event Safety Plan or checklist required, however physical distancing and hygiene practices still apply.

Events 100 - 500 people - Event Safety Plan does not require CHO approval but will receive a Statement of Commitment upon receipt of the Event Safety Plan

Events > 500 people - Event Safety Plan requires prior CHO approval before event can proceed

Nightclubs must complete specific online checklist prior to re-opening after lockdown 

Restaurants, cafes, bars & pubs must complete online checklist prior to reopening after lockdown 

Restaurants, cafes, bars & pubs must complete online checklist prior to reopening after lockdown.



"	Consider flexibility for patrons that require to cancel or not attend due to COVID-19 factors		"Current border control requirements

From July 17, all arrivals to the NT must:

* complete a Border Entry Form
* complete 14 days of mandatory, supervised quarantine at their own expense unless exempt, if recently been in a declared COVID-19 hot spot.  

From 9 October 2020, NSW will no longer be a declared COVID-19 hotspot provided case levels as at 11 September 2020 remain the same."				TBC
Western Australia	"Recovery Phase 4

Current restrictions

Closure and Restriction (Limit the Spread Directions)"	Saturday 27 June	Yes, except for music festivals	"WA is the only State with the reduced 2sqm rule in place, with others still using the 4sqm rule. 

The 2sqm rule applies only to patrons, not staff except for venues that hold more than 500 patrons."	1.5m between others where possible	No	Yes	Yes, with physical distancing	No	"COVID General Safety Guidelines Phase 4

Information for food business and licensed premises

COVID Safety Guidelines - Food & Licensed Venues"	"Yes - varies by venue / event purpose.

COVID Safety Plan food and licensed venues"		All staff must complete the AHA Hospitality and Tourism COVID-19 hygiene course before returning to work.	"Travel to WA - current restrictions

A G2G pass is required to enter Western Australia.  There is currently a mandatory 14 days of isolation required once in WA with mandatory testing within 24 hours of landing and again on day 11."			Stage 5 - all remaining restrictions removed incl. 2 sqm rule and 50% capacity for major venues. Hard border controls remain until at least Stage 6.	24 October
Australian Capital Territory	"Recovery Step 3.1

Current Restrictions"	Monday 10 August	"
Yes, except for music festivals"	"Cafes, restaurants & Licensed venues:  100 patrons per indoor space or outdoor space, or one patron per 4 square metres, whichever is lesser.  Performers and staff are excluded from both the patron limit and the one person per 4 square metre rule.   All hospitality venues and licensed premises must prominently display the maximum number of patrons allowed in the venue under COVID restrictions.  This applies to venues who provide live entertainment as an ancillary element to the serving of food and alcohol.

Live Performance venues/theatres: 100 people (including performers, patrons, and staff) per indoor or outdoor space, or one person per 4 sqm (whichever is lesser) with physical distancing.

Please confirm the status of your venue/event with Health Protection Services ACT on (02) 62077244 or the Canberra Business Advice and Support Service"	"Cafes, restaurants & Licensed venues:  Live music can continue to be performed, however performers should try to maintain physical distancing requirements wherever possible.  Singers should try to stand at least 2m away from other band members as well as audience members.  For venues with total usable space of 100sqm or more, tables should be spaced in a way that ensures patrons at different tables remain 1.5m apart.  For venues with a total usable space of 100 sqm or less, tables should be spaced as far apart as practicable and 1.5m apart where this is possible.

Live performance venues/theatres:   For live music performances, singers should try to stand at least 2m away from other band members as well as audience members. Where an audience is involved, individuals and groups should be seated at least 1.5m apart from each other, for example, if a person books to attend on their own, they should be seated at least 1.5m from a person who has made a separate booking.  There is no restriction on how large a group booking can be (subject to restricted capacity of venue). If a group books together, they can sit together, however need to be at least 1.5 metres away from other groups/individuals.
"	Yes	"No.   

Bar, pubs and clubs can continue to serve alcohol to seated patrons, with no limit on the size of group bookings."	No. Patrons at any live music event, whether as a main performance or ancillary to other activity such as eating or drinking at a hospitality venue, must remain seated.	Yes, venues are required to ask all patrons for their first name and phone number and record it along with the date and time they attended the venue. Event organisers of performances should ask all patrons for their first name and phone number, and record it along with the date and time they attended the venue. Details can be safely destroyed after 28 days.	"COVID Safety Plan Guidelines

Additional Guidance on what you can and cannot do for cafes, restaurants and licensed venues

Additional Guidance on what you can and cannot do for Entertainment, Live performance, arts and cultural activities

Self-serve buffet style food service, communal snack bars or communal condiments are not permitted.

Business Resources Kit"	"All Cafes, restaurants and licensed venues must have a COVID Safety Plan. Other entertainment / live performance venues should have a COVID Safety Plan.  The COVID Safety Plan must be in writing
and available to be produced on request by compliance and enforcement officers, but it
does not need to be submitted for approval. The use of a standard template is not required. If all matters within the COVID Safety Plan Guidelines are addressed in a written or electronic form that can be produced during a compliance check, this will be sufficient to constitute a COVID Safety Plan for ACT businesses.  

"	Promote digital ticketing wherever practical		"
Current border restrictions / travel advice

ACT's border is not closed - however, from Wednesday 8 July 2020, anyone (other than ACT residents) travelling into the ACT from Victoria will be denied entry to the ACT unless they are granted an exemption by ACT Health.

ACT residents will be able to return home, but they will be required to enter quarantine until 14 days after leaving Victoria, and must notify ACT Health of their intention to return. 

From 20 July, people entering the ACT from certain hotspots or premises in NSW may be required to quarantine on entry.

From 1am on Saturday 8 August, ACT residents cannot enter QLD unless they have an exemption. To get the latest travel advice for QLD and to find out how to apply for an exemption visit the QLD Health website

 "	"Financial Support for cafes, restaurants and Licensed venues

Financial Support for live performance venues & theatres"		Stage 3	20 August
Tasmania	"Recovery Stage 3

Current Restrictions
"	26 June 2020, with new border restrictions from 31 July	Yes	"250 people (incl. staff) in an undivided space indoors or 1 person per 2 sqm whichever is lesser
500 people (incl. staff) in an undivided space outdoors or 1 person per 2 sqm whichever is lesser

Mixed use venues with multiple indoor or outdoor spaces, the above rules apply to each space.

More detail on current business restrictions."	Where practicable, business operators, staff, volunteers and attendees should maintain a distance of 1.5 metres from other people.	Yes	No	No	No	"The COVID Safe Workplaces Framework supports Tasmanian businesses and workplaces  to continue to operate, or reopen, while protecting Tasmania's health and safety during COVID-19. The Framework is made up of three key parts:

1. Minimum Standards to manage the ongoing risk of COVID-19 in workplaces.
2. COVID-19 Safe Workplace Guidelines to provide more detail on how sectors and workplaces can meet the Minimum Standards. For example, the following which may be relevant to the live music industry - Cultural & Creative Industries Safe Workplace Guidelines, Freight Transport Industry Guidelines, Hospitality COVID Safe Industries Guidelines.
3. COVID-19 Safety Plans to outline how each workplace complies with the Minimum Standards.  All workplaces will be required to have a COVID-19 Safety Plan that complies with minimum COVID-19 safety standards."	"Checklist required for all businesses

COVID Safety Plan template for small businesses (employing fewer than 20 people)

COVID Safety Plan template for medium businesses (employing between 20 and 199 people).

For large businesses (employing 200+ people): create a bespoke plan for your operations using the checklist and safety plan templates above as guiding documents."	"Recommended actions:
1. Develop procedures to manage dwell times, access to
equipment and area capacities, such as timed tickets.
2. Use booking systems or timed tickets to limit number of people in
the workplace/premises"	Training staff is considered one of the minimum standards - refer to these videos from Worksafe Tasmania for further guidance.	"

Coming to Tasmania - current border restrictions.  

All travellers to Tasmania are required to provide travel details on arrival. The most effective way of doing this is via the G2G PASS system.

All non-essential travellers arriving in Tasmania are required to enter quarantine for 14 days at their own expense.  

A fee of $2800 per person applies to all non-essential travellers arriving in Tasmania who are required to undertake 14 days quarantine in government-designated accommodation.. This does not include Non-Tasmanian residents (who aren’t classified as Essential Travellers) who have spent time in high-risk areas specified as an 'Affected Region' or 'Affected Premises' in the 14 days prior to arrival in Tasmania*. These people are not permitted to travel to Tasmania and will be turned back at their own expense.

Essential Travellers who have spent time in an affected region or premises in the 14 days prior to their arrival in Tasmania must undertake a COVID-19 test and screening on arrival.

Tasmania will not be opening its borders to other states until at least 1 December 2020
"	COVID-19 Small Business Energy Support Grant Program - The grant program will open at 12 noon on 31 August 2020 and close at 12 noon on 26 October 2020. To read the guidelines, FAQ and to apply visit the Business Tasmania website.			1 December - Tas border may open
		Disclamer: The information published in this Dashboard is made available by ALMBC as a general reference source on the understanding that users exercise their own skill and care with respect to its use. Before relying on this material in any important matter, users should carefully evaluate the source, accuracy, currency, completeness and relevance of the information for their purposes and should obtain appropriate professional advice relevant to their particular circumstances. Links to other websites are linked "as is", are provided for convenience and do not constitute endorsement or approval by ALMBC of material at those sites. ALMBC does not have control or responsibility for these external information sources. By accessing information at or through this Dashboard each user waives and releases ALMBC to the full extent permitted by law from any and all claims relating to the usage of the material made available through this Dashboard.																
`
export default App;
