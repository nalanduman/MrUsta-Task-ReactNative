export interface JobsType {
    Job: {
        Id: number,
        Title: string,
        Description: string,
        Thumb: string,
        Status: number,
        StatusAsString: string,
        CreatedOnUtc: Date,
        CustomerName: string,
        CustomerId: number,
        Url: "",
        CustomerUrl: "",
        Thread: {
            Id: number,
            CreatedOnUtc: Date,
            Status: number
        },
        IsOnline: boolean,
        JobDate: string,
        JobType: string,
        PaymentType: string,
        Price: null
    },
    UnreadOfferCount: number,
    MarkAsReadButtonText: null,
    IsUnassignRequestSent: boolean,
    UnassignRequestMessage: null,
    IsUstaFinalCostSet: boolean,
    UnassignRequest: null,
    Actions:
    {
        ActionType: number,
        ActionTypeAsString: string,
        Button: string,
    }[]
}