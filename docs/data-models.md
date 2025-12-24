# Data Models

## Rider

- name
- mobileNo
- walletBalance
- currentRentalPlan
- onBoardingAmount
- isActiveRental

## Rental

- riderId
- vehicleId
- plan
- startDate
- expiryDate

- bookingRequired
- obRequired
- rentalRequired

- isBookingAmountPaid
- isOnBoardingAmountPaid
- isRentalAmountPaid

- bookingStatus (PRE_BOOKED, BOOKED)
- status (ACTIVE, ENDED)

- return
  - returnedOn
  - reason

## Vehicle

- vehicleUid
- status (ACTIVE, INACTIVE)
- workingStatus (READY_TO_MOVE, DEPLOYED)
- riderId

## Wallet

- riderDetails
- rentalId
- vehicleId
- amount
- type (BOOKING, ONBOARDING, RENTAL)
- balanceBefore
- balanceAfter
- createdAt
- expiryDate
