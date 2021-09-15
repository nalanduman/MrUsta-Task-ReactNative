export interface DetailsType {
  Id: number,
  Status: number,
  CustomerUrl: string,
  IsCurrentUserTheJobPoster: boolean,
  CustomerThumb: string,
  CanUstaSendOffer: boolean,
  CustomerId: number,
  UstaCurrentCredit: number,
  JobCredit: number,
  IsFirstOffer: false,
  IsFirstOfferMessage: null,
  OfferCountLimitMessage: string,
  OfferCountLimitIsOverMessage: null,
  OfferCostMessage: null,
  InfoMessageResponse: {
    Actions: [],
    CircleMessages: [],
    IsMobileNoShared: boolean,
    LoyaltyNotes: [],
    VoucherNotes: [],
    CanUstaSendOffer: boolean,
    NoActionReason: {
      Message: string,
      Type: number,
      TypeAsString: string,
      DetailedInfo: {
        Title: string,
        Description: string,
      }
    },
    UstaHasSentOfferBefore: boolean,
    UstaHasGotMobileBefore: boolean,
    UstaUpdatedFinalCost: boolean,
    JobInfoJobAndThreadDetail: {
      JobId: number,
      JobOfferThreadId: number,
      IsAssigned: boolean,
      AssignedUstaName: null,
      AssignedUstaId: number,
      Level1TimeLimitUtc: null,
      IsCountdownAvailable: boolean,
      CountdownMessage: null
    },
    IsInstantBooking: boolean,
    InstantBookingDisplayMessages: [],
    JobOrigin: number,
    IsJobAssignedToCurrentUsta: false,
    JobOriginAsString: boolean
  },
  Address: string,
  UstaJobNotInterestedTemplates:
  {
    DisplayOrder: number,
    Message: string,
  }[],
  IsOnline: boolean,
  Title: string,
  CustomerName: string,
  Latitude: number,
  Longitude: number,
  Description: string,
  AdditionalNotes: null,
  JobDateUtc: Date,
  CreatedOnUtc: Date,
  JobDate: string,
  ImageList: [],
  Categories:
  {
    CategoryId: number,
    Name: string,
  }[]
}