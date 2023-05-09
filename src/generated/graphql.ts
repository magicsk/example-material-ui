import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bpchar: any;
  date: any;
  float8: any;
  inet: any;
  json: any;
  jsonb: any;
  numeric: any;
  oid: any;
  time: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "address.cities" */
export type City = {
  __typename?: 'City';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  postalCodes: Array<PostalCode>;
  /** An aggregate relationship */
  postalCodes_aggregate: PostalCode_Aggregate;
  /** An array relationship */
  streets: Array<Street>;
  /** An aggregate relationship */
  streets_aggregate: Street_Aggregate;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  vaccinationCentres: Array<VaccinationCentres>;
  /** An aggregate relationship */
  vaccinationCentres_aggregate: VaccinationCentres_Aggregate;
};


/** columns and relationships of "address.cities" */
export type CityPostalCodesArgs = {
  distinct_on?: InputMaybe<Array<PostalCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostalCode_Order_By>>;
  where?: InputMaybe<PostalCode_Bool_Exp>;
};


/** columns and relationships of "address.cities" */
export type CityPostalCodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PostalCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostalCode_Order_By>>;
  where?: InputMaybe<PostalCode_Bool_Exp>;
};


/** columns and relationships of "address.cities" */
export type CityStreetsArgs = {
  distinct_on?: InputMaybe<Array<Street_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Street_Order_By>>;
  where?: InputMaybe<Street_Bool_Exp>;
};


/** columns and relationships of "address.cities" */
export type CityStreets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Street_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Street_Order_By>>;
  where?: InputMaybe<Street_Bool_Exp>;
};


/** columns and relationships of "address.cities" */
export type CityVaccinationCentresArgs = {
  distinct_on?: InputMaybe<Array<VaccinationCentres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationCentres_Order_By>>;
  where?: InputMaybe<VaccinationCentres_Bool_Exp>;
};


/** columns and relationships of "address.cities" */
export type CityVaccinationCentres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VaccinationCentres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationCentres_Order_By>>;
  where?: InputMaybe<VaccinationCentres_Bool_Exp>;
};

/** aggregated selection of "address.cities" */
export type City_Aggregate = {
  __typename?: 'City_aggregate';
  aggregate?: Maybe<City_Aggregate_Fields>;
  nodes: Array<City>;
};

/** aggregate fields of "address.cities" */
export type City_Aggregate_Fields = {
  __typename?: 'City_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<City_Max_Fields>;
  min?: Maybe<City_Min_Fields>;
};


/** aggregate fields of "address.cities" */
export type City_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<City_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "address.cities". All fields are combined with a logical 'AND'. */
export type City_Bool_Exp = {
  _and?: InputMaybe<Array<City_Bool_Exp>>;
  _not?: InputMaybe<City_Bool_Exp>;
  _or?: InputMaybe<Array<City_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  postalCodes?: InputMaybe<PostalCode_Bool_Exp>;
  postalCodes_aggregate?: InputMaybe<PostalCode_Aggregate_Bool_Exp>;
  streets?: InputMaybe<Street_Bool_Exp>;
  streets_aggregate?: InputMaybe<Street_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  vaccinationCentres?: InputMaybe<VaccinationCentres_Bool_Exp>;
  vaccinationCentres_aggregate?: InputMaybe<VaccinationCentres_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "address.cities" */
export enum City_Constraint {
  /** unique or primary key constraint on columns "id" */
  CitiesPkey = 'cities_pkey'
}

/** input type for inserting data into table "address.cities" */
export type City_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  postalCodes?: InputMaybe<PostalCode_Arr_Rel_Insert_Input>;
  streets?: InputMaybe<Street_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vaccinationCentres?: InputMaybe<VaccinationCentres_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type City_Max_Fields = {
  __typename?: 'City_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type City_Min_Fields = {
  __typename?: 'City_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "address.cities" */
export type City_Mutation_Response = {
  __typename?: 'City_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<City>;
};

/** input type for inserting object relation for remote table "address.cities" */
export type City_Obj_Rel_Insert_Input = {
  data: City_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<City_On_Conflict>;
};

/** on_conflict condition type for table "address.cities" */
export type City_On_Conflict = {
  constraint: City_Constraint;
  update_columns?: Array<City_Update_Column>;
  where?: InputMaybe<City_Bool_Exp>;
};

/** Ordering options when selecting data from "address.cities". */
export type City_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  postalCodes_aggregate?: InputMaybe<PostalCode_Aggregate_Order_By>;
  streets_aggregate?: InputMaybe<Street_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  vaccinationCentres_aggregate?: InputMaybe<VaccinationCentres_Aggregate_Order_By>;
};

/** primary key columns input for table: address.cities */
export type City_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "address.cities" */
export enum City_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "address.cities" */
export type City_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "City" */
export type City_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: City_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type City_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "address.cities" */
export enum City_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type City_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<City_Set_Input>;
  /** filter the rows which have to be updated */
  where: City_Bool_Exp;
};

/** columns and relationships of "address.countries" */
export type Country = {
  __typename?: 'Country';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** ISO 3166 2 or 3 letter code */
  isoCode: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "address.countries" */
export type Country_Aggregate = {
  __typename?: 'Country_aggregate';
  aggregate?: Maybe<Country_Aggregate_Fields>;
  nodes: Array<Country>;
};

/** aggregate fields of "address.countries" */
export type Country_Aggregate_Fields = {
  __typename?: 'Country_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Country_Max_Fields>;
  min?: Maybe<Country_Min_Fields>;
};


/** aggregate fields of "address.countries" */
export type Country_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Country_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "address.countries". All fields are combined with a logical 'AND'. */
export type Country_Bool_Exp = {
  _and?: InputMaybe<Array<Country_Bool_Exp>>;
  _not?: InputMaybe<Country_Bool_Exp>;
  _or?: InputMaybe<Array<Country_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isoCode?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "address.countries" */
export enum Country_Constraint {
  /** unique or primary key constraint on columns "id" */
  CountriesPkey = 'countries_pkey'
}

/** input type for inserting data into table "address.countries" */
export type Country_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** ISO 3166 2 or 3 letter code */
  isoCode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Country_Max_Fields = {
  __typename?: 'Country_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  /** ISO 3166 2 or 3 letter code */
  isoCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Country_Min_Fields = {
  __typename?: 'Country_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  /** ISO 3166 2 or 3 letter code */
  isoCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "address.countries" */
export type Country_Mutation_Response = {
  __typename?: 'Country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Country>;
};

/** on_conflict condition type for table "address.countries" */
export type Country_On_Conflict = {
  constraint: Country_Constraint;
  update_columns?: Array<Country_Update_Column>;
  where?: InputMaybe<Country_Bool_Exp>;
};

/** Ordering options when selecting data from "address.countries". */
export type Country_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isoCode?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: address.countries */
export type Country_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "address.countries" */
export enum Country_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsoCode = 'isoCode',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "address.countries" */
export type Country_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** ISO 3166 2 or 3 letter code */
  isoCode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "Country" */
export type Country_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Country_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Country_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** ISO 3166 2 or 3 letter code */
  isoCode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "address.countries" */
export enum Country_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsoCode = 'isoCode',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Country_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Country_Set_Input>;
  /** filter the rows which have to be updated */
  where: Country_Bool_Exp;
};

/** columns and relationships of "gift.events" */
export type GiftEvent = {
  __typename?: 'GiftEvent';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  wishes: Array<GiftWish>;
  /** An aggregate relationship */
  wishes_aggregate: GiftWish_Aggregate;
};


/** columns and relationships of "gift.events" */
export type GiftEventWishesArgs = {
  distinct_on?: InputMaybe<Array<GiftWish_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GiftWish_Order_By>>;
  where?: InputMaybe<GiftWish_Bool_Exp>;
};


/** columns and relationships of "gift.events" */
export type GiftEventWishes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GiftWish_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GiftWish_Order_By>>;
  where?: InputMaybe<GiftWish_Bool_Exp>;
};

/** aggregated selection of "gift.events" */
export type GiftEvent_Aggregate = {
  __typename?: 'GiftEvent_aggregate';
  aggregate?: Maybe<GiftEvent_Aggregate_Fields>;
  nodes: Array<GiftEvent>;
};

/** aggregate fields of "gift.events" */
export type GiftEvent_Aggregate_Fields = {
  __typename?: 'GiftEvent_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<GiftEvent_Max_Fields>;
  min?: Maybe<GiftEvent_Min_Fields>;
};


/** aggregate fields of "gift.events" */
export type GiftEvent_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GiftEvent_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "gift.events". All fields are combined with a logical 'AND'. */
export type GiftEvent_Bool_Exp = {
  _and?: InputMaybe<Array<GiftEvent_Bool_Exp>>;
  _not?: InputMaybe<GiftEvent_Bool_Exp>;
  _or?: InputMaybe<Array<GiftEvent_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  wishes?: InputMaybe<GiftWish_Bool_Exp>;
  wishes_aggregate?: InputMaybe<GiftWish_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "gift.events" */
export enum GiftEvent_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventsPkey = 'events_pkey'
}

/** input type for inserting data into table "gift.events" */
export type GiftEvent_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  wishes?: InputMaybe<GiftWish_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type GiftEvent_Max_Fields = {
  __typename?: 'GiftEvent_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type GiftEvent_Min_Fields = {
  __typename?: 'GiftEvent_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "gift.events" */
export type GiftEvent_Mutation_Response = {
  __typename?: 'GiftEvent_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GiftEvent>;
};

/** input type for inserting object relation for remote table "gift.events" */
export type GiftEvent_Obj_Rel_Insert_Input = {
  data: GiftEvent_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GiftEvent_On_Conflict>;
};

/** on_conflict condition type for table "gift.events" */
export type GiftEvent_On_Conflict = {
  constraint: GiftEvent_Constraint;
  update_columns?: Array<GiftEvent_Update_Column>;
  where?: InputMaybe<GiftEvent_Bool_Exp>;
};

/** Ordering options when selecting data from "gift.events". */
export type GiftEvent_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  wishes_aggregate?: InputMaybe<GiftWish_Aggregate_Order_By>;
};

/** primary key columns input for table: gift.events */
export type GiftEvent_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "gift.events" */
export enum GiftEvent_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "gift.events" */
export type GiftEvent_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "GiftEvent" */
export type GiftEvent_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GiftEvent_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GiftEvent_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "gift.events" */
export enum GiftEvent_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type GiftEvent_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GiftEvent_Set_Input>;
  /** filter the rows which have to be updated */
  where: GiftEvent_Bool_Exp;
};

/** columns and relationships of "gift.wish" */
export type GiftWish = {
  __typename?: 'GiftWish';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  event?: Maybe<GiftEvent>;
  eventId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  lastSubscriberEmail?: Maybe<Scalars['String']>;
  maxSubscribers?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  /** An array relationship */
  subscribers: Array<Gift_Wish_Subscriber>;
  /** An aggregate relationship */
  subscribers_aggregate: Gift_Wish_Subscriber_Aggregate;
  updatedAt: Scalars['timestamptz'];
  /** optimistic lock */
  version?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "gift.wish" */
export type GiftWishSubscribersArgs = {
  distinct_on?: InputMaybe<Array<Gift_Wish_Subscriber_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gift_Wish_Subscriber_Order_By>>;
  where?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
};


/** columns and relationships of "gift.wish" */
export type GiftWishSubscribers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gift_Wish_Subscriber_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gift_Wish_Subscriber_Order_By>>;
  where?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
};

/** aggregated selection of "gift.wish" */
export type GiftWish_Aggregate = {
  __typename?: 'GiftWish_aggregate';
  aggregate?: Maybe<GiftWish_Aggregate_Fields>;
  nodes: Array<GiftWish>;
};

export type GiftWish_Aggregate_Bool_Exp = {
  count?: InputMaybe<GiftWish_Aggregate_Bool_Exp_Count>;
};

export type GiftWish_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GiftWish_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GiftWish_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "gift.wish" */
export type GiftWish_Aggregate_Fields = {
  __typename?: 'GiftWish_aggregate_fields';
  avg?: Maybe<GiftWish_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<GiftWish_Max_Fields>;
  min?: Maybe<GiftWish_Min_Fields>;
  stddev?: Maybe<GiftWish_Stddev_Fields>;
  stddev_pop?: Maybe<GiftWish_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<GiftWish_Stddev_Samp_Fields>;
  sum?: Maybe<GiftWish_Sum_Fields>;
  var_pop?: Maybe<GiftWish_Var_Pop_Fields>;
  var_samp?: Maybe<GiftWish_Var_Samp_Fields>;
  variance?: Maybe<GiftWish_Variance_Fields>;
};


/** aggregate fields of "gift.wish" */
export type GiftWish_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GiftWish_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gift.wish" */
export type GiftWish_Aggregate_Order_By = {
  avg?: InputMaybe<GiftWish_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<GiftWish_Max_Order_By>;
  min?: InputMaybe<GiftWish_Min_Order_By>;
  stddev?: InputMaybe<GiftWish_Stddev_Order_By>;
  stddev_pop?: InputMaybe<GiftWish_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<GiftWish_Stddev_Samp_Order_By>;
  sum?: InputMaybe<GiftWish_Sum_Order_By>;
  var_pop?: InputMaybe<GiftWish_Var_Pop_Order_By>;
  var_samp?: InputMaybe<GiftWish_Var_Samp_Order_By>;
  variance?: InputMaybe<GiftWish_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "gift.wish" */
export type GiftWish_Arr_Rel_Insert_Input = {
  data: Array<GiftWish_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<GiftWish_On_Conflict>;
};

/** aggregate avg on columns */
export type GiftWish_Avg_Fields = {
  __typename?: 'GiftWish_avg_fields';
  maxSubscribers?: Maybe<Scalars['Float']>;
  /** optimistic lock */
  version?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gift.wish" */
export type GiftWish_Avg_Order_By = {
  maxSubscribers?: InputMaybe<Order_By>;
  /** optimistic lock */
  version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gift.wish". All fields are combined with a logical 'AND'. */
export type GiftWish_Bool_Exp = {
  _and?: InputMaybe<Array<GiftWish_Bool_Exp>>;
  _not?: InputMaybe<GiftWish_Bool_Exp>;
  _or?: InputMaybe<Array<GiftWish_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<GiftEvent_Bool_Exp>;
  eventId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastSubscriberEmail?: InputMaybe<String_Comparison_Exp>;
  maxSubscribers?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  subscribers?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
  subscribers_aggregate?: InputMaybe<Gift_Wish_Subscriber_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  version?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "gift.wish" */
export enum GiftWish_Constraint {
  /** unique or primary key constraint on columns "id" */
  WishPkey = 'wish_pkey'
}

/** input type for incrementing numeric columns in table "gift.wish" */
export type GiftWish_Inc_Input = {
  maxSubscribers?: InputMaybe<Scalars['Int']>;
  /** optimistic lock */
  version?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "gift.wish" */
export type GiftWish_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  event?: InputMaybe<GiftEvent_Obj_Rel_Insert_Input>;
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastSubscriberEmail?: InputMaybe<Scalars['String']>;
  maxSubscribers?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  subscribers?: InputMaybe<Gift_Wish_Subscriber_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  /** optimistic lock */
  version?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type GiftWish_Max_Fields = {
  __typename?: 'GiftWish_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastSubscriberEmail?: Maybe<Scalars['String']>;
  maxSubscribers?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** optimistic lock */
  version?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "gift.wish" */
export type GiftWish_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSubscriberEmail?: InputMaybe<Order_By>;
  maxSubscribers?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  /** optimistic lock */
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type GiftWish_Min_Fields = {
  __typename?: 'GiftWish_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastSubscriberEmail?: Maybe<Scalars['String']>;
  maxSubscribers?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** optimistic lock */
  version?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "gift.wish" */
export type GiftWish_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSubscriberEmail?: InputMaybe<Order_By>;
  maxSubscribers?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  /** optimistic lock */
  version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gift.wish" */
export type GiftWish_Mutation_Response = {
  __typename?: 'GiftWish_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GiftWish>;
};

/** on_conflict condition type for table "gift.wish" */
export type GiftWish_On_Conflict = {
  constraint: GiftWish_Constraint;
  update_columns?: Array<GiftWish_Update_Column>;
  where?: InputMaybe<GiftWish_Bool_Exp>;
};

/** Ordering options when selecting data from "gift.wish". */
export type GiftWish_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  event?: InputMaybe<GiftEvent_Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSubscriberEmail?: InputMaybe<Order_By>;
  maxSubscribers?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  subscribers_aggregate?: InputMaybe<Gift_Wish_Subscriber_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gift.wish */
export type GiftWish_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "gift.wish" */
export enum GiftWish_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  LastSubscriberEmail = 'lastSubscriberEmail',
  /** column name */
  MaxSubscribers = 'maxSubscribers',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "gift.wish" */
export type GiftWish_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastSubscriberEmail?: InputMaybe<Scalars['String']>;
  maxSubscribers?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  /** optimistic lock */
  version?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type GiftWish_Stddev_Fields = {
  __typename?: 'GiftWish_stddev_fields';
  maxSubscribers?: Maybe<Scalars['Float']>;
  /** optimistic lock */
  version?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gift.wish" */
export type GiftWish_Stddev_Order_By = {
  maxSubscribers?: InputMaybe<Order_By>;
  /** optimistic lock */
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type GiftWish_Stddev_Pop_Fields = {
  __typename?: 'GiftWish_stddev_pop_fields';
  maxSubscribers?: Maybe<Scalars['Float']>;
  /** optimistic lock */
  version?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gift.wish" */
export type GiftWish_Stddev_Pop_Order_By = {
  maxSubscribers?: InputMaybe<Order_By>;
  /** optimistic lock */
  version?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type GiftWish_Stddev_Samp_Fields = {
  __typename?: 'GiftWish_stddev_samp_fields';
  maxSubscribers?: Maybe<Scalars['Float']>;
  /** optimistic lock */
  version?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gift.wish" */
export type GiftWish_Stddev_Samp_Order_By = {
  maxSubscribers?: InputMaybe<Order_By>;
  /** optimistic lock */
  version?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "GiftWish" */
export type GiftWish_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GiftWish_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GiftWish_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastSubscriberEmail?: InputMaybe<Scalars['String']>;
  maxSubscribers?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  /** optimistic lock */
  version?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type GiftWish_Sum_Fields = {
  __typename?: 'GiftWish_sum_fields';
  maxSubscribers?: Maybe<Scalars['Int']>;
  /** optimistic lock */
  version?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "gift.wish" */
export type GiftWish_Sum_Order_By = {
  maxSubscribers?: InputMaybe<Order_By>;
  /** optimistic lock */
  version?: InputMaybe<Order_By>;
};

/** update columns of table "gift.wish" */
export enum GiftWish_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  LastSubscriberEmail = 'lastSubscriberEmail',
  /** column name */
  MaxSubscribers = 'maxSubscribers',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Version = 'version'
}

export type GiftWish_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GiftWish_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GiftWish_Set_Input>;
  /** filter the rows which have to be updated */
  where: GiftWish_Bool_Exp;
};

/** aggregate var_pop on columns */
export type GiftWish_Var_Pop_Fields = {
  __typename?: 'GiftWish_var_pop_fields';
  maxSubscribers?: Maybe<Scalars['Float']>;
  /** optimistic lock */
  version?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gift.wish" */
export type GiftWish_Var_Pop_Order_By = {
  maxSubscribers?: InputMaybe<Order_By>;
  /** optimistic lock */
  version?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type GiftWish_Var_Samp_Fields = {
  __typename?: 'GiftWish_var_samp_fields';
  maxSubscribers?: Maybe<Scalars['Float']>;
  /** optimistic lock */
  version?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gift.wish" */
export type GiftWish_Var_Samp_Order_By = {
  maxSubscribers?: InputMaybe<Order_By>;
  /** optimistic lock */
  version?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type GiftWish_Variance_Fields = {
  __typename?: 'GiftWish_variance_fields';
  maxSubscribers?: Maybe<Scalars['Float']>;
  /** optimistic lock */
  version?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gift.wish" */
export type GiftWish_Variance_Order_By = {
  maxSubscribers?: InputMaybe<Order_By>;
  /** optimistic lock */
  version?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "address.postal_codes" */
export type PostalCode = {
  __typename?: 'PostalCode';
  /** An object relationship */
  city: City;
  cityId: Scalars['uuid'];
  code: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "address.postal_codes" */
export type PostalCode_Aggregate = {
  __typename?: 'PostalCode_aggregate';
  aggregate?: Maybe<PostalCode_Aggregate_Fields>;
  nodes: Array<PostalCode>;
};

export type PostalCode_Aggregate_Bool_Exp = {
  count?: InputMaybe<PostalCode_Aggregate_Bool_Exp_Count>;
};

export type PostalCode_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PostalCode_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PostalCode_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "address.postal_codes" */
export type PostalCode_Aggregate_Fields = {
  __typename?: 'PostalCode_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostalCode_Max_Fields>;
  min?: Maybe<PostalCode_Min_Fields>;
};


/** aggregate fields of "address.postal_codes" */
export type PostalCode_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PostalCode_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "address.postal_codes" */
export type PostalCode_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<PostalCode_Max_Order_By>;
  min?: InputMaybe<PostalCode_Min_Order_By>;
};

/** input type for inserting array relation for remote table "address.postal_codes" */
export type PostalCode_Arr_Rel_Insert_Input = {
  data: Array<PostalCode_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<PostalCode_On_Conflict>;
};

/** Boolean expression to filter rows from the table "address.postal_codes". All fields are combined with a logical 'AND'. */
export type PostalCode_Bool_Exp = {
  _and?: InputMaybe<Array<PostalCode_Bool_Exp>>;
  _not?: InputMaybe<PostalCode_Bool_Exp>;
  _or?: InputMaybe<Array<PostalCode_Bool_Exp>>;
  city?: InputMaybe<City_Bool_Exp>;
  cityId?: InputMaybe<Uuid_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "address.postal_codes" */
export enum PostalCode_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostalCodesPkey = 'postal_codes_pkey'
}

/** input type for inserting data into table "address.postal_codes" */
export type PostalCode_Insert_Input = {
  city?: InputMaybe<City_Obj_Rel_Insert_Input>;
  cityId?: InputMaybe<Scalars['uuid']>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PostalCode_Max_Fields = {
  __typename?: 'PostalCode_max_fields';
  cityId?: Maybe<Scalars['uuid']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "address.postal_codes" */
export type PostalCode_Max_Order_By = {
  cityId?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type PostalCode_Min_Fields = {
  __typename?: 'PostalCode_min_fields';
  cityId?: Maybe<Scalars['uuid']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "address.postal_codes" */
export type PostalCode_Min_Order_By = {
  cityId?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "address.postal_codes" */
export type PostalCode_Mutation_Response = {
  __typename?: 'PostalCode_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostalCode>;
};

/** input type for inserting object relation for remote table "address.postal_codes" */
export type PostalCode_Obj_Rel_Insert_Input = {
  data: PostalCode_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<PostalCode_On_Conflict>;
};

/** on_conflict condition type for table "address.postal_codes" */
export type PostalCode_On_Conflict = {
  constraint: PostalCode_Constraint;
  update_columns?: Array<PostalCode_Update_Column>;
  where?: InputMaybe<PostalCode_Bool_Exp>;
};

/** Ordering options when selecting data from "address.postal_codes". */
export type PostalCode_Order_By = {
  city?: InputMaybe<City_Order_By>;
  cityId?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: address.postal_codes */
export type PostalCode_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "address.postal_codes" */
export enum PostalCode_Select_Column {
  /** column name */
  CityId = 'cityId',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "address.postal_codes" */
export type PostalCode_Set_Input = {
  cityId?: InputMaybe<Scalars['uuid']>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "PostalCode" */
export type PostalCode_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PostalCode_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PostalCode_Stream_Cursor_Value_Input = {
  cityId?: InputMaybe<Scalars['uuid']>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "address.postal_codes" */
export enum PostalCode_Update_Column {
  /** column name */
  CityId = 'cityId',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type PostalCode_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostalCode_Set_Input>;
  /** filter the rows which have to be updated */
  where: PostalCode_Bool_Exp;
};

/** columns and relationships of "address.streets" */
export type Street = {
  __typename?: 'Street';
  /** An object relationship */
  city: City;
  cityId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  postalCode?: Maybe<PostalCode>;
  postalCodeId?: Maybe<Scalars['uuid']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "address.streets" */
export type Street_Aggregate = {
  __typename?: 'Street_aggregate';
  aggregate?: Maybe<Street_Aggregate_Fields>;
  nodes: Array<Street>;
};

export type Street_Aggregate_Bool_Exp = {
  count?: InputMaybe<Street_Aggregate_Bool_Exp_Count>;
};

export type Street_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Street_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Street_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "address.streets" */
export type Street_Aggregate_Fields = {
  __typename?: 'Street_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Street_Max_Fields>;
  min?: Maybe<Street_Min_Fields>;
};


/** aggregate fields of "address.streets" */
export type Street_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Street_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "address.streets" */
export type Street_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Street_Max_Order_By>;
  min?: InputMaybe<Street_Min_Order_By>;
};

/** input type for inserting array relation for remote table "address.streets" */
export type Street_Arr_Rel_Insert_Input = {
  data: Array<Street_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Street_On_Conflict>;
};

/** Boolean expression to filter rows from the table "address.streets". All fields are combined with a logical 'AND'. */
export type Street_Bool_Exp = {
  _and?: InputMaybe<Array<Street_Bool_Exp>>;
  _not?: InputMaybe<Street_Bool_Exp>;
  _or?: InputMaybe<Array<Street_Bool_Exp>>;
  city?: InputMaybe<City_Bool_Exp>;
  cityId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  postalCode?: InputMaybe<PostalCode_Bool_Exp>;
  postalCodeId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "address.streets" */
export enum Street_Constraint {
  /** unique or primary key constraint on columns "id" */
  StreetPkey = 'street_pkey'
}

/** input type for inserting data into table "address.streets" */
export type Street_Insert_Input = {
  city?: InputMaybe<City_Obj_Rel_Insert_Input>;
  cityId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<PostalCode_Obj_Rel_Insert_Input>;
  postalCodeId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Street_Max_Fields = {
  __typename?: 'Street_max_fields';
  cityId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  postalCodeId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "address.streets" */
export type Street_Max_Order_By = {
  cityId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  postalCodeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Street_Min_Fields = {
  __typename?: 'Street_min_fields';
  cityId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  postalCodeId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "address.streets" */
export type Street_Min_Order_By = {
  cityId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  postalCodeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "address.streets" */
export type Street_Mutation_Response = {
  __typename?: 'Street_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Street>;
};

/** on_conflict condition type for table "address.streets" */
export type Street_On_Conflict = {
  constraint: Street_Constraint;
  update_columns?: Array<Street_Update_Column>;
  where?: InputMaybe<Street_Bool_Exp>;
};

/** Ordering options when selecting data from "address.streets". */
export type Street_Order_By = {
  city?: InputMaybe<City_Order_By>;
  cityId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  postalCode?: InputMaybe<PostalCode_Order_By>;
  postalCodeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: address.streets */
export type Street_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "address.streets" */
export enum Street_Select_Column {
  /** column name */
  CityId = 'cityId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PostalCodeId = 'postalCodeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "address.streets" */
export type Street_Set_Input = {
  cityId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  postalCodeId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "Street" */
export type Street_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Street_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Street_Stream_Cursor_Value_Input = {
  cityId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  postalCodeId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "address.streets" */
export enum Street_Update_Column {
  /** column name */
  CityId = 'cityId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PostalCodeId = 'postalCodeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Street_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Street_Set_Input>;
  /** filter the rows which have to be updated */
  where: Street_Bool_Exp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** History of auditable actions on audited tables, from audit.if_modified_func() */
export type Audit_Logged_Actions = {
  __typename?: 'audit_logged_actions';
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action: Scalars['String'];
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk: Scalars['timestamptz'];
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm: Scalars['timestamptz'];
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx: Scalars['timestamptz'];
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: Maybe<Scalars['String']>;
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: Maybe<Scalars['jsonb']>;
  /** IP address of client that issued query. Null for unix domain socket. */
  client_addr?: Maybe<Scalars['inet']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Int']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: Maybe<Scalars['String']>;
  /** Unique identifier for each auditable event */
  event_id: Scalars['bigint'];
  hasura_user?: Maybe<Scalars['jsonb']>;
  /** Table OID. Changes with drop/create. Get with 'tablename'::regclass */
  relid: Scalars['oid'];
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: Maybe<Scalars['jsonb']>;
  /** Database schema audited table for this event is in */
  schema_name: Scalars['String'];
  /** Login / session user whose statement caused the audited event */
  session_user_name?: Maybe<Scalars['String']>;
  /** 't' if audit event is from an FOR EACH STATEMENT trigger, 'f' for FOR EACH ROW */
  statement_only: Scalars['Boolean'];
  /** Non-schema-qualified table name of table event occured in */
  table_name: Scalars['String'];
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['bigint']>;
};


/** History of auditable actions on audited tables, from audit.if_modified_func() */
export type Audit_Logged_ActionsChanged_FieldsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** History of auditable actions on audited tables, from audit.if_modified_func() */
export type Audit_Logged_ActionsHasura_UserArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** History of auditable actions on audited tables, from audit.if_modified_func() */
export type Audit_Logged_ActionsRow_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "audit.logged_actions" */
export type Audit_Logged_Actions_Aggregate = {
  __typename?: 'audit_logged_actions_aggregate';
  aggregate?: Maybe<Audit_Logged_Actions_Aggregate_Fields>;
  nodes: Array<Audit_Logged_Actions>;
};

/** aggregate fields of "audit.logged_actions" */
export type Audit_Logged_Actions_Aggregate_Fields = {
  __typename?: 'audit_logged_actions_aggregate_fields';
  avg?: Maybe<Audit_Logged_Actions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Audit_Logged_Actions_Max_Fields>;
  min?: Maybe<Audit_Logged_Actions_Min_Fields>;
  stddev?: Maybe<Audit_Logged_Actions_Stddev_Fields>;
  stddev_pop?: Maybe<Audit_Logged_Actions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Audit_Logged_Actions_Stddev_Samp_Fields>;
  sum?: Maybe<Audit_Logged_Actions_Sum_Fields>;
  var_pop?: Maybe<Audit_Logged_Actions_Var_Pop_Fields>;
  var_samp?: Maybe<Audit_Logged_Actions_Var_Samp_Fields>;
  variance?: Maybe<Audit_Logged_Actions_Variance_Fields>;
};


/** aggregate fields of "audit.logged_actions" */
export type Audit_Logged_Actions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audit_Logged_Actions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Audit_Logged_Actions_Append_Input = {
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['jsonb']>;
  hasura_user?: InputMaybe<Scalars['jsonb']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Audit_Logged_Actions_Avg_Fields = {
  __typename?: 'audit_logged_actions_avg_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "audit.logged_actions". All fields are combined with a logical 'AND'. */
export type Audit_Logged_Actions_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Logged_Actions_Bool_Exp>>;
  _not?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Logged_Actions_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  action_tstamp_clk?: InputMaybe<Timestamptz_Comparison_Exp>;
  action_tstamp_stm?: InputMaybe<Timestamptz_Comparison_Exp>;
  action_tstamp_tx?: InputMaybe<Timestamptz_Comparison_Exp>;
  application_name?: InputMaybe<String_Comparison_Exp>;
  changed_fields?: InputMaybe<Jsonb_Comparison_Exp>;
  client_addr?: InputMaybe<Inet_Comparison_Exp>;
  client_port?: InputMaybe<Int_Comparison_Exp>;
  client_query?: InputMaybe<String_Comparison_Exp>;
  event_id?: InputMaybe<Bigint_Comparison_Exp>;
  hasura_user?: InputMaybe<Jsonb_Comparison_Exp>;
  relid?: InputMaybe<Oid_Comparison_Exp>;
  row_data?: InputMaybe<Jsonb_Comparison_Exp>;
  schema_name?: InputMaybe<String_Comparison_Exp>;
  session_user_name?: InputMaybe<String_Comparison_Exp>;
  statement_only?: InputMaybe<Boolean_Comparison_Exp>;
  table_name?: InputMaybe<String_Comparison_Exp>;
  transaction_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Audit_Logged_Actions_Delete_At_Path_Input = {
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Array<Scalars['String']>>;
  hasura_user?: InputMaybe<Array<Scalars['String']>>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Audit_Logged_Actions_Delete_Elem_Input = {
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['Int']>;
  hasura_user?: InputMaybe<Scalars['Int']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Audit_Logged_Actions_Delete_Key_Input = {
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['String']>;
  hasura_user?: InputMaybe<Scalars['String']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "audit.logged_actions" */
export type Audit_Logged_Actions_Inc_Input = {
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: InputMaybe<Scalars['Int']>;
  /** Unique identifier for each auditable event */
  event_id?: InputMaybe<Scalars['bigint']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "audit.logged_actions" */
export type Audit_Logged_Actions_Insert_Input = {
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action?: InputMaybe<Scalars['String']>;
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk?: InputMaybe<Scalars['timestamptz']>;
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm?: InputMaybe<Scalars['timestamptz']>;
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx?: InputMaybe<Scalars['timestamptz']>;
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: InputMaybe<Scalars['String']>;
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['jsonb']>;
  /** IP address of client that issued query. Null for unix domain socket. */
  client_addr?: InputMaybe<Scalars['inet']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: InputMaybe<Scalars['Int']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: InputMaybe<Scalars['String']>;
  /** Unique identifier for each auditable event */
  event_id?: InputMaybe<Scalars['bigint']>;
  hasura_user?: InputMaybe<Scalars['jsonb']>;
  /** Table OID. Changes with drop/create. Get with 'tablename'::regclass */
  relid?: InputMaybe<Scalars['oid']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['jsonb']>;
  /** Database schema audited table for this event is in */
  schema_name?: InputMaybe<Scalars['String']>;
  /** Login / session user whose statement caused the audited event */
  session_user_name?: InputMaybe<Scalars['String']>;
  /** 't' if audit event is from an FOR EACH STATEMENT trigger, 'f' for FOR EACH ROW */
  statement_only?: InputMaybe<Scalars['Boolean']>;
  /** Non-schema-qualified table name of table event occured in */
  table_name?: InputMaybe<Scalars['String']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Audit_Logged_Actions_Max_Fields = {
  __typename?: 'audit_logged_actions_max_fields';
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action?: Maybe<Scalars['String']>;
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk?: Maybe<Scalars['timestamptz']>;
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm?: Maybe<Scalars['timestamptz']>;
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx?: Maybe<Scalars['timestamptz']>;
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: Maybe<Scalars['String']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Int']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: Maybe<Scalars['String']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['bigint']>;
  /** Database schema audited table for this event is in */
  schema_name?: Maybe<Scalars['String']>;
  /** Login / session user whose statement caused the audited event */
  session_user_name?: Maybe<Scalars['String']>;
  /** Non-schema-qualified table name of table event occured in */
  table_name?: Maybe<Scalars['String']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Audit_Logged_Actions_Min_Fields = {
  __typename?: 'audit_logged_actions_min_fields';
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action?: Maybe<Scalars['String']>;
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk?: Maybe<Scalars['timestamptz']>;
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm?: Maybe<Scalars['timestamptz']>;
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx?: Maybe<Scalars['timestamptz']>;
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: Maybe<Scalars['String']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Int']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: Maybe<Scalars['String']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['bigint']>;
  /** Database schema audited table for this event is in */
  schema_name?: Maybe<Scalars['String']>;
  /** Login / session user whose statement caused the audited event */
  session_user_name?: Maybe<Scalars['String']>;
  /** Non-schema-qualified table name of table event occured in */
  table_name?: Maybe<Scalars['String']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "audit.logged_actions" */
export type Audit_Logged_Actions_Mutation_Response = {
  __typename?: 'audit_logged_actions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Audit_Logged_Actions>;
};

/** Ordering options when selecting data from "audit.logged_actions". */
export type Audit_Logged_Actions_Order_By = {
  action?: InputMaybe<Order_By>;
  action_tstamp_clk?: InputMaybe<Order_By>;
  action_tstamp_stm?: InputMaybe<Order_By>;
  action_tstamp_tx?: InputMaybe<Order_By>;
  application_name?: InputMaybe<Order_By>;
  changed_fields?: InputMaybe<Order_By>;
  client_addr?: InputMaybe<Order_By>;
  client_port?: InputMaybe<Order_By>;
  client_query?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  hasura_user?: InputMaybe<Order_By>;
  relid?: InputMaybe<Order_By>;
  row_data?: InputMaybe<Order_By>;
  schema_name?: InputMaybe<Order_By>;
  session_user_name?: InputMaybe<Order_By>;
  statement_only?: InputMaybe<Order_By>;
  table_name?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Audit_Logged_Actions_Prepend_Input = {
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['jsonb']>;
  hasura_user?: InputMaybe<Scalars['jsonb']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "audit.logged_actions" */
export enum Audit_Logged_Actions_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  ActionTstampClk = 'action_tstamp_clk',
  /** column name */
  ActionTstampStm = 'action_tstamp_stm',
  /** column name */
  ActionTstampTx = 'action_tstamp_tx',
  /** column name */
  ApplicationName = 'application_name',
  /** column name */
  ChangedFields = 'changed_fields',
  /** column name */
  ClientAddr = 'client_addr',
  /** column name */
  ClientPort = 'client_port',
  /** column name */
  ClientQuery = 'client_query',
  /** column name */
  EventId = 'event_id',
  /** column name */
  HasuraUser = 'hasura_user',
  /** column name */
  Relid = 'relid',
  /** column name */
  RowData = 'row_data',
  /** column name */
  SchemaName = 'schema_name',
  /** column name */
  SessionUserName = 'session_user_name',
  /** column name */
  StatementOnly = 'statement_only',
  /** column name */
  TableName = 'table_name',
  /** column name */
  TransactionId = 'transaction_id'
}

/** input type for updating data in table "audit.logged_actions" */
export type Audit_Logged_Actions_Set_Input = {
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action?: InputMaybe<Scalars['String']>;
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk?: InputMaybe<Scalars['timestamptz']>;
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm?: InputMaybe<Scalars['timestamptz']>;
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx?: InputMaybe<Scalars['timestamptz']>;
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: InputMaybe<Scalars['String']>;
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['jsonb']>;
  /** IP address of client that issued query. Null for unix domain socket. */
  client_addr?: InputMaybe<Scalars['inet']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: InputMaybe<Scalars['Int']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: InputMaybe<Scalars['String']>;
  /** Unique identifier for each auditable event */
  event_id?: InputMaybe<Scalars['bigint']>;
  hasura_user?: InputMaybe<Scalars['jsonb']>;
  /** Table OID. Changes with drop/create. Get with 'tablename'::regclass */
  relid?: InputMaybe<Scalars['oid']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['jsonb']>;
  /** Database schema audited table for this event is in */
  schema_name?: InputMaybe<Scalars['String']>;
  /** Login / session user whose statement caused the audited event */
  session_user_name?: InputMaybe<Scalars['String']>;
  /** 't' if audit event is from an FOR EACH STATEMENT trigger, 'f' for FOR EACH ROW */
  statement_only?: InputMaybe<Scalars['Boolean']>;
  /** Non-schema-qualified table name of table event occured in */
  table_name?: InputMaybe<Scalars['String']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Audit_Logged_Actions_Stddev_Fields = {
  __typename?: 'audit_logged_actions_stddev_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Audit_Logged_Actions_Stddev_Pop_Fields = {
  __typename?: 'audit_logged_actions_stddev_pop_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Audit_Logged_Actions_Stddev_Samp_Fields = {
  __typename?: 'audit_logged_actions_stddev_samp_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "audit_logged_actions" */
export type Audit_Logged_Actions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audit_Logged_Actions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audit_Logged_Actions_Stream_Cursor_Value_Input = {
  /** Action type; I = insert, D = delete, U = update, T = truncate */
  action?: InputMaybe<Scalars['String']>;
  /** Wall clock time at which audited event's trigger call occurred */
  action_tstamp_clk?: InputMaybe<Scalars['timestamptz']>;
  /** Statement start timestamp for tx in which audited event occurred */
  action_tstamp_stm?: InputMaybe<Scalars['timestamptz']>;
  /** Transaction start timestamp for tx in which audited event occurred */
  action_tstamp_tx?: InputMaybe<Scalars['timestamptz']>;
  /** Application name set when this audit event occurred. Can be changed in-session by client. */
  application_name?: InputMaybe<Scalars['String']>;
  /** New values of fields changed by UPDATE. Null except for row-level UPDATE events. */
  changed_fields?: InputMaybe<Scalars['jsonb']>;
  /** IP address of client that issued query. Null for unix domain socket. */
  client_addr?: InputMaybe<Scalars['inet']>;
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: InputMaybe<Scalars['Int']>;
  /** Top-level query that caused this auditable event. May be more than one statement. */
  client_query?: InputMaybe<Scalars['String']>;
  /** Unique identifier for each auditable event */
  event_id?: InputMaybe<Scalars['bigint']>;
  hasura_user?: InputMaybe<Scalars['jsonb']>;
  /** Table OID. Changes with drop/create. Get with 'tablename'::regclass */
  relid?: InputMaybe<Scalars['oid']>;
  /** Record value. Null for statement-level trigger. For INSERT this is the new tuple. For DELETE and UPDATE it is the old tuple. */
  row_data?: InputMaybe<Scalars['jsonb']>;
  /** Database schema audited table for this event is in */
  schema_name?: InputMaybe<Scalars['String']>;
  /** Login / session user whose statement caused the audited event */
  session_user_name?: InputMaybe<Scalars['String']>;
  /** 't' if audit event is from an FOR EACH STATEMENT trigger, 'f' for FOR EACH ROW */
  statement_only?: InputMaybe<Scalars['Boolean']>;
  /** Non-schema-qualified table name of table event occured in */
  table_name?: InputMaybe<Scalars['String']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Audit_Logged_Actions_Sum_Fields = {
  __typename?: 'audit_logged_actions_sum_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Int']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['bigint']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['bigint']>;
};

export type Audit_Logged_Actions_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Audit_Logged_Actions_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Audit_Logged_Actions_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Audit_Logged_Actions_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Audit_Logged_Actions_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Audit_Logged_Actions_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Audit_Logged_Actions_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Audit_Logged_Actions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Audit_Logged_Actions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Audit_Logged_Actions_Var_Pop_Fields = {
  __typename?: 'audit_logged_actions_var_pop_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Audit_Logged_Actions_Var_Samp_Fields = {
  __typename?: 'audit_logged_actions_var_samp_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Audit_Logged_Actions_Variance_Fields = {
  __typename?: 'audit_logged_actions_variance_fields';
  /** Remote peer IP port address of client that issued query. Undefined for unix socket. */
  client_port?: Maybe<Scalars['Float']>;
  /** Unique identifier for each auditable event */
  event_id?: Maybe<Scalars['Float']>;
  /** Identifier of transaction that made the change. May wrap, but unique paired with action_tstamp_tx. */
  transaction_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "gift.wish_subscriber" */
export type Gift_Wish_Subscriber = {
  __typename?: 'gift_wish_subscriber';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  wish_id: Scalars['uuid'];
};

/** aggregated selection of "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_Aggregate = {
  __typename?: 'gift_wish_subscriber_aggregate';
  aggregate?: Maybe<Gift_Wish_Subscriber_Aggregate_Fields>;
  nodes: Array<Gift_Wish_Subscriber>;
};

export type Gift_Wish_Subscriber_Aggregate_Bool_Exp = {
  count?: InputMaybe<Gift_Wish_Subscriber_Aggregate_Bool_Exp_Count>;
};

export type Gift_Wish_Subscriber_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Gift_Wish_Subscriber_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_Aggregate_Fields = {
  __typename?: 'gift_wish_subscriber_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Gift_Wish_Subscriber_Max_Fields>;
  min?: Maybe<Gift_Wish_Subscriber_Min_Fields>;
};


/** aggregate fields of "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gift_Wish_Subscriber_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gift_Wish_Subscriber_Max_Order_By>;
  min?: InputMaybe<Gift_Wish_Subscriber_Min_Order_By>;
};

/** input type for inserting array relation for remote table "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_Arr_Rel_Insert_Input = {
  data: Array<Gift_Wish_Subscriber_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Gift_Wish_Subscriber_On_Conflict>;
};

/** Boolean expression to filter rows from the table "gift.wish_subscriber". All fields are combined with a logical 'AND'. */
export type Gift_Wish_Subscriber_Bool_Exp = {
  _and?: InputMaybe<Array<Gift_Wish_Subscriber_Bool_Exp>>;
  _not?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
  _or?: InputMaybe<Array<Gift_Wish_Subscriber_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  wish_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "gift.wish_subscriber" */
export enum Gift_Wish_Subscriber_Constraint {
  /** unique or primary key constraint on columns "id" */
  WishSubscriberPkey = 'wish_subscriber_pkey'
}

/** input type for inserting data into table "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  wish_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Gift_Wish_Subscriber_Max_Fields = {
  __typename?: 'gift_wish_subscriber_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  wish_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  wish_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gift_Wish_Subscriber_Min_Fields = {
  __typename?: 'gift_wish_subscriber_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  wish_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  wish_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_Mutation_Response = {
  __typename?: 'gift_wish_subscriber_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gift_Wish_Subscriber>;
};

/** on_conflict condition type for table "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_On_Conflict = {
  constraint: Gift_Wish_Subscriber_Constraint;
  update_columns?: Array<Gift_Wish_Subscriber_Update_Column>;
  where?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
};

/** Ordering options when selecting data from "gift.wish_subscriber". */
export type Gift_Wish_Subscriber_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  wish_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gift.wish_subscriber */
export type Gift_Wish_Subscriber_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "gift.wish_subscriber" */
export enum Gift_Wish_Subscriber_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WishId = 'wish_id'
}

/** input type for updating data in table "gift.wish_subscriber" */
export type Gift_Wish_Subscriber_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  wish_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "gift_wish_subscriber" */
export type Gift_Wish_Subscriber_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gift_Wish_Subscriber_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gift_Wish_Subscriber_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  wish_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "gift.wish_subscriber" */
export enum Gift_Wish_Subscriber_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WishId = 'wish_id'
}

export type Gift_Wish_Subscriber_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gift_Wish_Subscriber_Set_Input>;
  /** filter the rows which have to be updated */
  where: Gift_Wish_Subscriber_Bool_Exp;
};

/** Boolean expression to compare columns of type "inet". All fields are combined with logical 'AND'. */
export type Inet_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['inet']>;
  _gt?: InputMaybe<Scalars['inet']>;
  _gte?: InputMaybe<Scalars['inet']>;
  _in?: InputMaybe<Array<Scalars['inet']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['inet']>;
  _lte?: InputMaybe<Scalars['inet']>;
  _neq?: InputMaybe<Scalars['inet']>;
  _nin?: InputMaybe<Array<Scalars['inet']>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "address.cities" */
  deleteCities?: Maybe<City_Mutation_Response>;
  /** delete single row from the table: "address.cities" */
  deleteCity?: Maybe<City>;
  /** delete data from the table: "address.countries" */
  deleteCountries?: Maybe<Country_Mutation_Response>;
  /** delete single row from the table: "address.countries" */
  deleteCountry?: Maybe<Country>;
  /** delete single row from the table: "gift.events" */
  deleteGiftEvent?: Maybe<GiftEvent>;
  /** delete data from the table: "gift.events" */
  deleteGiftEvents?: Maybe<GiftEvent_Mutation_Response>;
  /** delete single row from the table: "gift.wish" */
  deleteGiftWish?: Maybe<GiftWish>;
  /** delete data from the table: "gift.wish" */
  deleteGiftWishes?: Maybe<GiftWish_Mutation_Response>;
  /** delete single row from the table: "address.postal_codes" */
  deletePostalCode?: Maybe<PostalCode>;
  /** delete data from the table: "address.postal_codes" */
  deletePostalCodes?: Maybe<PostalCode_Mutation_Response>;
  /** delete single row from the table: "address.streets" */
  deleteStreet?: Maybe<Street>;
  /** delete data from the table: "address.streets" */
  deleteStreets?: Maybe<Street_Mutation_Response>;
  deleteVaccinationRequest?: Maybe<VaccinationRequests>;
  deleteVaccinationRequests?: Maybe<VaccinationRequests_Mutation_Response>;
  /** delete data from the table: "audit.logged_actions" */
  delete_audit_logged_actions?: Maybe<Audit_Logged_Actions_Mutation_Response>;
  /** delete data from the table: "gift.wish_subscriber" */
  delete_gift_wish_subscriber?: Maybe<Gift_Wish_Subscriber_Mutation_Response>;
  /** delete single row from the table: "gift.wish_subscriber" */
  delete_gift_wish_subscriber_by_pk?: Maybe<Gift_Wish_Subscriber>;
  /** delete data from the table: "parliament.election_periods" */
  delete_parliament_election_periods?: Maybe<Parliament_Election_Periods_Mutation_Response>;
  /** delete single row from the table: "parliament.election_periods" */
  delete_parliament_election_periods_by_pk?: Maybe<Parliament_Election_Periods>;
  /** delete data from the table: "parliament.question_item_type" */
  delete_parliament_question_item_type?: Maybe<Parliament_Question_Item_Type_Mutation_Response>;
  /** delete single row from the table: "parliament.question_item_type" */
  delete_parliament_question_item_type_by_pk?: Maybe<Parliament_Question_Item_Type>;
  /** delete data from the table: "parliament.question_items" */
  delete_parliament_question_items?: Maybe<Parliament_Question_Items_Mutation_Response>;
  /** delete single row from the table: "parliament.question_items" */
  delete_parliament_question_items_by_pk?: Maybe<Parliament_Question_Items>;
  /** delete data from the table: "parliament.questions" */
  delete_parliament_questions?: Maybe<Parliament_Questions_Mutation_Response>;
  /** delete single row from the table: "parliament.questions" */
  delete_parliament_questions_by_pk?: Maybe<Parliament_Questions>;
  /** delete data from the table: "parliament.sessions" */
  delete_parliament_sessions?: Maybe<Parliament_Sessions_Mutation_Response>;
  /** delete single row from the table: "parliament.sessions" */
  delete_parliament_sessions_by_pk?: Maybe<Parliament_Sessions>;
  delete_vaccinationRequestStatuses?: Maybe<VaccinationRequestStatuses_Mutation_Response>;
  delete_vaccinationRequestStatuses_by_pk?: Maybe<VaccinationRequestStatuses>;
  delete_vaccinationRequestorAddress?: Maybe<VaccinationRequestorAddress_Mutation_Response>;
  delete_vaccinationRequestorAddress_by_pk?: Maybe<VaccinationRequestorAddress>;
  /** delete data from the table: "vak.hdb_foreign_key" */
  delete_vak_hdb_foreign_key?: Maybe<Vak_Hdb_Foreign_Key_Mutation_Response>;
  /** delete single row from the table: "vak.hdb_foreign_key" */
  delete_vak_hdb_foreign_key_by_pk?: Maybe<Vak_Hdb_Foreign_Key>;
  /** delete data from the table: "vak.hdb_relationship" */
  delete_vak_hdb_relationship?: Maybe<Vak_Hdb_Relationship_Mutation_Response>;
  /** delete single row from the table: "vak.hdb_relationship" */
  delete_vak_hdb_relationship_by_pk?: Maybe<Vak_Hdb_Relationship>;
  /** delete data from the table: "vak.hdb_table" */
  delete_vak_hdb_table?: Maybe<Vak_Hdb_Table_Mutation_Response>;
  /** delete single row from the table: "vak.hdb_table" */
  delete_vak_hdb_table_by_pk?: Maybe<Vak_Hdb_Table>;
  /** delete data from the table: "vak.kontrola" */
  delete_vak_kontrola?: Maybe<Vak_Kontrola_Mutation_Response>;
  /** delete single row from the table: "vak.kontrola" */
  delete_vak_kontrola_by_pk?: Maybe<Vak_Kontrola>;
  /** delete data from the table: "vak.kontrolny_bod" */
  delete_vak_kontrolny_bod?: Maybe<Vak_Kontrolny_Bod_Mutation_Response>;
  /** delete single row from the table: "vak.kontrolny_bod" */
  delete_vak_kontrolny_bod_by_pk?: Maybe<Vak_Kontrolny_Bod>;
  /** delete data from the table: "vak.obhliadka_old" */
  delete_vak_obhliadka_old?: Maybe<Vak_Obhliadka_Old_Mutation_Response>;
  /** delete single row from the table: "vak.obhliadka_old" */
  delete_vak_obhliadka_old_by_pk?: Maybe<Vak_Obhliadka_Old>;
  /** delete data from the table: "vak.objekt" */
  delete_vak_objekt?: Maybe<Vak_Objekt_Mutation_Response>;
  /** delete single row from the table: "vak.objekt" */
  delete_vak_objekt_by_pk?: Maybe<Vak_Objekt>;
  /** delete data from the table: "vak.objekt_typ" */
  delete_vak_objekt_typ?: Maybe<Vak_Objekt_Typ_Mutation_Response>;
  /** delete single row from the table: "vak.objekt_typ" */
  delete_vak_objekt_typ_by_pk?: Maybe<Vak_Objekt_Typ>;
  /** delete data from the table: "vak.page" */
  delete_vak_page?: Maybe<Vak_Page_Mutation_Response>;
  /** delete single row from the table: "vak.page" */
  delete_vak_page_by_pk?: Maybe<Vak_Page>;
  /** delete data from the table: "vak.pracovnik" */
  delete_vak_pracovnik?: Maybe<Vak_Pracovnik_Mutation_Response>;
  /** delete single row from the table: "vak.pracovnik" */
  delete_vak_pracovnik_by_pk?: Maybe<Vak_Pracovnik>;
  /** delete data from the table: "vak.predpis_kontrola" */
  delete_vak_predpis_kontrola?: Maybe<Vak_Predpis_Kontrola_Mutation_Response>;
  /** delete single row from the table: "vak.predpis_kontrola" */
  delete_vak_predpis_kontrola_by_pk?: Maybe<Vak_Predpis_Kontrola>;
  /** delete data from the table: "vak.predpis_obhliadka" */
  delete_vak_predpis_obhliadka?: Maybe<Vak_Predpis_Obhliadka_Mutation_Response>;
  /** delete single row from the table: "vak.predpis_obhliadka" */
  delete_vak_predpis_obhliadka_by_pk?: Maybe<Vak_Predpis_Obhliadka>;
  /** delete data from the table: "vak.smena" */
  delete_vak_smena?: Maybe<Vak_Smena_Mutation_Response>;
  /** delete data from the table: "vak.smena2pracovnik" */
  delete_vak_smena2pracovnik?: Maybe<Vak_Smena2pracovnik_Mutation_Response>;
  /** delete single row from the table: "vak.smena2pracovnik" */
  delete_vak_smena2pracovnik_by_pk?: Maybe<Vak_Smena2pracovnik>;
  /** delete single row from the table: "vak.smena" */
  delete_vak_smena_by_pk?: Maybe<Vak_Smena>;
  /** delete data from the table: "vak.smena_typ" */
  delete_vak_smena_typ?: Maybe<Vak_Smena_Typ_Mutation_Response>;
  /** delete single row from the table: "vak.smena_typ" */
  delete_vak_smena_typ_by_pk?: Maybe<Vak_Smena_Typ>;
  /** delete data from the table: "vak.smena_typ_vstup" */
  delete_vak_smena_typ_vstup?: Maybe<Vak_Smena_Typ_Vstup_Mutation_Response>;
  /** delete single row from the table: "vak.smena_typ_vstup" */
  delete_vak_smena_typ_vstup_by_pk?: Maybe<Vak_Smena_Typ_Vstup>;
  /** delete data from the table: "vak.theme" */
  delete_vak_theme?: Maybe<Vak_Theme_Mutation_Response>;
  /** delete single row from the table: "vak.theme" */
  delete_vak_theme_by_pk?: Maybe<Vak_Theme>;
  /** delete data from the table: "vak.uloha" */
  delete_vak_uloha?: Maybe<Vak_Uloha_Mutation_Response>;
  /** delete single row from the table: "vak.uloha" */
  delete_vak_uloha_by_pk?: Maybe<Vak_Uloha>;
  /** delete data from the table: "vak.uloha_typ" */
  delete_vak_uloha_typ?: Maybe<Vak_Uloha_Typ_Mutation_Response>;
  /** delete single row from the table: "vak.uloha_typ" */
  delete_vak_uloha_typ_by_pk?: Maybe<Vak_Uloha_Typ>;
  /** delete data from the table: "vak.uloha_typ_vstup" */
  delete_vak_uloha_typ_vstup?: Maybe<Vak_Uloha_Typ_Vstup_Mutation_Response>;
  /** delete single row from the table: "vak.uloha_typ_vstup" */
  delete_vak_uloha_typ_vstup_by_pk?: Maybe<Vak_Uloha_Typ_Vstup>;
  /** insert data into the table: "address.cities" */
  insertCities?: Maybe<City_Mutation_Response>;
  /** insert a single row into the table: "address.cities" */
  insertCity?: Maybe<City>;
  /** insert data into the table: "address.countries" */
  insertCountries?: Maybe<Country_Mutation_Response>;
  /** insert a single row into the table: "address.countries" */
  insertCountry?: Maybe<Country>;
  /** insert a single row into the table: "gift.events" */
  insertGiftEvent?: Maybe<GiftEvent>;
  /** insert data into the table: "gift.events" */
  insertGiftEvents?: Maybe<GiftEvent_Mutation_Response>;
  /** insert a single row into the table: "gift.wish" */
  insertGiftWish?: Maybe<GiftWish>;
  /** insert data into the table: "gift.wish" */
  insertGiftWishes?: Maybe<GiftWish_Mutation_Response>;
  /** insert a single row into the table: "address.postal_codes" */
  insertPostalCode?: Maybe<PostalCode>;
  /** insert data into the table: "address.postal_codes" */
  insertPostalCodes?: Maybe<PostalCode_Mutation_Response>;
  /** insert a single row into the table: "address.streets" */
  insertStreet?: Maybe<Street>;
  /** insert data into the table: "address.streets" */
  insertStreets?: Maybe<Street_Mutation_Response>;
  /** insert a single row into the table: "vaccination.requests" */
  insertVaccinationRequest?: Maybe<VaccinationRequests>;
  /** insert data into the table: "vaccination.requests" */
  insertVaccinationRequests?: Maybe<VaccinationRequests_Mutation_Response>;
  /** insert data into the table: "audit.logged_actions" */
  insert_audit_logged_actions?: Maybe<Audit_Logged_Actions_Mutation_Response>;
  /** insert a single row into the table: "audit.logged_actions" */
  insert_audit_logged_actions_one?: Maybe<Audit_Logged_Actions>;
  /** insert data into the table: "gift.wish_subscriber" */
  insert_gift_wish_subscriber?: Maybe<Gift_Wish_Subscriber_Mutation_Response>;
  /** insert a single row into the table: "gift.wish_subscriber" */
  insert_gift_wish_subscriber_one?: Maybe<Gift_Wish_Subscriber>;
  /** insert data into the table: "parliament.election_periods" */
  insert_parliament_election_periods?: Maybe<Parliament_Election_Periods_Mutation_Response>;
  /** insert a single row into the table: "parliament.election_periods" */
  insert_parliament_election_periods_one?: Maybe<Parliament_Election_Periods>;
  /** insert data into the table: "parliament.question_item_type" */
  insert_parliament_question_item_type?: Maybe<Parliament_Question_Item_Type_Mutation_Response>;
  /** insert a single row into the table: "parliament.question_item_type" */
  insert_parliament_question_item_type_one?: Maybe<Parliament_Question_Item_Type>;
  /** insert data into the table: "parliament.question_items" */
  insert_parliament_question_items?: Maybe<Parliament_Question_Items_Mutation_Response>;
  /** insert a single row into the table: "parliament.question_items" */
  insert_parliament_question_items_one?: Maybe<Parliament_Question_Items>;
  /** insert data into the table: "parliament.questions" */
  insert_parliament_questions?: Maybe<Parliament_Questions_Mutation_Response>;
  /** insert a single row into the table: "parliament.questions" */
  insert_parliament_questions_one?: Maybe<Parliament_Questions>;
  /** insert data into the table: "parliament.sessions" */
  insert_parliament_sessions?: Maybe<Parliament_Sessions_Mutation_Response>;
  /** insert a single row into the table: "parliament.sessions" */
  insert_parliament_sessions_one?: Maybe<Parliament_Sessions>;
  insert_vaccinationRequestStatuses?: Maybe<VaccinationRequestStatuses_Mutation_Response>;
  insert_vaccinationRequestStatuses_one?: Maybe<VaccinationRequestStatuses>;
  insert_vaccinationRequestorAddress?: Maybe<VaccinationRequestorAddress_Mutation_Response>;
  insert_vaccinationRequestorAddress_one?: Maybe<VaccinationRequestorAddress>;
  /** insert data into the table: "vak.hdb_foreign_key" */
  insert_vak_hdb_foreign_key?: Maybe<Vak_Hdb_Foreign_Key_Mutation_Response>;
  /** insert a single row into the table: "vak.hdb_foreign_key" */
  insert_vak_hdb_foreign_key_one?: Maybe<Vak_Hdb_Foreign_Key>;
  /** insert data into the table: "vak.hdb_relationship" */
  insert_vak_hdb_relationship?: Maybe<Vak_Hdb_Relationship_Mutation_Response>;
  /** insert a single row into the table: "vak.hdb_relationship" */
  insert_vak_hdb_relationship_one?: Maybe<Vak_Hdb_Relationship>;
  /** insert data into the table: "vak.hdb_table" */
  insert_vak_hdb_table?: Maybe<Vak_Hdb_Table_Mutation_Response>;
  /** insert a single row into the table: "vak.hdb_table" */
  insert_vak_hdb_table_one?: Maybe<Vak_Hdb_Table>;
  /** insert data into the table: "vak.kontrola" */
  insert_vak_kontrola?: Maybe<Vak_Kontrola_Mutation_Response>;
  /** insert a single row into the table: "vak.kontrola" */
  insert_vak_kontrola_one?: Maybe<Vak_Kontrola>;
  /** insert data into the table: "vak.kontrolny_bod" */
  insert_vak_kontrolny_bod?: Maybe<Vak_Kontrolny_Bod_Mutation_Response>;
  /** insert a single row into the table: "vak.kontrolny_bod" */
  insert_vak_kontrolny_bod_one?: Maybe<Vak_Kontrolny_Bod>;
  /** insert data into the table: "vak.obhliadka_old" */
  insert_vak_obhliadka_old?: Maybe<Vak_Obhliadka_Old_Mutation_Response>;
  /** insert a single row into the table: "vak.obhliadka_old" */
  insert_vak_obhliadka_old_one?: Maybe<Vak_Obhliadka_Old>;
  /** insert data into the table: "vak.objekt" */
  insert_vak_objekt?: Maybe<Vak_Objekt_Mutation_Response>;
  /** insert a single row into the table: "vak.objekt" */
  insert_vak_objekt_one?: Maybe<Vak_Objekt>;
  /** insert data into the table: "vak.objekt_typ" */
  insert_vak_objekt_typ?: Maybe<Vak_Objekt_Typ_Mutation_Response>;
  /** insert a single row into the table: "vak.objekt_typ" */
  insert_vak_objekt_typ_one?: Maybe<Vak_Objekt_Typ>;
  /** insert data into the table: "vak.page" */
  insert_vak_page?: Maybe<Vak_Page_Mutation_Response>;
  /** insert a single row into the table: "vak.page" */
  insert_vak_page_one?: Maybe<Vak_Page>;
  /** insert data into the table: "vak.pracovnik" */
  insert_vak_pracovnik?: Maybe<Vak_Pracovnik_Mutation_Response>;
  /** insert a single row into the table: "vak.pracovnik" */
  insert_vak_pracovnik_one?: Maybe<Vak_Pracovnik>;
  /** insert data into the table: "vak.predpis_kontrola" */
  insert_vak_predpis_kontrola?: Maybe<Vak_Predpis_Kontrola_Mutation_Response>;
  /** insert a single row into the table: "vak.predpis_kontrola" */
  insert_vak_predpis_kontrola_one?: Maybe<Vak_Predpis_Kontrola>;
  /** insert data into the table: "vak.predpis_obhliadka" */
  insert_vak_predpis_obhliadka?: Maybe<Vak_Predpis_Obhliadka_Mutation_Response>;
  /** insert a single row into the table: "vak.predpis_obhliadka" */
  insert_vak_predpis_obhliadka_one?: Maybe<Vak_Predpis_Obhliadka>;
  /** insert data into the table: "vak.smena" */
  insert_vak_smena?: Maybe<Vak_Smena_Mutation_Response>;
  /** insert data into the table: "vak.smena2pracovnik" */
  insert_vak_smena2pracovnik?: Maybe<Vak_Smena2pracovnik_Mutation_Response>;
  /** insert a single row into the table: "vak.smena2pracovnik" */
  insert_vak_smena2pracovnik_one?: Maybe<Vak_Smena2pracovnik>;
  /** insert a single row into the table: "vak.smena" */
  insert_vak_smena_one?: Maybe<Vak_Smena>;
  /** insert data into the table: "vak.smena_typ" */
  insert_vak_smena_typ?: Maybe<Vak_Smena_Typ_Mutation_Response>;
  /** insert a single row into the table: "vak.smena_typ" */
  insert_vak_smena_typ_one?: Maybe<Vak_Smena_Typ>;
  /** insert data into the table: "vak.smena_typ_vstup" */
  insert_vak_smena_typ_vstup?: Maybe<Vak_Smena_Typ_Vstup_Mutation_Response>;
  /** insert a single row into the table: "vak.smena_typ_vstup" */
  insert_vak_smena_typ_vstup_one?: Maybe<Vak_Smena_Typ_Vstup>;
  /** insert data into the table: "vak.theme" */
  insert_vak_theme?: Maybe<Vak_Theme_Mutation_Response>;
  /** insert a single row into the table: "vak.theme" */
  insert_vak_theme_one?: Maybe<Vak_Theme>;
  /** insert data into the table: "vak.uloha" */
  insert_vak_uloha?: Maybe<Vak_Uloha_Mutation_Response>;
  /** insert a single row into the table: "vak.uloha" */
  insert_vak_uloha_one?: Maybe<Vak_Uloha>;
  /** insert data into the table: "vak.uloha_typ" */
  insert_vak_uloha_typ?: Maybe<Vak_Uloha_Typ_Mutation_Response>;
  /** insert a single row into the table: "vak.uloha_typ" */
  insert_vak_uloha_typ_one?: Maybe<Vak_Uloha_Typ>;
  /** insert data into the table: "vak.uloha_typ_vstup" */
  insert_vak_uloha_typ_vstup?: Maybe<Vak_Uloha_Typ_Vstup_Mutation_Response>;
  /** insert a single row into the table: "vak.uloha_typ_vstup" */
  insert_vak_uloha_typ_vstup_one?: Maybe<Vak_Uloha_Typ_Vstup>;
  /** update data of the table: "address.cities" */
  updateCities?: Maybe<City_Mutation_Response>;
  /** update multiples rows of table: "address.cities" */
  updateCitiesMany?: Maybe<Array<Maybe<City_Mutation_Response>>>;
  /** update single row of the table: "address.cities" */
  updateCity?: Maybe<City>;
  /** update data of the table: "address.countries" */
  updateCountries?: Maybe<Country_Mutation_Response>;
  /** update multiples rows of table: "address.countries" */
  updateCountriesMany?: Maybe<Array<Maybe<Country_Mutation_Response>>>;
  /** update single row of the table: "address.countries" */
  updateCountry?: Maybe<Country>;
  /** update single row of the table: "gift.events" */
  updateGiftEvent?: Maybe<GiftEvent>;
  /** update data of the table: "gift.events" */
  updateGiftEvents?: Maybe<GiftEvent_Mutation_Response>;
  /** update multiples rows of table: "gift.events" */
  updateGiftEventsMany?: Maybe<Array<Maybe<GiftEvent_Mutation_Response>>>;
  /** update single row of the table: "gift.wish" */
  updateGiftWish?: Maybe<GiftWish>;
  /** update data of the table: "gift.wish" */
  updateGiftWishes?: Maybe<GiftWish_Mutation_Response>;
  /** update multiples rows of table: "gift.wish" */
  updateGiftWishesMany?: Maybe<Array<Maybe<GiftWish_Mutation_Response>>>;
  /** update single row of the table: "address.postal_codes" */
  updatePostalCode?: Maybe<PostalCode>;
  /** update data of the table: "address.postal_codes" */
  updatePostalCodes?: Maybe<PostalCode_Mutation_Response>;
  /** update multiples rows of table: "address.postal_codes" */
  updatePostalCodesMany?: Maybe<Array<Maybe<PostalCode_Mutation_Response>>>;
  /** update single row of the table: "address.streets" */
  updateStreet?: Maybe<Street>;
  /** update data of the table: "address.streets" */
  updateStreets?: Maybe<Street_Mutation_Response>;
  /** update multiples rows of table: "address.streets" */
  updateStreetsMany?: Maybe<Array<Maybe<Street_Mutation_Response>>>;
  /** update single row of the table: "vaccination.requests" */
  updateVaccinationRequest?: Maybe<VaccinationRequests>;
  /** update data of the table: "vaccination.requests" */
  updateVaccinationRequests?: Maybe<VaccinationRequests_Mutation_Response>;
  /** update multiples rows of table: "vaccination.requests" */
  updateVaccinationRequestsMany?: Maybe<Array<Maybe<VaccinationRequests_Mutation_Response>>>;
  /** update data of the table: "audit.logged_actions" */
  update_audit_logged_actions?: Maybe<Audit_Logged_Actions_Mutation_Response>;
  /** update multiples rows of table: "audit.logged_actions" */
  update_audit_logged_actions_many?: Maybe<Array<Maybe<Audit_Logged_Actions_Mutation_Response>>>;
  /** update data of the table: "gift.wish_subscriber" */
  update_gift_wish_subscriber?: Maybe<Gift_Wish_Subscriber_Mutation_Response>;
  /** update single row of the table: "gift.wish_subscriber" */
  update_gift_wish_subscriber_by_pk?: Maybe<Gift_Wish_Subscriber>;
  /** update multiples rows of table: "gift.wish_subscriber" */
  update_gift_wish_subscriber_many?: Maybe<Array<Maybe<Gift_Wish_Subscriber_Mutation_Response>>>;
  /** update data of the table: "parliament.election_periods" */
  update_parliament_election_periods?: Maybe<Parliament_Election_Periods_Mutation_Response>;
  /** update single row of the table: "parliament.election_periods" */
  update_parliament_election_periods_by_pk?: Maybe<Parliament_Election_Periods>;
  /** update multiples rows of table: "parliament.election_periods" */
  update_parliament_election_periods_many?: Maybe<Array<Maybe<Parliament_Election_Periods_Mutation_Response>>>;
  /** update data of the table: "parliament.question_item_type" */
  update_parliament_question_item_type?: Maybe<Parliament_Question_Item_Type_Mutation_Response>;
  /** update single row of the table: "parliament.question_item_type" */
  update_parliament_question_item_type_by_pk?: Maybe<Parliament_Question_Item_Type>;
  /** update multiples rows of table: "parliament.question_item_type" */
  update_parliament_question_item_type_many?: Maybe<Array<Maybe<Parliament_Question_Item_Type_Mutation_Response>>>;
  /** update data of the table: "parliament.question_items" */
  update_parliament_question_items?: Maybe<Parliament_Question_Items_Mutation_Response>;
  /** update single row of the table: "parliament.question_items" */
  update_parliament_question_items_by_pk?: Maybe<Parliament_Question_Items>;
  /** update multiples rows of table: "parliament.question_items" */
  update_parliament_question_items_many?: Maybe<Array<Maybe<Parliament_Question_Items_Mutation_Response>>>;
  /** update data of the table: "parliament.questions" */
  update_parliament_questions?: Maybe<Parliament_Questions_Mutation_Response>;
  /** update single row of the table: "parliament.questions" */
  update_parliament_questions_by_pk?: Maybe<Parliament_Questions>;
  /** update multiples rows of table: "parliament.questions" */
  update_parliament_questions_many?: Maybe<Array<Maybe<Parliament_Questions_Mutation_Response>>>;
  /** update data of the table: "parliament.sessions" */
  update_parliament_sessions?: Maybe<Parliament_Sessions_Mutation_Response>;
  /** update single row of the table: "parliament.sessions" */
  update_parliament_sessions_by_pk?: Maybe<Parliament_Sessions>;
  /** update multiples rows of table: "parliament.sessions" */
  update_parliament_sessions_many?: Maybe<Array<Maybe<Parliament_Sessions_Mutation_Response>>>;
  update_vaccinationRequestStatuses?: Maybe<VaccinationRequestStatuses_Mutation_Response>;
  update_vaccinationRequestStatuses_by_pk?: Maybe<VaccinationRequestStatuses>;
  update_vaccinationRequestStatuses_many?: Maybe<Array<Maybe<VaccinationRequestStatuses_Mutation_Response>>>;
  update_vaccinationRequestorAddress?: Maybe<VaccinationRequestorAddress_Mutation_Response>;
  update_vaccinationRequestorAddress_by_pk?: Maybe<VaccinationRequestorAddress>;
  update_vaccinationRequestorAddress_many?: Maybe<Array<Maybe<VaccinationRequestorAddress_Mutation_Response>>>;
  /** update data of the table: "vak.hdb_foreign_key" */
  update_vak_hdb_foreign_key?: Maybe<Vak_Hdb_Foreign_Key_Mutation_Response>;
  /** update single row of the table: "vak.hdb_foreign_key" */
  update_vak_hdb_foreign_key_by_pk?: Maybe<Vak_Hdb_Foreign_Key>;
  /** update multiples rows of table: "vak.hdb_foreign_key" */
  update_vak_hdb_foreign_key_many?: Maybe<Array<Maybe<Vak_Hdb_Foreign_Key_Mutation_Response>>>;
  /** update data of the table: "vak.hdb_relationship" */
  update_vak_hdb_relationship?: Maybe<Vak_Hdb_Relationship_Mutation_Response>;
  /** update single row of the table: "vak.hdb_relationship" */
  update_vak_hdb_relationship_by_pk?: Maybe<Vak_Hdb_Relationship>;
  /** update multiples rows of table: "vak.hdb_relationship" */
  update_vak_hdb_relationship_many?: Maybe<Array<Maybe<Vak_Hdb_Relationship_Mutation_Response>>>;
  /** update data of the table: "vak.hdb_table" */
  update_vak_hdb_table?: Maybe<Vak_Hdb_Table_Mutation_Response>;
  /** update single row of the table: "vak.hdb_table" */
  update_vak_hdb_table_by_pk?: Maybe<Vak_Hdb_Table>;
  /** update multiples rows of table: "vak.hdb_table" */
  update_vak_hdb_table_many?: Maybe<Array<Maybe<Vak_Hdb_Table_Mutation_Response>>>;
  /** update data of the table: "vak.kontrola" */
  update_vak_kontrola?: Maybe<Vak_Kontrola_Mutation_Response>;
  /** update single row of the table: "vak.kontrola" */
  update_vak_kontrola_by_pk?: Maybe<Vak_Kontrola>;
  /** update multiples rows of table: "vak.kontrola" */
  update_vak_kontrola_many?: Maybe<Array<Maybe<Vak_Kontrola_Mutation_Response>>>;
  /** update data of the table: "vak.kontrolny_bod" */
  update_vak_kontrolny_bod?: Maybe<Vak_Kontrolny_Bod_Mutation_Response>;
  /** update single row of the table: "vak.kontrolny_bod" */
  update_vak_kontrolny_bod_by_pk?: Maybe<Vak_Kontrolny_Bod>;
  /** update multiples rows of table: "vak.kontrolny_bod" */
  update_vak_kontrolny_bod_many?: Maybe<Array<Maybe<Vak_Kontrolny_Bod_Mutation_Response>>>;
  /** update data of the table: "vak.obhliadka_old" */
  update_vak_obhliadka_old?: Maybe<Vak_Obhliadka_Old_Mutation_Response>;
  /** update single row of the table: "vak.obhliadka_old" */
  update_vak_obhliadka_old_by_pk?: Maybe<Vak_Obhliadka_Old>;
  /** update multiples rows of table: "vak.obhliadka_old" */
  update_vak_obhliadka_old_many?: Maybe<Array<Maybe<Vak_Obhliadka_Old_Mutation_Response>>>;
  /** update data of the table: "vak.objekt" */
  update_vak_objekt?: Maybe<Vak_Objekt_Mutation_Response>;
  /** update single row of the table: "vak.objekt" */
  update_vak_objekt_by_pk?: Maybe<Vak_Objekt>;
  /** update multiples rows of table: "vak.objekt" */
  update_vak_objekt_many?: Maybe<Array<Maybe<Vak_Objekt_Mutation_Response>>>;
  /** update data of the table: "vak.objekt_typ" */
  update_vak_objekt_typ?: Maybe<Vak_Objekt_Typ_Mutation_Response>;
  /** update single row of the table: "vak.objekt_typ" */
  update_vak_objekt_typ_by_pk?: Maybe<Vak_Objekt_Typ>;
  /** update multiples rows of table: "vak.objekt_typ" */
  update_vak_objekt_typ_many?: Maybe<Array<Maybe<Vak_Objekt_Typ_Mutation_Response>>>;
  /** update data of the table: "vak.page" */
  update_vak_page?: Maybe<Vak_Page_Mutation_Response>;
  /** update single row of the table: "vak.page" */
  update_vak_page_by_pk?: Maybe<Vak_Page>;
  /** update multiples rows of table: "vak.page" */
  update_vak_page_many?: Maybe<Array<Maybe<Vak_Page_Mutation_Response>>>;
  /** update data of the table: "vak.pracovnik" */
  update_vak_pracovnik?: Maybe<Vak_Pracovnik_Mutation_Response>;
  /** update single row of the table: "vak.pracovnik" */
  update_vak_pracovnik_by_pk?: Maybe<Vak_Pracovnik>;
  /** update multiples rows of table: "vak.pracovnik" */
  update_vak_pracovnik_many?: Maybe<Array<Maybe<Vak_Pracovnik_Mutation_Response>>>;
  /** update data of the table: "vak.predpis_kontrola" */
  update_vak_predpis_kontrola?: Maybe<Vak_Predpis_Kontrola_Mutation_Response>;
  /** update single row of the table: "vak.predpis_kontrola" */
  update_vak_predpis_kontrola_by_pk?: Maybe<Vak_Predpis_Kontrola>;
  /** update multiples rows of table: "vak.predpis_kontrola" */
  update_vak_predpis_kontrola_many?: Maybe<Array<Maybe<Vak_Predpis_Kontrola_Mutation_Response>>>;
  /** update data of the table: "vak.predpis_obhliadka" */
  update_vak_predpis_obhliadka?: Maybe<Vak_Predpis_Obhliadka_Mutation_Response>;
  /** update single row of the table: "vak.predpis_obhliadka" */
  update_vak_predpis_obhliadka_by_pk?: Maybe<Vak_Predpis_Obhliadka>;
  /** update multiples rows of table: "vak.predpis_obhliadka" */
  update_vak_predpis_obhliadka_many?: Maybe<Array<Maybe<Vak_Predpis_Obhliadka_Mutation_Response>>>;
  /** update data of the table: "vak.smena" */
  update_vak_smena?: Maybe<Vak_Smena_Mutation_Response>;
  /** update data of the table: "vak.smena2pracovnik" */
  update_vak_smena2pracovnik?: Maybe<Vak_Smena2pracovnik_Mutation_Response>;
  /** update single row of the table: "vak.smena2pracovnik" */
  update_vak_smena2pracovnik_by_pk?: Maybe<Vak_Smena2pracovnik>;
  /** update multiples rows of table: "vak.smena2pracovnik" */
  update_vak_smena2pracovnik_many?: Maybe<Array<Maybe<Vak_Smena2pracovnik_Mutation_Response>>>;
  /** update single row of the table: "vak.smena" */
  update_vak_smena_by_pk?: Maybe<Vak_Smena>;
  /** update multiples rows of table: "vak.smena" */
  update_vak_smena_many?: Maybe<Array<Maybe<Vak_Smena_Mutation_Response>>>;
  /** update data of the table: "vak.smena_typ" */
  update_vak_smena_typ?: Maybe<Vak_Smena_Typ_Mutation_Response>;
  /** update single row of the table: "vak.smena_typ" */
  update_vak_smena_typ_by_pk?: Maybe<Vak_Smena_Typ>;
  /** update multiples rows of table: "vak.smena_typ" */
  update_vak_smena_typ_many?: Maybe<Array<Maybe<Vak_Smena_Typ_Mutation_Response>>>;
  /** update data of the table: "vak.smena_typ_vstup" */
  update_vak_smena_typ_vstup?: Maybe<Vak_Smena_Typ_Vstup_Mutation_Response>;
  /** update single row of the table: "vak.smena_typ_vstup" */
  update_vak_smena_typ_vstup_by_pk?: Maybe<Vak_Smena_Typ_Vstup>;
  /** update multiples rows of table: "vak.smena_typ_vstup" */
  update_vak_smena_typ_vstup_many?: Maybe<Array<Maybe<Vak_Smena_Typ_Vstup_Mutation_Response>>>;
  /** update data of the table: "vak.theme" */
  update_vak_theme?: Maybe<Vak_Theme_Mutation_Response>;
  /** update single row of the table: "vak.theme" */
  update_vak_theme_by_pk?: Maybe<Vak_Theme>;
  /** update multiples rows of table: "vak.theme" */
  update_vak_theme_many?: Maybe<Array<Maybe<Vak_Theme_Mutation_Response>>>;
  /** update data of the table: "vak.uloha" */
  update_vak_uloha?: Maybe<Vak_Uloha_Mutation_Response>;
  /** update single row of the table: "vak.uloha" */
  update_vak_uloha_by_pk?: Maybe<Vak_Uloha>;
  /** update multiples rows of table: "vak.uloha" */
  update_vak_uloha_many?: Maybe<Array<Maybe<Vak_Uloha_Mutation_Response>>>;
  /** update data of the table: "vak.uloha_typ" */
  update_vak_uloha_typ?: Maybe<Vak_Uloha_Typ_Mutation_Response>;
  /** update single row of the table: "vak.uloha_typ" */
  update_vak_uloha_typ_by_pk?: Maybe<Vak_Uloha_Typ>;
  /** update multiples rows of table: "vak.uloha_typ" */
  update_vak_uloha_typ_many?: Maybe<Array<Maybe<Vak_Uloha_Typ_Mutation_Response>>>;
  /** update data of the table: "vak.uloha_typ_vstup" */
  update_vak_uloha_typ_vstup?: Maybe<Vak_Uloha_Typ_Vstup_Mutation_Response>;
  /** update single row of the table: "vak.uloha_typ_vstup" */
  update_vak_uloha_typ_vstup_by_pk?: Maybe<Vak_Uloha_Typ_Vstup>;
  /** update multiples rows of table: "vak.uloha_typ_vstup" */
  update_vak_uloha_typ_vstup_many?: Maybe<Array<Maybe<Vak_Uloha_Typ_Vstup_Mutation_Response>>>;
  /** delete single row from the table: "vaccination.centres" */
  vaccinationDeleteCentre?: Maybe<VaccinationCentres>;
  /** delete data from the table: "vaccination.centres" */
  vaccinationDeleteCentres?: Maybe<VaccinationCentres_Mutation_Response>;
  /** insert a single row into the table: "vaccination.centres" */
  vaccinationInsertCentre?: Maybe<VaccinationCentres>;
  /** insert data into the table: "vaccination.centres" */
  vaccinationInsertCentres?: Maybe<VaccinationCentres_Mutation_Response>;
  /** update single row of the table: "vaccination.centres" */
  vaccinationUpdateCentre?: Maybe<VaccinationCentres>;
  /** update data of the table: "vaccination.centres" */
  vaccinationUpdateCentres?: Maybe<VaccinationCentres_Mutation_Response>;
  /** update multiples rows of table: "vaccination.centres" */
  vaccinationUpdateCentresMany?: Maybe<Array<Maybe<VaccinationCentres_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteCitiesArgs = {
  where: City_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteCityArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCountriesArgs = {
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteCountryArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteGiftEventArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteGiftEventsArgs = {
  where: GiftEvent_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteGiftWishArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteGiftWishesArgs = {
  where: GiftWish_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeletePostalCodeArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePostalCodesArgs = {
  where: PostalCode_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteStreetArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteStreetsArgs = {
  where: Street_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteVaccinationRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteVaccinationRequestsArgs = {
  where: VaccinationRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audit_Logged_ActionsArgs = {
  where: Audit_Logged_Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gift_Wish_SubscriberArgs = {
  where: Gift_Wish_Subscriber_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gift_Wish_Subscriber_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Parliament_Election_PeriodsArgs = {
  where: Parliament_Election_Periods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Parliament_Election_Periods_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Parliament_Question_Item_TypeArgs = {
  where: Parliament_Question_Item_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Parliament_Question_Item_Type_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Parliament_Question_ItemsArgs = {
  where: Parliament_Question_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Parliament_Question_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Parliament_QuestionsArgs = {
  where: Parliament_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Parliament_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Parliament_SessionsArgs = {
  where: Parliament_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Parliament_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_VaccinationRequestStatusesArgs = {
  where: VaccinationRequestStatuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_VaccinationRequestStatuses_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_VaccinationRequestorAddressArgs = {
  where: VaccinationRequestorAddress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_VaccinationRequestorAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Hdb_Foreign_KeyArgs = {
  where: Vak_Hdb_Foreign_Key_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Hdb_Foreign_Key_By_PkArgs = {
  ref_table: Scalars['String'];
  table_name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Hdb_RelationshipArgs = {
  where: Vak_Hdb_Relationship_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Hdb_Relationship_By_PkArgs = {
  rel_name: Scalars['String'];
  table_name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Hdb_TableArgs = {
  where: Vak_Hdb_Table_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Hdb_Table_By_PkArgs = {
  table_name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_KontrolaArgs = {
  where: Vak_Kontrola_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Kontrola_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Kontrolny_BodArgs = {
  where: Vak_Kontrolny_Bod_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Kontrolny_Bod_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Obhliadka_OldArgs = {
  where: Vak_Obhliadka_Old_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Obhliadka_Old_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_ObjektArgs = {
  where: Vak_Objekt_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Objekt_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Objekt_TypArgs = {
  where: Vak_Objekt_Typ_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Objekt_Typ_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_PageArgs = {
  where: Vak_Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Page_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_PracovnikArgs = {
  where: Vak_Pracovnik_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Pracovnik_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Predpis_KontrolaArgs = {
  where: Vak_Predpis_Kontrola_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Predpis_Kontrola_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Predpis_ObhliadkaArgs = {
  where: Vak_Predpis_Obhliadka_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Predpis_Obhliadka_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_SmenaArgs = {
  where: Vak_Smena_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Smena2pracovnikArgs = {
  where: Vak_Smena2pracovnik_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Smena2pracovnik_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Smena_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Smena_TypArgs = {
  where: Vak_Smena_Typ_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Smena_Typ_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Smena_Typ_VstupArgs = {
  where: Vak_Smena_Typ_Vstup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Smena_Typ_Vstup_By_PkArgs = {
  smena_typ: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_ThemeArgs = {
  where: Vak_Theme_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Theme_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_UlohaArgs = {
  where: Vak_Uloha_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Uloha_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Uloha_TypArgs = {
  where: Vak_Uloha_Typ_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Uloha_Typ_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Vak_Uloha_Typ_VstupArgs = {
  where: Vak_Uloha_Typ_Vstup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vak_Uloha_Typ_Vstup_By_PkArgs = {
  uloha_typ: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsertCitiesArgs = {
  objects: Array<City_Insert_Input>;
  on_conflict?: InputMaybe<City_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCityArgs = {
  object: City_Insert_Input;
  on_conflict?: InputMaybe<City_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCountriesArgs = {
  objects: Array<Country_Insert_Input>;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCountryArgs = {
  object: Country_Insert_Input;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGiftEventArgs = {
  object: GiftEvent_Insert_Input;
  on_conflict?: InputMaybe<GiftEvent_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGiftEventsArgs = {
  objects: Array<GiftEvent_Insert_Input>;
  on_conflict?: InputMaybe<GiftEvent_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGiftWishArgs = {
  object: GiftWish_Insert_Input;
  on_conflict?: InputMaybe<GiftWish_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGiftWishesArgs = {
  objects: Array<GiftWish_Insert_Input>;
  on_conflict?: InputMaybe<GiftWish_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPostalCodeArgs = {
  object: PostalCode_Insert_Input;
  on_conflict?: InputMaybe<PostalCode_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPostalCodesArgs = {
  objects: Array<PostalCode_Insert_Input>;
  on_conflict?: InputMaybe<PostalCode_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertStreetArgs = {
  object: Street_Insert_Input;
  on_conflict?: InputMaybe<Street_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertStreetsArgs = {
  objects: Array<Street_Insert_Input>;
  on_conflict?: InputMaybe<Street_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVaccinationRequestArgs = {
  object: VaccinationRequests_Insert_Input;
  on_conflict?: InputMaybe<VaccinationRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVaccinationRequestsArgs = {
  objects: Array<VaccinationRequests_Insert_Input>;
  on_conflict?: InputMaybe<VaccinationRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Logged_ActionsArgs = {
  objects: Array<Audit_Logged_Actions_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Logged_Actions_OneArgs = {
  object: Audit_Logged_Actions_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Gift_Wish_SubscriberArgs = {
  objects: Array<Gift_Wish_Subscriber_Insert_Input>;
  on_conflict?: InputMaybe<Gift_Wish_Subscriber_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_Wish_Subscriber_OneArgs = {
  object: Gift_Wish_Subscriber_Insert_Input;
  on_conflict?: InputMaybe<Gift_Wish_Subscriber_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parliament_Election_PeriodsArgs = {
  objects: Array<Parliament_Election_Periods_Insert_Input>;
  on_conflict?: InputMaybe<Parliament_Election_Periods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parliament_Election_Periods_OneArgs = {
  object: Parliament_Election_Periods_Insert_Input;
  on_conflict?: InputMaybe<Parliament_Election_Periods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parliament_Question_Item_TypeArgs = {
  objects: Array<Parliament_Question_Item_Type_Insert_Input>;
  on_conflict?: InputMaybe<Parliament_Question_Item_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parliament_Question_Item_Type_OneArgs = {
  object: Parliament_Question_Item_Type_Insert_Input;
  on_conflict?: InputMaybe<Parliament_Question_Item_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parliament_Question_ItemsArgs = {
  objects: Array<Parliament_Question_Items_Insert_Input>;
  on_conflict?: InputMaybe<Parliament_Question_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parliament_Question_Items_OneArgs = {
  object: Parliament_Question_Items_Insert_Input;
  on_conflict?: InputMaybe<Parliament_Question_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parliament_QuestionsArgs = {
  objects: Array<Parliament_Questions_Insert_Input>;
  on_conflict?: InputMaybe<Parliament_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parliament_Questions_OneArgs = {
  object: Parliament_Questions_Insert_Input;
  on_conflict?: InputMaybe<Parliament_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parliament_SessionsArgs = {
  objects: Array<Parliament_Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Parliament_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Parliament_Sessions_OneArgs = {
  object: Parliament_Sessions_Insert_Input;
  on_conflict?: InputMaybe<Parliament_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VaccinationRequestStatusesArgs = {
  objects: Array<VaccinationRequestStatuses_Insert_Input>;
  on_conflict?: InputMaybe<VaccinationRequestStatuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VaccinationRequestStatuses_OneArgs = {
  object: VaccinationRequestStatuses_Insert_Input;
  on_conflict?: InputMaybe<VaccinationRequestStatuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VaccinationRequestorAddressArgs = {
  objects: Array<VaccinationRequestorAddress_Insert_Input>;
  on_conflict?: InputMaybe<VaccinationRequestorAddress_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VaccinationRequestorAddress_OneArgs = {
  object: VaccinationRequestorAddress_Insert_Input;
  on_conflict?: InputMaybe<VaccinationRequestorAddress_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Hdb_Foreign_KeyArgs = {
  objects: Array<Vak_Hdb_Foreign_Key_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Hdb_Foreign_Key_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Hdb_Foreign_Key_OneArgs = {
  object: Vak_Hdb_Foreign_Key_Insert_Input;
  on_conflict?: InputMaybe<Vak_Hdb_Foreign_Key_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Hdb_RelationshipArgs = {
  objects: Array<Vak_Hdb_Relationship_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Hdb_Relationship_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Hdb_Relationship_OneArgs = {
  object: Vak_Hdb_Relationship_Insert_Input;
  on_conflict?: InputMaybe<Vak_Hdb_Relationship_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Hdb_TableArgs = {
  objects: Array<Vak_Hdb_Table_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Hdb_Table_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Hdb_Table_OneArgs = {
  object: Vak_Hdb_Table_Insert_Input;
  on_conflict?: InputMaybe<Vak_Hdb_Table_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_KontrolaArgs = {
  objects: Array<Vak_Kontrola_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Kontrola_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Kontrola_OneArgs = {
  object: Vak_Kontrola_Insert_Input;
  on_conflict?: InputMaybe<Vak_Kontrola_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Kontrolny_BodArgs = {
  objects: Array<Vak_Kontrolny_Bod_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Kontrolny_Bod_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Kontrolny_Bod_OneArgs = {
  object: Vak_Kontrolny_Bod_Insert_Input;
  on_conflict?: InputMaybe<Vak_Kontrolny_Bod_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Obhliadka_OldArgs = {
  objects: Array<Vak_Obhliadka_Old_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Obhliadka_Old_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Obhliadka_Old_OneArgs = {
  object: Vak_Obhliadka_Old_Insert_Input;
  on_conflict?: InputMaybe<Vak_Obhliadka_Old_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_ObjektArgs = {
  objects: Array<Vak_Objekt_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Objekt_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Objekt_OneArgs = {
  object: Vak_Objekt_Insert_Input;
  on_conflict?: InputMaybe<Vak_Objekt_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Objekt_TypArgs = {
  objects: Array<Vak_Objekt_Typ_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Objekt_Typ_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Objekt_Typ_OneArgs = {
  object: Vak_Objekt_Typ_Insert_Input;
  on_conflict?: InputMaybe<Vak_Objekt_Typ_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_PageArgs = {
  objects: Array<Vak_Page_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Page_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Page_OneArgs = {
  object: Vak_Page_Insert_Input;
  on_conflict?: InputMaybe<Vak_Page_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_PracovnikArgs = {
  objects: Array<Vak_Pracovnik_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Pracovnik_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Pracovnik_OneArgs = {
  object: Vak_Pracovnik_Insert_Input;
  on_conflict?: InputMaybe<Vak_Pracovnik_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Predpis_KontrolaArgs = {
  objects: Array<Vak_Predpis_Kontrola_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Predpis_Kontrola_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Predpis_Kontrola_OneArgs = {
  object: Vak_Predpis_Kontrola_Insert_Input;
  on_conflict?: InputMaybe<Vak_Predpis_Kontrola_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Predpis_ObhliadkaArgs = {
  objects: Array<Vak_Predpis_Obhliadka_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Predpis_Obhliadka_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Predpis_Obhliadka_OneArgs = {
  object: Vak_Predpis_Obhliadka_Insert_Input;
  on_conflict?: InputMaybe<Vak_Predpis_Obhliadka_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_SmenaArgs = {
  objects: Array<Vak_Smena_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Smena_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Smena2pracovnikArgs = {
  objects: Array<Vak_Smena2pracovnik_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Smena2pracovnik_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Smena2pracovnik_OneArgs = {
  object: Vak_Smena2pracovnik_Insert_Input;
  on_conflict?: InputMaybe<Vak_Smena2pracovnik_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Smena_OneArgs = {
  object: Vak_Smena_Insert_Input;
  on_conflict?: InputMaybe<Vak_Smena_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Smena_TypArgs = {
  objects: Array<Vak_Smena_Typ_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Smena_Typ_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Smena_Typ_OneArgs = {
  object: Vak_Smena_Typ_Insert_Input;
  on_conflict?: InputMaybe<Vak_Smena_Typ_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Smena_Typ_VstupArgs = {
  objects: Array<Vak_Smena_Typ_Vstup_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Smena_Typ_Vstup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Smena_Typ_Vstup_OneArgs = {
  object: Vak_Smena_Typ_Vstup_Insert_Input;
  on_conflict?: InputMaybe<Vak_Smena_Typ_Vstup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_ThemeArgs = {
  objects: Array<Vak_Theme_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Theme_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Theme_OneArgs = {
  object: Vak_Theme_Insert_Input;
  on_conflict?: InputMaybe<Vak_Theme_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_UlohaArgs = {
  objects: Array<Vak_Uloha_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Uloha_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Uloha_OneArgs = {
  object: Vak_Uloha_Insert_Input;
  on_conflict?: InputMaybe<Vak_Uloha_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Uloha_TypArgs = {
  objects: Array<Vak_Uloha_Typ_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Uloha_Typ_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Uloha_Typ_OneArgs = {
  object: Vak_Uloha_Typ_Insert_Input;
  on_conflict?: InputMaybe<Vak_Uloha_Typ_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Uloha_Typ_VstupArgs = {
  objects: Array<Vak_Uloha_Typ_Vstup_Insert_Input>;
  on_conflict?: InputMaybe<Vak_Uloha_Typ_Vstup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vak_Uloha_Typ_Vstup_OneArgs = {
  object: Vak_Uloha_Typ_Vstup_Insert_Input;
  on_conflict?: InputMaybe<Vak_Uloha_Typ_Vstup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateCitiesArgs = {
  _set?: InputMaybe<City_Set_Input>;
  where: City_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCitiesManyArgs = {
  updates: Array<City_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateCityArgs = {
  _set?: InputMaybe<City_Set_Input>;
  pk_columns: City_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCountriesArgs = {
  _set?: InputMaybe<Country_Set_Input>;
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCountriesManyArgs = {
  updates: Array<Country_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateCountryArgs = {
  _set?: InputMaybe<Country_Set_Input>;
  pk_columns: Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateGiftEventArgs = {
  _set?: InputMaybe<GiftEvent_Set_Input>;
  pk_columns: GiftEvent_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateGiftEventsArgs = {
  _set?: InputMaybe<GiftEvent_Set_Input>;
  where: GiftEvent_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateGiftEventsManyArgs = {
  updates: Array<GiftEvent_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateGiftWishArgs = {
  _inc?: InputMaybe<GiftWish_Inc_Input>;
  _set?: InputMaybe<GiftWish_Set_Input>;
  pk_columns: GiftWish_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateGiftWishesArgs = {
  _inc?: InputMaybe<GiftWish_Inc_Input>;
  _set?: InputMaybe<GiftWish_Set_Input>;
  where: GiftWish_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateGiftWishesManyArgs = {
  updates: Array<GiftWish_Updates>;
};


/** mutation root */
export type Mutation_RootUpdatePostalCodeArgs = {
  _set?: InputMaybe<PostalCode_Set_Input>;
  pk_columns: PostalCode_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdatePostalCodesArgs = {
  _set?: InputMaybe<PostalCode_Set_Input>;
  where: PostalCode_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdatePostalCodesManyArgs = {
  updates: Array<PostalCode_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateStreetArgs = {
  _set?: InputMaybe<Street_Set_Input>;
  pk_columns: Street_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateStreetsArgs = {
  _set?: InputMaybe<Street_Set_Input>;
  where: Street_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateStreetsManyArgs = {
  updates: Array<Street_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateVaccinationRequestArgs = {
  _inc?: InputMaybe<VaccinationRequests_Inc_Input>;
  _set?: InputMaybe<VaccinationRequests_Set_Input>;
  pk_columns: VaccinationRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateVaccinationRequestsArgs = {
  _inc?: InputMaybe<VaccinationRequests_Inc_Input>;
  _set?: InputMaybe<VaccinationRequests_Set_Input>;
  where: VaccinationRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateVaccinationRequestsManyArgs = {
  updates: Array<VaccinationRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Logged_ActionsArgs = {
  _append?: InputMaybe<Audit_Logged_Actions_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Logged_Actions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Logged_Actions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Logged_Actions_Delete_Key_Input>;
  _inc?: InputMaybe<Audit_Logged_Actions_Inc_Input>;
  _prepend?: InputMaybe<Audit_Logged_Actions_Prepend_Input>;
  _set?: InputMaybe<Audit_Logged_Actions_Set_Input>;
  where: Audit_Logged_Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Logged_Actions_ManyArgs = {
  updates: Array<Audit_Logged_Actions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Wish_SubscriberArgs = {
  _set?: InputMaybe<Gift_Wish_Subscriber_Set_Input>;
  where: Gift_Wish_Subscriber_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Wish_Subscriber_By_PkArgs = {
  _set?: InputMaybe<Gift_Wish_Subscriber_Set_Input>;
  pk_columns: Gift_Wish_Subscriber_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Wish_Subscriber_ManyArgs = {
  updates: Array<Gift_Wish_Subscriber_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Election_PeriodsArgs = {
  _set?: InputMaybe<Parliament_Election_Periods_Set_Input>;
  where: Parliament_Election_Periods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Election_Periods_By_PkArgs = {
  _set?: InputMaybe<Parliament_Election_Periods_Set_Input>;
  pk_columns: Parliament_Election_Periods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Election_Periods_ManyArgs = {
  updates: Array<Parliament_Election_Periods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Question_Item_TypeArgs = {
  _set?: InputMaybe<Parliament_Question_Item_Type_Set_Input>;
  where: Parliament_Question_Item_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Question_Item_Type_By_PkArgs = {
  _set?: InputMaybe<Parliament_Question_Item_Type_Set_Input>;
  pk_columns: Parliament_Question_Item_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Question_Item_Type_ManyArgs = {
  updates: Array<Parliament_Question_Item_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Question_ItemsArgs = {
  _inc?: InputMaybe<Parliament_Question_Items_Inc_Input>;
  _set?: InputMaybe<Parliament_Question_Items_Set_Input>;
  where: Parliament_Question_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Question_Items_By_PkArgs = {
  _inc?: InputMaybe<Parliament_Question_Items_Inc_Input>;
  _set?: InputMaybe<Parliament_Question_Items_Set_Input>;
  pk_columns: Parliament_Question_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Question_Items_ManyArgs = {
  updates: Array<Parliament_Question_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_QuestionsArgs = {
  _set?: InputMaybe<Parliament_Questions_Set_Input>;
  where: Parliament_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Questions_By_PkArgs = {
  _set?: InputMaybe<Parliament_Questions_Set_Input>;
  pk_columns: Parliament_Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Questions_ManyArgs = {
  updates: Array<Parliament_Questions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_SessionsArgs = {
  _set?: InputMaybe<Parliament_Sessions_Set_Input>;
  where: Parliament_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Sessions_By_PkArgs = {
  _set?: InputMaybe<Parliament_Sessions_Set_Input>;
  pk_columns: Parliament_Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Parliament_Sessions_ManyArgs = {
  updates: Array<Parliament_Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VaccinationRequestStatusesArgs = {
  _set?: InputMaybe<VaccinationRequestStatuses_Set_Input>;
  where: VaccinationRequestStatuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_VaccinationRequestStatuses_By_PkArgs = {
  _set?: InputMaybe<VaccinationRequestStatuses_Set_Input>;
  pk_columns: VaccinationRequestStatuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VaccinationRequestStatuses_ManyArgs = {
  updates: Array<VaccinationRequestStatuses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VaccinationRequestorAddressArgs = {
  _set?: InputMaybe<VaccinationRequestorAddress_Set_Input>;
  where: VaccinationRequestorAddress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_VaccinationRequestorAddress_By_PkArgs = {
  _set?: InputMaybe<VaccinationRequestorAddress_Set_Input>;
  pk_columns: VaccinationRequestorAddress_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VaccinationRequestorAddress_ManyArgs = {
  updates: Array<VaccinationRequestorAddress_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Hdb_Foreign_KeyArgs = {
  _append?: InputMaybe<Vak_Hdb_Foreign_Key_Append_Input>;
  _delete_at_path?: InputMaybe<Vak_Hdb_Foreign_Key_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Vak_Hdb_Foreign_Key_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Vak_Hdb_Foreign_Key_Delete_Key_Input>;
  _prepend?: InputMaybe<Vak_Hdb_Foreign_Key_Prepend_Input>;
  _set?: InputMaybe<Vak_Hdb_Foreign_Key_Set_Input>;
  where: Vak_Hdb_Foreign_Key_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Hdb_Foreign_Key_By_PkArgs = {
  _append?: InputMaybe<Vak_Hdb_Foreign_Key_Append_Input>;
  _delete_at_path?: InputMaybe<Vak_Hdb_Foreign_Key_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Vak_Hdb_Foreign_Key_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Vak_Hdb_Foreign_Key_Delete_Key_Input>;
  _prepend?: InputMaybe<Vak_Hdb_Foreign_Key_Prepend_Input>;
  _set?: InputMaybe<Vak_Hdb_Foreign_Key_Set_Input>;
  pk_columns: Vak_Hdb_Foreign_Key_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Hdb_Foreign_Key_ManyArgs = {
  updates: Array<Vak_Hdb_Foreign_Key_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Hdb_RelationshipArgs = {
  _append?: InputMaybe<Vak_Hdb_Relationship_Append_Input>;
  _delete_at_path?: InputMaybe<Vak_Hdb_Relationship_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Vak_Hdb_Relationship_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Vak_Hdb_Relationship_Delete_Key_Input>;
  _prepend?: InputMaybe<Vak_Hdb_Relationship_Prepend_Input>;
  _set?: InputMaybe<Vak_Hdb_Relationship_Set_Input>;
  where: Vak_Hdb_Relationship_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Hdb_Relationship_By_PkArgs = {
  _append?: InputMaybe<Vak_Hdb_Relationship_Append_Input>;
  _delete_at_path?: InputMaybe<Vak_Hdb_Relationship_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Vak_Hdb_Relationship_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Vak_Hdb_Relationship_Delete_Key_Input>;
  _prepend?: InputMaybe<Vak_Hdb_Relationship_Prepend_Input>;
  _set?: InputMaybe<Vak_Hdb_Relationship_Set_Input>;
  pk_columns: Vak_Hdb_Relationship_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Hdb_Relationship_ManyArgs = {
  updates: Array<Vak_Hdb_Relationship_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Hdb_TableArgs = {
  _set?: InputMaybe<Vak_Hdb_Table_Set_Input>;
  where: Vak_Hdb_Table_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Hdb_Table_By_PkArgs = {
  _set?: InputMaybe<Vak_Hdb_Table_Set_Input>;
  pk_columns: Vak_Hdb_Table_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Hdb_Table_ManyArgs = {
  updates: Array<Vak_Hdb_Table_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_KontrolaArgs = {
  _inc?: InputMaybe<Vak_Kontrola_Inc_Input>;
  _set?: InputMaybe<Vak_Kontrola_Set_Input>;
  where: Vak_Kontrola_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Kontrola_By_PkArgs = {
  _inc?: InputMaybe<Vak_Kontrola_Inc_Input>;
  _set?: InputMaybe<Vak_Kontrola_Set_Input>;
  pk_columns: Vak_Kontrola_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Kontrola_ManyArgs = {
  updates: Array<Vak_Kontrola_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Kontrolny_BodArgs = {
  _inc?: InputMaybe<Vak_Kontrolny_Bod_Inc_Input>;
  _set?: InputMaybe<Vak_Kontrolny_Bod_Set_Input>;
  where: Vak_Kontrolny_Bod_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Kontrolny_Bod_By_PkArgs = {
  _inc?: InputMaybe<Vak_Kontrolny_Bod_Inc_Input>;
  _set?: InputMaybe<Vak_Kontrolny_Bod_Set_Input>;
  pk_columns: Vak_Kontrolny_Bod_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Kontrolny_Bod_ManyArgs = {
  updates: Array<Vak_Kontrolny_Bod_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Obhliadka_OldArgs = {
  _inc?: InputMaybe<Vak_Obhliadka_Old_Inc_Input>;
  _set?: InputMaybe<Vak_Obhliadka_Old_Set_Input>;
  where: Vak_Obhliadka_Old_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Obhliadka_Old_By_PkArgs = {
  _inc?: InputMaybe<Vak_Obhliadka_Old_Inc_Input>;
  _set?: InputMaybe<Vak_Obhliadka_Old_Set_Input>;
  pk_columns: Vak_Obhliadka_Old_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Obhliadka_Old_ManyArgs = {
  updates: Array<Vak_Obhliadka_Old_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_ObjektArgs = {
  _inc?: InputMaybe<Vak_Objekt_Inc_Input>;
  _set?: InputMaybe<Vak_Objekt_Set_Input>;
  where: Vak_Objekt_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Objekt_By_PkArgs = {
  _inc?: InputMaybe<Vak_Objekt_Inc_Input>;
  _set?: InputMaybe<Vak_Objekt_Set_Input>;
  pk_columns: Vak_Objekt_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Objekt_ManyArgs = {
  updates: Array<Vak_Objekt_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Objekt_TypArgs = {
  _inc?: InputMaybe<Vak_Objekt_Typ_Inc_Input>;
  _set?: InputMaybe<Vak_Objekt_Typ_Set_Input>;
  where: Vak_Objekt_Typ_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Objekt_Typ_By_PkArgs = {
  _inc?: InputMaybe<Vak_Objekt_Typ_Inc_Input>;
  _set?: InputMaybe<Vak_Objekt_Typ_Set_Input>;
  pk_columns: Vak_Objekt_Typ_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Objekt_Typ_ManyArgs = {
  updates: Array<Vak_Objekt_Typ_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_PageArgs = {
  _append?: InputMaybe<Vak_Page_Append_Input>;
  _delete_at_path?: InputMaybe<Vak_Page_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Vak_Page_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Vak_Page_Delete_Key_Input>;
  _inc?: InputMaybe<Vak_Page_Inc_Input>;
  _prepend?: InputMaybe<Vak_Page_Prepend_Input>;
  _set?: InputMaybe<Vak_Page_Set_Input>;
  where: Vak_Page_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Page_By_PkArgs = {
  _append?: InputMaybe<Vak_Page_Append_Input>;
  _delete_at_path?: InputMaybe<Vak_Page_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Vak_Page_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Vak_Page_Delete_Key_Input>;
  _inc?: InputMaybe<Vak_Page_Inc_Input>;
  _prepend?: InputMaybe<Vak_Page_Prepend_Input>;
  _set?: InputMaybe<Vak_Page_Set_Input>;
  pk_columns: Vak_Page_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Page_ManyArgs = {
  updates: Array<Vak_Page_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_PracovnikArgs = {
  _inc?: InputMaybe<Vak_Pracovnik_Inc_Input>;
  _set?: InputMaybe<Vak_Pracovnik_Set_Input>;
  where: Vak_Pracovnik_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Pracovnik_By_PkArgs = {
  _inc?: InputMaybe<Vak_Pracovnik_Inc_Input>;
  _set?: InputMaybe<Vak_Pracovnik_Set_Input>;
  pk_columns: Vak_Pracovnik_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Pracovnik_ManyArgs = {
  updates: Array<Vak_Pracovnik_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Predpis_KontrolaArgs = {
  _inc?: InputMaybe<Vak_Predpis_Kontrola_Inc_Input>;
  _set?: InputMaybe<Vak_Predpis_Kontrola_Set_Input>;
  where: Vak_Predpis_Kontrola_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Predpis_Kontrola_By_PkArgs = {
  _inc?: InputMaybe<Vak_Predpis_Kontrola_Inc_Input>;
  _set?: InputMaybe<Vak_Predpis_Kontrola_Set_Input>;
  pk_columns: Vak_Predpis_Kontrola_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Predpis_Kontrola_ManyArgs = {
  updates: Array<Vak_Predpis_Kontrola_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Predpis_ObhliadkaArgs = {
  _inc?: InputMaybe<Vak_Predpis_Obhliadka_Inc_Input>;
  _set?: InputMaybe<Vak_Predpis_Obhliadka_Set_Input>;
  where: Vak_Predpis_Obhliadka_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Predpis_Obhliadka_By_PkArgs = {
  _inc?: InputMaybe<Vak_Predpis_Obhliadka_Inc_Input>;
  _set?: InputMaybe<Vak_Predpis_Obhliadka_Set_Input>;
  pk_columns: Vak_Predpis_Obhliadka_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Predpis_Obhliadka_ManyArgs = {
  updates: Array<Vak_Predpis_Obhliadka_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_SmenaArgs = {
  _inc?: InputMaybe<Vak_Smena_Inc_Input>;
  _set?: InputMaybe<Vak_Smena_Set_Input>;
  where: Vak_Smena_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena2pracovnikArgs = {
  _inc?: InputMaybe<Vak_Smena2pracovnik_Inc_Input>;
  _set?: InputMaybe<Vak_Smena2pracovnik_Set_Input>;
  where: Vak_Smena2pracovnik_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena2pracovnik_By_PkArgs = {
  _inc?: InputMaybe<Vak_Smena2pracovnik_Inc_Input>;
  _set?: InputMaybe<Vak_Smena2pracovnik_Set_Input>;
  pk_columns: Vak_Smena2pracovnik_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena2pracovnik_ManyArgs = {
  updates: Array<Vak_Smena2pracovnik_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena_By_PkArgs = {
  _inc?: InputMaybe<Vak_Smena_Inc_Input>;
  _set?: InputMaybe<Vak_Smena_Set_Input>;
  pk_columns: Vak_Smena_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena_ManyArgs = {
  updates: Array<Vak_Smena_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena_TypArgs = {
  _inc?: InputMaybe<Vak_Smena_Typ_Inc_Input>;
  _set?: InputMaybe<Vak_Smena_Typ_Set_Input>;
  where: Vak_Smena_Typ_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena_Typ_By_PkArgs = {
  _inc?: InputMaybe<Vak_Smena_Typ_Inc_Input>;
  _set?: InputMaybe<Vak_Smena_Typ_Set_Input>;
  pk_columns: Vak_Smena_Typ_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena_Typ_ManyArgs = {
  updates: Array<Vak_Smena_Typ_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena_Typ_VstupArgs = {
  _set?: InputMaybe<Vak_Smena_Typ_Vstup_Set_Input>;
  where: Vak_Smena_Typ_Vstup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena_Typ_Vstup_By_PkArgs = {
  _set?: InputMaybe<Vak_Smena_Typ_Vstup_Set_Input>;
  pk_columns: Vak_Smena_Typ_Vstup_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Smena_Typ_Vstup_ManyArgs = {
  updates: Array<Vak_Smena_Typ_Vstup_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_ThemeArgs = {
  _append?: InputMaybe<Vak_Theme_Append_Input>;
  _delete_at_path?: InputMaybe<Vak_Theme_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Vak_Theme_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Vak_Theme_Delete_Key_Input>;
  _prepend?: InputMaybe<Vak_Theme_Prepend_Input>;
  _set?: InputMaybe<Vak_Theme_Set_Input>;
  where: Vak_Theme_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Theme_By_PkArgs = {
  _append?: InputMaybe<Vak_Theme_Append_Input>;
  _delete_at_path?: InputMaybe<Vak_Theme_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Vak_Theme_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Vak_Theme_Delete_Key_Input>;
  _prepend?: InputMaybe<Vak_Theme_Prepend_Input>;
  _set?: InputMaybe<Vak_Theme_Set_Input>;
  pk_columns: Vak_Theme_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Theme_ManyArgs = {
  updates: Array<Vak_Theme_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_UlohaArgs = {
  _inc?: InputMaybe<Vak_Uloha_Inc_Input>;
  _set?: InputMaybe<Vak_Uloha_Set_Input>;
  where: Vak_Uloha_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Uloha_By_PkArgs = {
  _inc?: InputMaybe<Vak_Uloha_Inc_Input>;
  _set?: InputMaybe<Vak_Uloha_Set_Input>;
  pk_columns: Vak_Uloha_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Uloha_ManyArgs = {
  updates: Array<Vak_Uloha_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Uloha_TypArgs = {
  _set?: InputMaybe<Vak_Uloha_Typ_Set_Input>;
  where: Vak_Uloha_Typ_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Uloha_Typ_By_PkArgs = {
  _set?: InputMaybe<Vak_Uloha_Typ_Set_Input>;
  pk_columns: Vak_Uloha_Typ_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Uloha_Typ_ManyArgs = {
  updates: Array<Vak_Uloha_Typ_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Uloha_Typ_VstupArgs = {
  _set?: InputMaybe<Vak_Uloha_Typ_Vstup_Set_Input>;
  where: Vak_Uloha_Typ_Vstup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Uloha_Typ_Vstup_By_PkArgs = {
  _set?: InputMaybe<Vak_Uloha_Typ_Vstup_Set_Input>;
  pk_columns: Vak_Uloha_Typ_Vstup_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vak_Uloha_Typ_Vstup_ManyArgs = {
  updates: Array<Vak_Uloha_Typ_Vstup_Updates>;
};


/** mutation root */
export type Mutation_RootVaccinationDeleteCentreArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootVaccinationDeleteCentresArgs = {
  where: VaccinationCentres_Bool_Exp;
};


/** mutation root */
export type Mutation_RootVaccinationInsertCentreArgs = {
  object: VaccinationCentres_Insert_Input;
  on_conflict?: InputMaybe<VaccinationCentres_On_Conflict>;
};


/** mutation root */
export type Mutation_RootVaccinationInsertCentresArgs = {
  objects: Array<VaccinationCentres_Insert_Input>;
  on_conflict?: InputMaybe<VaccinationCentres_On_Conflict>;
};


/** mutation root */
export type Mutation_RootVaccinationUpdateCentreArgs = {
  _set?: InputMaybe<VaccinationCentres_Set_Input>;
  pk_columns: VaccinationCentres_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootVaccinationUpdateCentresArgs = {
  _set?: InputMaybe<VaccinationCentres_Set_Input>;
  where: VaccinationCentres_Bool_Exp;
};


/** mutation root */
export type Mutation_RootVaccinationUpdateCentresManyArgs = {
  updates: Array<VaccinationCentres_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** Boolean expression to compare columns of type "oid". All fields are combined with logical 'AND'. */
export type Oid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['oid']>;
  _gt?: InputMaybe<Scalars['oid']>;
  _gte?: InputMaybe<Scalars['oid']>;
  _in?: InputMaybe<Array<Scalars['oid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['oid']>;
  _lte?: InputMaybe<Scalars['oid']>;
  _neq?: InputMaybe<Scalars['oid']>;
  _nin?: InputMaybe<Array<Scalars['oid']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "parliament.election_periods" */
export type Parliament_Election_Periods = {
  __typename?: 'parliament_election_periods';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "parliament.election_periods" */
export type Parliament_Election_Periods_Aggregate = {
  __typename?: 'parliament_election_periods_aggregate';
  aggregate?: Maybe<Parliament_Election_Periods_Aggregate_Fields>;
  nodes: Array<Parliament_Election_Periods>;
};

/** aggregate fields of "parliament.election_periods" */
export type Parliament_Election_Periods_Aggregate_Fields = {
  __typename?: 'parliament_election_periods_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Parliament_Election_Periods_Max_Fields>;
  min?: Maybe<Parliament_Election_Periods_Min_Fields>;
};


/** aggregate fields of "parliament.election_periods" */
export type Parliament_Election_Periods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Parliament_Election_Periods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "parliament.election_periods". All fields are combined with a logical 'AND'. */
export type Parliament_Election_Periods_Bool_Exp = {
  _and?: InputMaybe<Array<Parliament_Election_Periods_Bool_Exp>>;
  _not?: InputMaybe<Parliament_Election_Periods_Bool_Exp>;
  _or?: InputMaybe<Array<Parliament_Election_Periods_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "parliament.election_periods" */
export enum Parliament_Election_Periods_Constraint {
  /** unique or primary key constraint on columns "id" */
  ElectionPeriodPkey = 'election_period_pkey'
}

/** input type for inserting data into table "parliament.election_periods" */
export type Parliament_Election_Periods_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Parliament_Election_Periods_Max_Fields = {
  __typename?: 'parliament_election_periods_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Parliament_Election_Periods_Min_Fields = {
  __typename?: 'parliament_election_periods_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "parliament.election_periods" */
export type Parliament_Election_Periods_Mutation_Response = {
  __typename?: 'parliament_election_periods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Parliament_Election_Periods>;
};

/** on_conflict condition type for table "parliament.election_periods" */
export type Parliament_Election_Periods_On_Conflict = {
  constraint: Parliament_Election_Periods_Constraint;
  update_columns?: Array<Parliament_Election_Periods_Update_Column>;
  where?: InputMaybe<Parliament_Election_Periods_Bool_Exp>;
};

/** Ordering options when selecting data from "parliament.election_periods". */
export type Parliament_Election_Periods_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: parliament.election_periods */
export type Parliament_Election_Periods_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "parliament.election_periods" */
export enum Parliament_Election_Periods_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "parliament.election_periods" */
export type Parliament_Election_Periods_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "parliament_election_periods" */
export type Parliament_Election_Periods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Parliament_Election_Periods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Parliament_Election_Periods_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "parliament.election_periods" */
export enum Parliament_Election_Periods_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Parliament_Election_Periods_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Parliament_Election_Periods_Set_Input>;
  /** filter the rows which have to be updated */
  where: Parliament_Election_Periods_Bool_Exp;
};

/** columns and relationships of "parliament.question_item_type" */
export type Parliament_Question_Item_Type = {
  __typename?: 'parliament_question_item_type';
  name: Scalars['String'];
};

/** aggregated selection of "parliament.question_item_type" */
export type Parliament_Question_Item_Type_Aggregate = {
  __typename?: 'parliament_question_item_type_aggregate';
  aggregate?: Maybe<Parliament_Question_Item_Type_Aggregate_Fields>;
  nodes: Array<Parliament_Question_Item_Type>;
};

/** aggregate fields of "parliament.question_item_type" */
export type Parliament_Question_Item_Type_Aggregate_Fields = {
  __typename?: 'parliament_question_item_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Parliament_Question_Item_Type_Max_Fields>;
  min?: Maybe<Parliament_Question_Item_Type_Min_Fields>;
};


/** aggregate fields of "parliament.question_item_type" */
export type Parliament_Question_Item_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Parliament_Question_Item_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "parliament.question_item_type". All fields are combined with a logical 'AND'. */
export type Parliament_Question_Item_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Parliament_Question_Item_Type_Bool_Exp>>;
  _not?: InputMaybe<Parliament_Question_Item_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Parliament_Question_Item_Type_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "parliament.question_item_type" */
export enum Parliament_Question_Item_Type_Constraint {
  /** unique or primary key constraint on columns "name" */
  QuestionItemTypePkey = 'question_item_type_pkey'
}

export enum Parliament_Question_Item_Type_Enum {
  DoplnujucaOtazka = 'DOPLNUJUCA_OTAZKA',
  Odpoved = 'ODPOVED'
}

/** Boolean expression to compare columns of type "parliament_question_item_type_enum". All fields are combined with logical 'AND'. */
export type Parliament_Question_Item_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Parliament_Question_Item_Type_Enum>;
  _in?: InputMaybe<Array<Parliament_Question_Item_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Parliament_Question_Item_Type_Enum>;
  _nin?: InputMaybe<Array<Parliament_Question_Item_Type_Enum>>;
};

/** input type for inserting data into table "parliament.question_item_type" */
export type Parliament_Question_Item_Type_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Parliament_Question_Item_Type_Max_Fields = {
  __typename?: 'parliament_question_item_type_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Parliament_Question_Item_Type_Min_Fields = {
  __typename?: 'parliament_question_item_type_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "parliament.question_item_type" */
export type Parliament_Question_Item_Type_Mutation_Response = {
  __typename?: 'parliament_question_item_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Parliament_Question_Item_Type>;
};

/** input type for inserting object relation for remote table "parliament.question_item_type" */
export type Parliament_Question_Item_Type_Obj_Rel_Insert_Input = {
  data: Parliament_Question_Item_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Parliament_Question_Item_Type_On_Conflict>;
};

/** on_conflict condition type for table "parliament.question_item_type" */
export type Parliament_Question_Item_Type_On_Conflict = {
  constraint: Parliament_Question_Item_Type_Constraint;
  update_columns?: Array<Parliament_Question_Item_Type_Update_Column>;
  where?: InputMaybe<Parliament_Question_Item_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "parliament.question_item_type". */
export type Parliament_Question_Item_Type_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: parliament.question_item_type */
export type Parliament_Question_Item_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "parliament.question_item_type" */
export enum Parliament_Question_Item_Type_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "parliament.question_item_type" */
export type Parliament_Question_Item_Type_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "parliament_question_item_type" */
export type Parliament_Question_Item_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Parliament_Question_Item_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Parliament_Question_Item_Type_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "parliament.question_item_type" */
export enum Parliament_Question_Item_Type_Update_Column {
  /** column name */
  Name = 'name'
}

export type Parliament_Question_Item_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Parliament_Question_Item_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Parliament_Question_Item_Type_Bool_Exp;
};

/** columns and relationships of "parliament.question_items" */
export type Parliament_Question_Items = {
  __typename?: 'parliament_question_items';
  created_at: Scalars['timestamptz'];
  document_link?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  order: Scalars['Int'];
  prepis_link?: Maybe<Scalars['String']>;
  /** An object relationship */
  question_items_question_item_type?: Maybe<Parliament_Question_Item_Type>;
  recording_link?: Maybe<Scalars['String']>;
  type?: Maybe<Parliament_Question_Item_Type_Enum>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "parliament.question_items" */
export type Parliament_Question_Items_Aggregate = {
  __typename?: 'parliament_question_items_aggregate';
  aggregate?: Maybe<Parliament_Question_Items_Aggregate_Fields>;
  nodes: Array<Parliament_Question_Items>;
};

/** aggregate fields of "parliament.question_items" */
export type Parliament_Question_Items_Aggregate_Fields = {
  __typename?: 'parliament_question_items_aggregate_fields';
  avg?: Maybe<Parliament_Question_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Parliament_Question_Items_Max_Fields>;
  min?: Maybe<Parliament_Question_Items_Min_Fields>;
  stddev?: Maybe<Parliament_Question_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Parliament_Question_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Parliament_Question_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Parliament_Question_Items_Sum_Fields>;
  var_pop?: Maybe<Parliament_Question_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Parliament_Question_Items_Var_Samp_Fields>;
  variance?: Maybe<Parliament_Question_Items_Variance_Fields>;
};


/** aggregate fields of "parliament.question_items" */
export type Parliament_Question_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Parliament_Question_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Parliament_Question_Items_Avg_Fields = {
  __typename?: 'parliament_question_items_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "parliament.question_items". All fields are combined with a logical 'AND'. */
export type Parliament_Question_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Parliament_Question_Items_Bool_Exp>>;
  _not?: InputMaybe<Parliament_Question_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Parliament_Question_Items_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  document_link?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  prepis_link?: InputMaybe<String_Comparison_Exp>;
  question_items_question_item_type?: InputMaybe<Parliament_Question_Item_Type_Bool_Exp>;
  recording_link?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Parliament_Question_Item_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "parliament.question_items" */
export enum Parliament_Question_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionItemsPkey = 'question_items_pkey'
}

/** input type for incrementing numeric columns in table "parliament.question_items" */
export type Parliament_Question_Items_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "parliament.question_items" */
export type Parliament_Question_Items_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  document_link?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  prepis_link?: InputMaybe<Scalars['String']>;
  question_items_question_item_type?: InputMaybe<Parliament_Question_Item_Type_Obj_Rel_Insert_Input>;
  recording_link?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Parliament_Question_Item_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Parliament_Question_Items_Max_Fields = {
  __typename?: 'parliament_question_items_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  document_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  prepis_link?: Maybe<Scalars['String']>;
  recording_link?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Parliament_Question_Items_Min_Fields = {
  __typename?: 'parliament_question_items_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  document_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  prepis_link?: Maybe<Scalars['String']>;
  recording_link?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "parliament.question_items" */
export type Parliament_Question_Items_Mutation_Response = {
  __typename?: 'parliament_question_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Parliament_Question_Items>;
};

/** on_conflict condition type for table "parliament.question_items" */
export type Parliament_Question_Items_On_Conflict = {
  constraint: Parliament_Question_Items_Constraint;
  update_columns?: Array<Parliament_Question_Items_Update_Column>;
  where?: InputMaybe<Parliament_Question_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "parliament.question_items". */
export type Parliament_Question_Items_Order_By = {
  created_at?: InputMaybe<Order_By>;
  document_link?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prepis_link?: InputMaybe<Order_By>;
  question_items_question_item_type?: InputMaybe<Parliament_Question_Item_Type_Order_By>;
  recording_link?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: parliament.question_items */
export type Parliament_Question_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "parliament.question_items" */
export enum Parliament_Question_Items_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DocumentLink = 'document_link',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  PrepisLink = 'prepis_link',
  /** column name */
  RecordingLink = 'recording_link',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "parliament.question_items" */
export type Parliament_Question_Items_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  document_link?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  prepis_link?: InputMaybe<Scalars['String']>;
  recording_link?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Parliament_Question_Item_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Parliament_Question_Items_Stddev_Fields = {
  __typename?: 'parliament_question_items_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Parliament_Question_Items_Stddev_Pop_Fields = {
  __typename?: 'parliament_question_items_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Parliament_Question_Items_Stddev_Samp_Fields = {
  __typename?: 'parliament_question_items_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "parliament_question_items" */
export type Parliament_Question_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Parliament_Question_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Parliament_Question_Items_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  document_link?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  prepis_link?: InputMaybe<Scalars['String']>;
  recording_link?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Parliament_Question_Item_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Parliament_Question_Items_Sum_Fields = {
  __typename?: 'parliament_question_items_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** update columns of table "parliament.question_items" */
export enum Parliament_Question_Items_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DocumentLink = 'document_link',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  PrepisLink = 'prepis_link',
  /** column name */
  RecordingLink = 'recording_link',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Parliament_Question_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Parliament_Question_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Parliament_Question_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Parliament_Question_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Parliament_Question_Items_Var_Pop_Fields = {
  __typename?: 'parliament_question_items_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Parliament_Question_Items_Var_Samp_Fields = {
  __typename?: 'parliament_question_items_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Parliament_Question_Items_Variance_Fields = {
  __typename?: 'parliament_question_items_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "parliament.questions" */
export type Parliament_Questions = {
  __typename?: 'parliament_questions';
  adressee?: Maybe<Scalars['String']>;
  adressee_type?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  vote?: Maybe<Scalars['String']>;
};

/** aggregated selection of "parliament.questions" */
export type Parliament_Questions_Aggregate = {
  __typename?: 'parliament_questions_aggregate';
  aggregate?: Maybe<Parliament_Questions_Aggregate_Fields>;
  nodes: Array<Parliament_Questions>;
};

/** aggregate fields of "parliament.questions" */
export type Parliament_Questions_Aggregate_Fields = {
  __typename?: 'parliament_questions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Parliament_Questions_Max_Fields>;
  min?: Maybe<Parliament_Questions_Min_Fields>;
};


/** aggregate fields of "parliament.questions" */
export type Parliament_Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Parliament_Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "parliament.questions". All fields are combined with a logical 'AND'. */
export type Parliament_Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Parliament_Questions_Bool_Exp>>;
  _not?: InputMaybe<Parliament_Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Parliament_Questions_Bool_Exp>>;
  adressee?: InputMaybe<String_Comparison_Exp>;
  adressee_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vote?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "parliament.questions" */
export enum Parliament_Questions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionsPkey = 'questions_pkey'
}

/** input type for inserting data into table "parliament.questions" */
export type Parliament_Questions_Insert_Input = {
  adressee?: InputMaybe<Scalars['String']>;
  adressee_type?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vote?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Parliament_Questions_Max_Fields = {
  __typename?: 'parliament_questions_max_fields';
  adressee?: Maybe<Scalars['String']>;
  adressee_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vote?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Parliament_Questions_Min_Fields = {
  __typename?: 'parliament_questions_min_fields';
  adressee?: Maybe<Scalars['String']>;
  adressee_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vote?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "parliament.questions" */
export type Parliament_Questions_Mutation_Response = {
  __typename?: 'parliament_questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Parliament_Questions>;
};

/** on_conflict condition type for table "parliament.questions" */
export type Parliament_Questions_On_Conflict = {
  constraint: Parliament_Questions_Constraint;
  update_columns?: Array<Parliament_Questions_Update_Column>;
  where?: InputMaybe<Parliament_Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "parliament.questions". */
export type Parliament_Questions_Order_By = {
  adressee?: InputMaybe<Order_By>;
  adressee_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vote?: InputMaybe<Order_By>;
};

/** primary key columns input for table: parliament.questions */
export type Parliament_Questions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "parliament.questions" */
export enum Parliament_Questions_Select_Column {
  /** column name */
  Adressee = 'adressee',
  /** column name */
  AdresseeType = 'adressee_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vote = 'vote'
}

/** input type for updating data in table "parliament.questions" */
export type Parliament_Questions_Set_Input = {
  adressee?: InputMaybe<Scalars['String']>;
  adressee_type?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vote?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "parliament_questions" */
export type Parliament_Questions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Parliament_Questions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Parliament_Questions_Stream_Cursor_Value_Input = {
  adressee?: InputMaybe<Scalars['String']>;
  adressee_type?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vote?: InputMaybe<Scalars['String']>;
};

/** update columns of table "parliament.questions" */
export enum Parliament_Questions_Update_Column {
  /** column name */
  Adressee = 'adressee',
  /** column name */
  AdresseeType = 'adressee_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vote = 'vote'
}

export type Parliament_Questions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Parliament_Questions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Parliament_Questions_Bool_Exp;
};

/** columns and relationships of "parliament.sessions" */
export type Parliament_Sessions = {
  __typename?: 'parliament_sessions';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "parliament.sessions" */
export type Parliament_Sessions_Aggregate = {
  __typename?: 'parliament_sessions_aggregate';
  aggregate?: Maybe<Parliament_Sessions_Aggregate_Fields>;
  nodes: Array<Parliament_Sessions>;
};

/** aggregate fields of "parliament.sessions" */
export type Parliament_Sessions_Aggregate_Fields = {
  __typename?: 'parliament_sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Parliament_Sessions_Max_Fields>;
  min?: Maybe<Parliament_Sessions_Min_Fields>;
};


/** aggregate fields of "parliament.sessions" */
export type Parliament_Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Parliament_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "parliament.sessions". All fields are combined with a logical 'AND'. */
export type Parliament_Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Parliament_Sessions_Bool_Exp>>;
  _not?: InputMaybe<Parliament_Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Parliament_Sessions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "parliament.sessions" */
export enum Parliament_Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionPkey = 'session_pkey'
}

/** input type for inserting data into table "parliament.sessions" */
export type Parliament_Sessions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Parliament_Sessions_Max_Fields = {
  __typename?: 'parliament_sessions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Parliament_Sessions_Min_Fields = {
  __typename?: 'parliament_sessions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "parliament.sessions" */
export type Parliament_Sessions_Mutation_Response = {
  __typename?: 'parliament_sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Parliament_Sessions>;
};

/** on_conflict condition type for table "parliament.sessions" */
export type Parliament_Sessions_On_Conflict = {
  constraint: Parliament_Sessions_Constraint;
  update_columns?: Array<Parliament_Sessions_Update_Column>;
  where?: InputMaybe<Parliament_Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "parliament.sessions". */
export type Parliament_Sessions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: parliament.sessions */
export type Parliament_Sessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "parliament.sessions" */
export enum Parliament_Sessions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "parliament.sessions" */
export type Parliament_Sessions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "parliament_sessions" */
export type Parliament_Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Parliament_Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Parliament_Sessions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "parliament.sessions" */
export enum Parliament_Sessions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Parliament_Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Parliament_Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Parliament_Sessions_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "audit.logged_actions" */
  audit_logged_actions: Array<Audit_Logged_Actions>;
  /** fetch aggregated fields from the table: "audit.logged_actions" */
  audit_logged_actions_aggregate: Audit_Logged_Actions_Aggregate;
  /** fetch data from the table: "address.cities" */
  cities: Array<City>;
  /** fetch aggregated fields from the table: "address.cities" */
  citiesAggregate: City_Aggregate;
  /** fetch data from the table: "address.cities" using primary key columns */
  city?: Maybe<City>;
  /** fetch data from the table: "address.countries" */
  countries: Array<Country>;
  /** fetch aggregated fields from the table: "address.countries" */
  countriesAggregate: Country_Aggregate;
  /** fetch data from the table: "address.countries" using primary key columns */
  country?: Maybe<Country>;
  /** fetch data from the table: "gift.events" using primary key columns */
  giftEvent?: Maybe<GiftEvent>;
  /** fetch data from the table: "gift.events" */
  giftEvents: Array<GiftEvent>;
  /** fetch aggregated fields from the table: "gift.events" */
  giftEventsAggregate: GiftEvent_Aggregate;
  /** fetch data from the table: "gift.wish" using primary key columns */
  giftWishe?: Maybe<GiftWish>;
  /** fetch data from the table: "gift.wish" */
  giftWishes: Array<GiftWish>;
  /** fetch aggregated fields from the table: "gift.wish" */
  giftWishesAggregate: GiftWish_Aggregate;
  /** fetch data from the table: "gift.wish_subscriber" */
  gift_wish_subscriber: Array<Gift_Wish_Subscriber>;
  /** fetch aggregated fields from the table: "gift.wish_subscriber" */
  gift_wish_subscriber_aggregate: Gift_Wish_Subscriber_Aggregate;
  /** fetch data from the table: "gift.wish_subscriber" using primary key columns */
  gift_wish_subscriber_by_pk?: Maybe<Gift_Wish_Subscriber>;
  /** fetch data from the table: "parliament.election_periods" */
  parliament_election_periods: Array<Parliament_Election_Periods>;
  /** fetch aggregated fields from the table: "parliament.election_periods" */
  parliament_election_periods_aggregate: Parliament_Election_Periods_Aggregate;
  /** fetch data from the table: "parliament.election_periods" using primary key columns */
  parliament_election_periods_by_pk?: Maybe<Parliament_Election_Periods>;
  /** fetch data from the table: "parliament.question_item_type" */
  parliament_question_item_type: Array<Parliament_Question_Item_Type>;
  /** fetch aggregated fields from the table: "parliament.question_item_type" */
  parliament_question_item_type_aggregate: Parliament_Question_Item_Type_Aggregate;
  /** fetch data from the table: "parliament.question_item_type" using primary key columns */
  parliament_question_item_type_by_pk?: Maybe<Parliament_Question_Item_Type>;
  /** fetch data from the table: "parliament.question_items" */
  parliament_question_items: Array<Parliament_Question_Items>;
  /** fetch aggregated fields from the table: "parliament.question_items" */
  parliament_question_items_aggregate: Parliament_Question_Items_Aggregate;
  /** fetch data from the table: "parliament.question_items" using primary key columns */
  parliament_question_items_by_pk?: Maybe<Parliament_Question_Items>;
  /** fetch data from the table: "parliament.questions" */
  parliament_questions: Array<Parliament_Questions>;
  /** fetch aggregated fields from the table: "parliament.questions" */
  parliament_questions_aggregate: Parliament_Questions_Aggregate;
  /** fetch data from the table: "parliament.questions" using primary key columns */
  parliament_questions_by_pk?: Maybe<Parliament_Questions>;
  /** fetch data from the table: "parliament.sessions" */
  parliament_sessions: Array<Parliament_Sessions>;
  /** fetch aggregated fields from the table: "parliament.sessions" */
  parliament_sessions_aggregate: Parliament_Sessions_Aggregate;
  /** fetch data from the table: "parliament.sessions" using primary key columns */
  parliament_sessions_by_pk?: Maybe<Parliament_Sessions>;
  /** fetch data from the table: "address.postal_codes" using primary key columns */
  postalCode?: Maybe<PostalCode>;
  /** An array relationship */
  postalCodes: Array<PostalCode>;
  /** fetch aggregated fields from the table: "address.postal_codes" */
  postalCodesAggregate: PostalCode_Aggregate;
  /** fetch data from the table: "address.streets" using primary key columns */
  street?: Maybe<Street>;
  /** An array relationship */
  streets: Array<Street>;
  /** fetch aggregated fields from the table: "address.streets" */
  streetsAggregate: Street_Aggregate;
  /** fetch data from the table: "vaccination.centres" using primary key columns */
  vaccinationCentre?: Maybe<VaccinationCentres>;
  /** An array relationship */
  vaccinationCentres: Array<VaccinationCentres>;
  /** fetch aggregated fields from the table: "vaccination.centres" */
  vaccinationCentresAggregate: VaccinationCentres_Aggregate;
  /** fetch data from the table: "vaccination.requests" using primary key columns */
  vaccinationRequest?: Maybe<VaccinationRequests>;
  /** fetch data from the table: "vaccination.request_statuses" */
  vaccinationRequestStatuses: Array<VaccinationRequestStatuses>;
  vaccinationRequestStatuses_aggregate: VaccinationRequestStatuses_Aggregate;
  vaccinationRequestStatuses_by_pk?: Maybe<VaccinationRequestStatuses>;
  vaccinationRequestorAddress: Array<VaccinationRequestorAddress>;
  vaccinationRequestorAddress_aggregate: VaccinationRequestorAddress_Aggregate;
  vaccinationRequestorAddress_by_pk?: Maybe<VaccinationRequestorAddress>;
  /** An array relationship */
  vaccinationRequests: Array<VaccinationRequests>;
  /** fetch aggregated fields from the table: "vaccination.requests" */
  vaccinationRequestsAggregate: VaccinationRequests_Aggregate;
  /** fetch data from the table: "vak.hdb_foreign_key" */
  vak_hdb_foreign_key: Array<Vak_Hdb_Foreign_Key>;
  /** fetch aggregated fields from the table: "vak.hdb_foreign_key" */
  vak_hdb_foreign_key_aggregate: Vak_Hdb_Foreign_Key_Aggregate;
  /** fetch data from the table: "vak.hdb_foreign_key" using primary key columns */
  vak_hdb_foreign_key_by_pk?: Maybe<Vak_Hdb_Foreign_Key>;
  /** fetch data from the table: "vak.hdb_relationship" */
  vak_hdb_relationship: Array<Vak_Hdb_Relationship>;
  /** fetch aggregated fields from the table: "vak.hdb_relationship" */
  vak_hdb_relationship_aggregate: Vak_Hdb_Relationship_Aggregate;
  /** fetch data from the table: "vak.hdb_relationship" using primary key columns */
  vak_hdb_relationship_by_pk?: Maybe<Vak_Hdb_Relationship>;
  /** fetch data from the table: "vak.hdb_table" */
  vak_hdb_table: Array<Vak_Hdb_Table>;
  /** fetch aggregated fields from the table: "vak.hdb_table" */
  vak_hdb_table_aggregate: Vak_Hdb_Table_Aggregate;
  /** fetch data from the table: "vak.hdb_table" using primary key columns */
  vak_hdb_table_by_pk?: Maybe<Vak_Hdb_Table>;
  /** fetch data from the table: "vak.kontrola" */
  vak_kontrola: Array<Vak_Kontrola>;
  /** fetch aggregated fields from the table: "vak.kontrola" */
  vak_kontrola_aggregate: Vak_Kontrola_Aggregate;
  /** fetch data from the table: "vak.kontrola" using primary key columns */
  vak_kontrola_by_pk?: Maybe<Vak_Kontrola>;
  /** fetch data from the table: "vak.kontrola_sumar_nenaparovane" */
  vak_kontrola_sumar_nenaparovane: Array<Vak_Kontrola_Sumar_Nenaparovane>;
  /** fetch aggregated fields from the table: "vak.kontrola_sumar_nenaparovane" */
  vak_kontrola_sumar_nenaparovane_aggregate: Vak_Kontrola_Sumar_Nenaparovane_Aggregate;
  /** fetch data from the table: "vak.kontrolny_bod" */
  vak_kontrolny_bod: Array<Vak_Kontrolny_Bod>;
  /** fetch aggregated fields from the table: "vak.kontrolny_bod" */
  vak_kontrolny_bod_aggregate: Vak_Kontrolny_Bod_Aggregate;
  /** fetch data from the table: "vak.kontrolny_bod" using primary key columns */
  vak_kontrolny_bod_by_pk?: Maybe<Vak_Kontrolny_Bod>;
  /** fetch data from the table: "vak.obhliadka" */
  vak_obhliadka: Array<Vak_Obhliadka>;
  /** fetch aggregated fields from the table: "vak.obhliadka" */
  vak_obhliadka_aggregate: Vak_Obhliadka_Aggregate;
  /** fetch data from the table: "vak.obhliadka_old" */
  vak_obhliadka_old: Array<Vak_Obhliadka_Old>;
  /** fetch aggregated fields from the table: "vak.obhliadka_old" */
  vak_obhliadka_old_aggregate: Vak_Obhliadka_Old_Aggregate;
  /** fetch data from the table: "vak.obhliadka_old" using primary key columns */
  vak_obhliadka_old_by_pk?: Maybe<Vak_Obhliadka_Old>;
  /** fetch data from the table: "vak.obhliadka_sumar" */
  vak_obhliadka_sumar: Array<Vak_Obhliadka_Sumar>;
  /** fetch aggregated fields from the table: "vak.obhliadka_sumar" */
  vak_obhliadka_sumar_aggregate: Vak_Obhliadka_Sumar_Aggregate;
  /** fetch data from the table: "vak.obhliadka_sumar_mesiac" */
  vak_obhliadka_sumar_mesiac: Array<Vak_Obhliadka_Sumar_Mesiac>;
  /** fetch aggregated fields from the table: "vak.obhliadka_sumar_mesiac" */
  vak_obhliadka_sumar_mesiac_aggregate: Vak_Obhliadka_Sumar_Mesiac_Aggregate;
  /** fetch data from the table: "vak.objekt" */
  vak_objekt: Array<Vak_Objekt>;
  /** fetch aggregated fields from the table: "vak.objekt" */
  vak_objekt_aggregate: Vak_Objekt_Aggregate;
  /** fetch data from the table: "vak.objekt" using primary key columns */
  vak_objekt_by_pk?: Maybe<Vak_Objekt>;
  /** fetch data from the table: "vak.objekt_typ" */
  vak_objekt_typ: Array<Vak_Objekt_Typ>;
  /** fetch aggregated fields from the table: "vak.objekt_typ" */
  vak_objekt_typ_aggregate: Vak_Objekt_Typ_Aggregate;
  /** fetch data from the table: "vak.objekt_typ" using primary key columns */
  vak_objekt_typ_by_pk?: Maybe<Vak_Objekt_Typ>;
  /** fetch data from the table: "vak.page" */
  vak_page: Array<Vak_Page>;
  /** fetch aggregated fields from the table: "vak.page" */
  vak_page_aggregate: Vak_Page_Aggregate;
  /** fetch data from the table: "vak.page" using primary key columns */
  vak_page_by_pk?: Maybe<Vak_Page>;
  /** fetch data from the table: "vak.page_uri_json" */
  vak_page_uri_json: Array<Vak_Page_Uri_Json>;
  /** fetch aggregated fields from the table: "vak.page_uri_json" */
  vak_page_uri_json_aggregate: Vak_Page_Uri_Json_Aggregate;
  /** fetch data from the table: "vak.pracovnik" */
  vak_pracovnik: Array<Vak_Pracovnik>;
  /** fetch aggregated fields from the table: "vak.pracovnik" */
  vak_pracovnik_aggregate: Vak_Pracovnik_Aggregate;
  /** fetch data from the table: "vak.pracovnik" using primary key columns */
  vak_pracovnik_by_pk?: Maybe<Vak_Pracovnik>;
  /** fetch data from the table: "vak.pracovnik_obhliadka_sumar" */
  vak_pracovnik_obhliadka_sumar: Array<Vak_Pracovnik_Obhliadka_Sumar>;
  /** fetch aggregated fields from the table: "vak.pracovnik_obhliadka_sumar" */
  vak_pracovnik_obhliadka_sumar_aggregate: Vak_Pracovnik_Obhliadka_Sumar_Aggregate;
  /** fetch data from the table: "vak.predpis_kontrola" */
  vak_predpis_kontrola: Array<Vak_Predpis_Kontrola>;
  /** fetch aggregated fields from the table: "vak.predpis_kontrola" */
  vak_predpis_kontrola_aggregate: Vak_Predpis_Kontrola_Aggregate;
  /** fetch data from the table: "vak.predpis_kontrola" using primary key columns */
  vak_predpis_kontrola_by_pk?: Maybe<Vak_Predpis_Kontrola>;
  /** fetch data from the table: "vak.predpis_obhliadka" */
  vak_predpis_obhliadka: Array<Vak_Predpis_Obhliadka>;
  /** fetch aggregated fields from the table: "vak.predpis_obhliadka" */
  vak_predpis_obhliadka_aggregate: Vak_Predpis_Obhliadka_Aggregate;
  /** fetch data from the table: "vak.predpis_obhliadka" using primary key columns */
  vak_predpis_obhliadka_by_pk?: Maybe<Vak_Predpis_Obhliadka>;
  /** fetch data from the table: "vak.smena" */
  vak_smena: Array<Vak_Smena>;
  /** fetch data from the table: "vak.smena2pracovnik" */
  vak_smena2pracovnik: Array<Vak_Smena2pracovnik>;
  /** fetch aggregated fields from the table: "vak.smena2pracovnik" */
  vak_smena2pracovnik_aggregate: Vak_Smena2pracovnik_Aggregate;
  /** fetch data from the table: "vak.smena2pracovnik" using primary key columns */
  vak_smena2pracovnik_by_pk?: Maybe<Vak_Smena2pracovnik>;
  /** fetch aggregated fields from the table: "vak.smena" */
  vak_smena_aggregate: Vak_Smena_Aggregate;
  /** fetch data from the table: "vak.smena" using primary key columns */
  vak_smena_by_pk?: Maybe<Vak_Smena>;
  /** fetch data from the table: "vak.smena_typ" */
  vak_smena_typ: Array<Vak_Smena_Typ>;
  /** fetch aggregated fields from the table: "vak.smena_typ" */
  vak_smena_typ_aggregate: Vak_Smena_Typ_Aggregate;
  /** fetch data from the table: "vak.smena_typ" using primary key columns */
  vak_smena_typ_by_pk?: Maybe<Vak_Smena_Typ>;
  /** fetch data from the table: "vak.smena_typ_vstup" */
  vak_smena_typ_vstup: Array<Vak_Smena_Typ_Vstup>;
  /** fetch aggregated fields from the table: "vak.smena_typ_vstup" */
  vak_smena_typ_vstup_aggregate: Vak_Smena_Typ_Vstup_Aggregate;
  /** fetch data from the table: "vak.smena_typ_vstup" using primary key columns */
  vak_smena_typ_vstup_by_pk?: Maybe<Vak_Smena_Typ_Vstup>;
  /** fetch data from the table: "vak.theme" */
  vak_theme: Array<Vak_Theme>;
  /** fetch aggregated fields from the table: "vak.theme" */
  vak_theme_aggregate: Vak_Theme_Aggregate;
  /** fetch data from the table: "vak.theme" using primary key columns */
  vak_theme_by_pk?: Maybe<Vak_Theme>;
  /** fetch data from the table: "vak.uloha" */
  vak_uloha: Array<Vak_Uloha>;
  /** fetch aggregated fields from the table: "vak.uloha" */
  vak_uloha_aggregate: Vak_Uloha_Aggregate;
  /** fetch data from the table: "vak.uloha" using primary key columns */
  vak_uloha_by_pk?: Maybe<Vak_Uloha>;
  /** fetch data from the table: "vak.uloha_typ" */
  vak_uloha_typ: Array<Vak_Uloha_Typ>;
  /** fetch aggregated fields from the table: "vak.uloha_typ" */
  vak_uloha_typ_aggregate: Vak_Uloha_Typ_Aggregate;
  /** fetch data from the table: "vak.uloha_typ" using primary key columns */
  vak_uloha_typ_by_pk?: Maybe<Vak_Uloha_Typ>;
  /** fetch data from the table: "vak.uloha_typ_vstup" */
  vak_uloha_typ_vstup: Array<Vak_Uloha_Typ_Vstup>;
  /** fetch aggregated fields from the table: "vak.uloha_typ_vstup" */
  vak_uloha_typ_vstup_aggregate: Vak_Uloha_Typ_Vstup_Aggregate;
  /** fetch data from the table: "vak.uloha_typ_vstup" using primary key columns */
  vak_uloha_typ_vstup_by_pk?: Maybe<Vak_Uloha_Typ_Vstup>;
};


export type Query_RootAudit_Logged_ActionsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logged_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Audit_Logged_Actions_Order_By>>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};


export type Query_RootAudit_Logged_Actions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logged_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Audit_Logged_Actions_Order_By>>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};


export type Query_RootCitiesArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


export type Query_RootCitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


export type Query_RootCityArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCountriesArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountriesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountryArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGiftEventArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGiftEventsArgs = {
  distinct_on?: InputMaybe<Array<GiftEvent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GiftEvent_Order_By>>;
  where?: InputMaybe<GiftEvent_Bool_Exp>;
};


export type Query_RootGiftEventsAggregateArgs = {
  distinct_on?: InputMaybe<Array<GiftEvent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GiftEvent_Order_By>>;
  where?: InputMaybe<GiftEvent_Bool_Exp>;
};


export type Query_RootGiftWisheArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGiftWishesArgs = {
  distinct_on?: InputMaybe<Array<GiftWish_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GiftWish_Order_By>>;
  where?: InputMaybe<GiftWish_Bool_Exp>;
};


export type Query_RootGiftWishesAggregateArgs = {
  distinct_on?: InputMaybe<Array<GiftWish_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GiftWish_Order_By>>;
  where?: InputMaybe<GiftWish_Bool_Exp>;
};


export type Query_RootGift_Wish_SubscriberArgs = {
  distinct_on?: InputMaybe<Array<Gift_Wish_Subscriber_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gift_Wish_Subscriber_Order_By>>;
  where?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
};


export type Query_RootGift_Wish_Subscriber_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gift_Wish_Subscriber_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gift_Wish_Subscriber_Order_By>>;
  where?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
};


export type Query_RootGift_Wish_Subscriber_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootParliament_Election_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Election_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Election_Periods_Order_By>>;
  where?: InputMaybe<Parliament_Election_Periods_Bool_Exp>;
};


export type Query_RootParliament_Election_Periods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Election_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Election_Periods_Order_By>>;
  where?: InputMaybe<Parliament_Election_Periods_Bool_Exp>;
};


export type Query_RootParliament_Election_Periods_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootParliament_Question_Item_TypeArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Question_Item_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Question_Item_Type_Order_By>>;
  where?: InputMaybe<Parliament_Question_Item_Type_Bool_Exp>;
};


export type Query_RootParliament_Question_Item_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Question_Item_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Question_Item_Type_Order_By>>;
  where?: InputMaybe<Parliament_Question_Item_Type_Bool_Exp>;
};


export type Query_RootParliament_Question_Item_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootParliament_Question_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Question_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Question_Items_Order_By>>;
  where?: InputMaybe<Parliament_Question_Items_Bool_Exp>;
};


export type Query_RootParliament_Question_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Question_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Question_Items_Order_By>>;
  where?: InputMaybe<Parliament_Question_Items_Bool_Exp>;
};


export type Query_RootParliament_Question_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootParliament_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Questions_Order_By>>;
  where?: InputMaybe<Parliament_Questions_Bool_Exp>;
};


export type Query_RootParliament_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Questions_Order_By>>;
  where?: InputMaybe<Parliament_Questions_Bool_Exp>;
};


export type Query_RootParliament_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootParliament_SessionsArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Sessions_Order_By>>;
  where?: InputMaybe<Parliament_Sessions_Bool_Exp>;
};


export type Query_RootParliament_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Sessions_Order_By>>;
  where?: InputMaybe<Parliament_Sessions_Bool_Exp>;
};


export type Query_RootParliament_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPostalCodeArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPostalCodesArgs = {
  distinct_on?: InputMaybe<Array<PostalCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostalCode_Order_By>>;
  where?: InputMaybe<PostalCode_Bool_Exp>;
};


export type Query_RootPostalCodesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostalCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostalCode_Order_By>>;
  where?: InputMaybe<PostalCode_Bool_Exp>;
};


export type Query_RootStreetArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStreetsArgs = {
  distinct_on?: InputMaybe<Array<Street_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Street_Order_By>>;
  where?: InputMaybe<Street_Bool_Exp>;
};


export type Query_RootStreetsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Street_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Street_Order_By>>;
  where?: InputMaybe<Street_Bool_Exp>;
};


export type Query_RootVaccinationCentreArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVaccinationCentresArgs = {
  distinct_on?: InputMaybe<Array<VaccinationCentres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationCentres_Order_By>>;
  where?: InputMaybe<VaccinationCentres_Bool_Exp>;
};


export type Query_RootVaccinationCentresAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaccinationCentres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationCentres_Order_By>>;
  where?: InputMaybe<VaccinationCentres_Bool_Exp>;
};


export type Query_RootVaccinationRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVaccinationRequestStatusesArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequestStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequestStatuses_Order_By>>;
  where?: InputMaybe<VaccinationRequestStatuses_Bool_Exp>;
};


export type Query_RootVaccinationRequestStatuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequestStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequestStatuses_Order_By>>;
  where?: InputMaybe<VaccinationRequestStatuses_Bool_Exp>;
};


export type Query_RootVaccinationRequestStatuses_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootVaccinationRequestorAddressArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequestorAddress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequestorAddress_Order_By>>;
  where?: InputMaybe<VaccinationRequestorAddress_Bool_Exp>;
};


export type Query_RootVaccinationRequestorAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequestorAddress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequestorAddress_Order_By>>;
  where?: InputMaybe<VaccinationRequestorAddress_Bool_Exp>;
};


export type Query_RootVaccinationRequestorAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVaccinationRequestsArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequests_Order_By>>;
  where?: InputMaybe<VaccinationRequests_Bool_Exp>;
};


export type Query_RootVaccinationRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequests_Order_By>>;
  where?: InputMaybe<VaccinationRequests_Bool_Exp>;
};


export type Query_RootVak_Hdb_Foreign_KeyArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
};


export type Query_RootVak_Hdb_Foreign_Key_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
};


export type Query_RootVak_Hdb_Foreign_Key_By_PkArgs = {
  ref_table: Scalars['String'];
  table_name: Scalars['String'];
};


export type Query_RootVak_Hdb_RelationshipArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Relationship_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
};


export type Query_RootVak_Hdb_Relationship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Relationship_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
};


export type Query_RootVak_Hdb_Relationship_By_PkArgs = {
  rel_name: Scalars['String'];
  table_name: Scalars['String'];
};


export type Query_RootVak_Hdb_TableArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Table_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Table_Bool_Exp>;
};


export type Query_RootVak_Hdb_Table_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Table_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Table_Bool_Exp>;
};


export type Query_RootVak_Hdb_Table_By_PkArgs = {
  table_name: Scalars['String'];
};


export type Query_RootVak_KontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


export type Query_RootVak_Kontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


export type Query_RootVak_Kontrola_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_Kontrola_Sumar_NenaparovaneArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Sumar_Nenaparovane_Bool_Exp>;
};


export type Query_RootVak_Kontrola_Sumar_Nenaparovane_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Sumar_Nenaparovane_Bool_Exp>;
};


export type Query_RootVak_Kontrolny_BodArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrolny_Bod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrolny_Bod_Order_By>>;
  where?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
};


export type Query_RootVak_Kontrolny_Bod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrolny_Bod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrolny_Bod_Order_By>>;
  where?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
};


export type Query_RootVak_Kontrolny_Bod_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_ObhliadkaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Bool_Exp>;
};


export type Query_RootVak_Obhliadka_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Bool_Exp>;
};


export type Query_RootVak_Obhliadka_OldArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Old_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Old_Bool_Exp>;
};


export type Query_RootVak_Obhliadka_Old_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Old_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Old_Bool_Exp>;
};


export type Query_RootVak_Obhliadka_Old_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_Obhliadka_SumarArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
};


export type Query_RootVak_Obhliadka_Sumar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
};


export type Query_RootVak_Obhliadka_Sumar_MesiacArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Mesiac_Bool_Exp>;
};


export type Query_RootVak_Obhliadka_Sumar_Mesiac_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Mesiac_Bool_Exp>;
};


export type Query_RootVak_ObjektArgs = {
  distinct_on?: InputMaybe<Array<Vak_Objekt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Objekt_Order_By>>;
  where?: InputMaybe<Vak_Objekt_Bool_Exp>;
};


export type Query_RootVak_Objekt_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Objekt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Objekt_Order_By>>;
  where?: InputMaybe<Vak_Objekt_Bool_Exp>;
};


export type Query_RootVak_Objekt_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_Objekt_TypArgs = {
  distinct_on?: InputMaybe<Array<Vak_Objekt_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Objekt_Typ_Order_By>>;
  where?: InputMaybe<Vak_Objekt_Typ_Bool_Exp>;
};


export type Query_RootVak_Objekt_Typ_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Objekt_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Objekt_Typ_Order_By>>;
  where?: InputMaybe<Vak_Objekt_Typ_Bool_Exp>;
};


export type Query_RootVak_Objekt_Typ_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_PageArgs = {
  distinct_on?: InputMaybe<Array<Vak_Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Page_Order_By>>;
  where?: InputMaybe<Vak_Page_Bool_Exp>;
};


export type Query_RootVak_Page_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Page_Order_By>>;
  where?: InputMaybe<Vak_Page_Bool_Exp>;
};


export type Query_RootVak_Page_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootVak_Page_Uri_JsonArgs = {
  distinct_on?: InputMaybe<Array<Vak_Page_Uri_Json_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Page_Uri_Json_Order_By>>;
  where?: InputMaybe<Vak_Page_Uri_Json_Bool_Exp>;
};


export type Query_RootVak_Page_Uri_Json_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Page_Uri_Json_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Page_Uri_Json_Order_By>>;
  where?: InputMaybe<Vak_Page_Uri_Json_Bool_Exp>;
};


export type Query_RootVak_PracovnikArgs = {
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Pracovnik_Bool_Exp>;
};


export type Query_RootVak_Pracovnik_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Pracovnik_Bool_Exp>;
};


export type Query_RootVak_Pracovnik_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_Pracovnik_Obhliadka_SumarArgs = {
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
};


export type Query_RootVak_Pracovnik_Obhliadka_Sumar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
};


export type Query_RootVak_Predpis_KontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
};


export type Query_RootVak_Predpis_Kontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
};


export type Query_RootVak_Predpis_Kontrola_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_Predpis_ObhliadkaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Obhliadka_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Obhliadka_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
};


export type Query_RootVak_Predpis_Obhliadka_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Obhliadka_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Obhliadka_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
};


export type Query_RootVak_Predpis_Obhliadka_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_SmenaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Order_By>>;
  where?: InputMaybe<Vak_Smena_Bool_Exp>;
};


export type Query_RootVak_Smena2pracovnikArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena2pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena2pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
};


export type Query_RootVak_Smena2pracovnik_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena2pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena2pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
};


export type Query_RootVak_Smena2pracovnik_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_Smena_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Order_By>>;
  where?: InputMaybe<Vak_Smena_Bool_Exp>;
};


export type Query_RootVak_Smena_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_Smena_TypArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Typ_Order_By>>;
  where?: InputMaybe<Vak_Smena_Typ_Bool_Exp>;
};


export type Query_RootVak_Smena_Typ_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Typ_Order_By>>;
  where?: InputMaybe<Vak_Smena_Typ_Bool_Exp>;
};


export type Query_RootVak_Smena_Typ_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVak_Smena_Typ_VstupArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Order_By>>;
  where?: InputMaybe<Vak_Smena_Typ_Vstup_Bool_Exp>;
};


export type Query_RootVak_Smena_Typ_Vstup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Order_By>>;
  where?: InputMaybe<Vak_Smena_Typ_Vstup_Bool_Exp>;
};


export type Query_RootVak_Smena_Typ_Vstup_By_PkArgs = {
  smena_typ: Scalars['String'];
};


export type Query_RootVak_ThemeArgs = {
  distinct_on?: InputMaybe<Array<Vak_Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Theme_Order_By>>;
  where?: InputMaybe<Vak_Theme_Bool_Exp>;
};


export type Query_RootVak_Theme_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Theme_Order_By>>;
  where?: InputMaybe<Vak_Theme_Bool_Exp>;
};


export type Query_RootVak_Theme_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootVak_UlohaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};


export type Query_RootVak_Uloha_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};


export type Query_RootVak_Uloha_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVak_Uloha_TypArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
};


export type Query_RootVak_Uloha_Typ_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
};


export type Query_RootVak_Uloha_Typ_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVak_Uloha_Typ_VstupArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Typ_Vstup_Bool_Exp>;
};


export type Query_RootVak_Uloha_Typ_Vstup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Typ_Vstup_Bool_Exp>;
};


export type Query_RootVak_Uloha_Typ_Vstup_By_PkArgs = {
  uloha_typ: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "audit.logged_actions" */
  audit_logged_actions: Array<Audit_Logged_Actions>;
  /** fetch aggregated fields from the table: "audit.logged_actions" */
  audit_logged_actions_aggregate: Audit_Logged_Actions_Aggregate;
  /** fetch data from the table in a streaming manner: "audit.logged_actions" */
  audit_logged_actions_stream: Array<Audit_Logged_Actions>;
  /** fetch data from the table: "address.cities" */
  cities: Array<City>;
  /** fetch aggregated fields from the table: "address.cities" */
  citiesAggregate: City_Aggregate;
  /** fetch data from the table: "address.cities" using primary key columns */
  city?: Maybe<City>;
  /** fetch data from the table in a streaming manner: "address.cities" */
  cityStream: Array<City>;
  /** fetch data from the table: "address.countries" */
  countries: Array<Country>;
  /** fetch aggregated fields from the table: "address.countries" */
  countriesAggregate: Country_Aggregate;
  /** fetch data from the table in a streaming manner: "address.countries" */
  countriesStream: Array<Country>;
  /** fetch data from the table: "address.countries" using primary key columns */
  country?: Maybe<Country>;
  /** fetch data from the table: "gift.events" using primary key columns */
  giftEvent?: Maybe<GiftEvent>;
  /** fetch data from the table: "gift.events" */
  giftEvents: Array<GiftEvent>;
  /** fetch aggregated fields from the table: "gift.events" */
  giftEventsAggregate: GiftEvent_Aggregate;
  /** fetch data from the table in a streaming manner: "gift.events" */
  giftEventsStream: Array<GiftEvent>;
  /** fetch data from the table: "gift.wish" using primary key columns */
  giftWishe?: Maybe<GiftWish>;
  /** fetch data from the table: "gift.wish" */
  giftWishes: Array<GiftWish>;
  /** fetch aggregated fields from the table: "gift.wish" */
  giftWishesAggregate: GiftWish_Aggregate;
  /** fetch data from the table in a streaming manner: "gift.wish" */
  giftWishesStream: Array<GiftWish>;
  /** fetch data from the table: "gift.wish_subscriber" */
  gift_wish_subscriber: Array<Gift_Wish_Subscriber>;
  /** fetch aggregated fields from the table: "gift.wish_subscriber" */
  gift_wish_subscriber_aggregate: Gift_Wish_Subscriber_Aggregate;
  /** fetch data from the table: "gift.wish_subscriber" using primary key columns */
  gift_wish_subscriber_by_pk?: Maybe<Gift_Wish_Subscriber>;
  /** fetch data from the table in a streaming manner: "gift.wish_subscriber" */
  gift_wish_subscriber_stream: Array<Gift_Wish_Subscriber>;
  /** fetch data from the table: "parliament.election_periods" */
  parliament_election_periods: Array<Parliament_Election_Periods>;
  /** fetch aggregated fields from the table: "parliament.election_periods" */
  parliament_election_periods_aggregate: Parliament_Election_Periods_Aggregate;
  /** fetch data from the table: "parliament.election_periods" using primary key columns */
  parliament_election_periods_by_pk?: Maybe<Parliament_Election_Periods>;
  /** fetch data from the table in a streaming manner: "parliament.election_periods" */
  parliament_election_periods_stream: Array<Parliament_Election_Periods>;
  /** fetch data from the table: "parliament.question_item_type" */
  parliament_question_item_type: Array<Parliament_Question_Item_Type>;
  /** fetch aggregated fields from the table: "parliament.question_item_type" */
  parliament_question_item_type_aggregate: Parliament_Question_Item_Type_Aggregate;
  /** fetch data from the table: "parliament.question_item_type" using primary key columns */
  parliament_question_item_type_by_pk?: Maybe<Parliament_Question_Item_Type>;
  /** fetch data from the table in a streaming manner: "parliament.question_item_type" */
  parliament_question_item_type_stream: Array<Parliament_Question_Item_Type>;
  /** fetch data from the table: "parliament.question_items" */
  parliament_question_items: Array<Parliament_Question_Items>;
  /** fetch aggregated fields from the table: "parliament.question_items" */
  parliament_question_items_aggregate: Parliament_Question_Items_Aggregate;
  /** fetch data from the table: "parliament.question_items" using primary key columns */
  parliament_question_items_by_pk?: Maybe<Parliament_Question_Items>;
  /** fetch data from the table in a streaming manner: "parliament.question_items" */
  parliament_question_items_stream: Array<Parliament_Question_Items>;
  /** fetch data from the table: "parliament.questions" */
  parliament_questions: Array<Parliament_Questions>;
  /** fetch aggregated fields from the table: "parliament.questions" */
  parliament_questions_aggregate: Parliament_Questions_Aggregate;
  /** fetch data from the table: "parliament.questions" using primary key columns */
  parliament_questions_by_pk?: Maybe<Parliament_Questions>;
  /** fetch data from the table in a streaming manner: "parliament.questions" */
  parliament_questions_stream: Array<Parliament_Questions>;
  /** fetch data from the table: "parliament.sessions" */
  parliament_sessions: Array<Parliament_Sessions>;
  /** fetch aggregated fields from the table: "parliament.sessions" */
  parliament_sessions_aggregate: Parliament_Sessions_Aggregate;
  /** fetch data from the table: "parliament.sessions" using primary key columns */
  parliament_sessions_by_pk?: Maybe<Parliament_Sessions>;
  /** fetch data from the table in a streaming manner: "parliament.sessions" */
  parliament_sessions_stream: Array<Parliament_Sessions>;
  /** fetch data from the table: "address.postal_codes" using primary key columns */
  postalCode?: Maybe<PostalCode>;
  /** An array relationship */
  postalCodes: Array<PostalCode>;
  /** fetch aggregated fields from the table: "address.postal_codes" */
  postalCodesAggregate: PostalCode_Aggregate;
  /** fetch data from the table in a streaming manner: "address.postal_codes" */
  postalCodesStream: Array<PostalCode>;
  /** fetch data from the table: "address.streets" using primary key columns */
  street?: Maybe<Street>;
  /** An array relationship */
  streets: Array<Street>;
  /** fetch aggregated fields from the table: "address.streets" */
  streetsAggregate: Street_Aggregate;
  /** fetch data from the table in a streaming manner: "address.streets" */
  streetsStream: Array<Street>;
  /** fetch data from the table: "vaccination.centres" using primary key columns */
  vaccinationCentre?: Maybe<VaccinationCentres>;
  /** An array relationship */
  vaccinationCentres: Array<VaccinationCentres>;
  /** fetch aggregated fields from the table: "vaccination.centres" */
  vaccinationCentresAggregate: VaccinationCentres_Aggregate;
  /** fetch data from the table in a streaming manner: "vaccination.centres" */
  vaccinationCentresStream: Array<VaccinationCentres>;
  /** fetch data from the table: "vaccination.requests" using primary key columns */
  vaccinationRequest?: Maybe<VaccinationRequests>;
  /** fetch data from the table: "vaccination.request_statuses" */
  vaccinationRequestStatuses: Array<VaccinationRequestStatuses>;
  vaccinationRequestStatuses_aggregate: VaccinationRequestStatuses_Aggregate;
  vaccinationRequestStatuses_by_pk?: Maybe<VaccinationRequestStatuses>;
  /** fetch data from the table in a streaming manner: "vaccination.request_statuses" */
  vaccinationRequestStatuses_stream: Array<VaccinationRequestStatuses>;
  vaccinationRequestorAddress: Array<VaccinationRequestorAddress>;
  vaccinationRequestorAddress_aggregate: VaccinationRequestorAddress_Aggregate;
  vaccinationRequestorAddress_by_pk?: Maybe<VaccinationRequestorAddress>;
  /** fetch data from the table in a streaming manner: "vaccination.requestor_address" */
  vaccinationRequestorAddress_stream: Array<VaccinationRequestorAddress>;
  /** An array relationship */
  vaccinationRequests: Array<VaccinationRequests>;
  /** fetch aggregated fields from the table: "vaccination.requests" */
  vaccinationRequestsAggregate: VaccinationRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "vaccination.requests" */
  vaccinationRequestsStream: Array<VaccinationRequests>;
  /** fetch data from the table: "vak.hdb_foreign_key" */
  vak_hdb_foreign_key: Array<Vak_Hdb_Foreign_Key>;
  /** fetch aggregated fields from the table: "vak.hdb_foreign_key" */
  vak_hdb_foreign_key_aggregate: Vak_Hdb_Foreign_Key_Aggregate;
  /** fetch data from the table: "vak.hdb_foreign_key" using primary key columns */
  vak_hdb_foreign_key_by_pk?: Maybe<Vak_Hdb_Foreign_Key>;
  /** fetch data from the table in a streaming manner: "vak.hdb_foreign_key" */
  vak_hdb_foreign_key_stream: Array<Vak_Hdb_Foreign_Key>;
  /** fetch data from the table: "vak.hdb_relationship" */
  vak_hdb_relationship: Array<Vak_Hdb_Relationship>;
  /** fetch aggregated fields from the table: "vak.hdb_relationship" */
  vak_hdb_relationship_aggregate: Vak_Hdb_Relationship_Aggregate;
  /** fetch data from the table: "vak.hdb_relationship" using primary key columns */
  vak_hdb_relationship_by_pk?: Maybe<Vak_Hdb_Relationship>;
  /** fetch data from the table in a streaming manner: "vak.hdb_relationship" */
  vak_hdb_relationship_stream: Array<Vak_Hdb_Relationship>;
  /** fetch data from the table: "vak.hdb_table" */
  vak_hdb_table: Array<Vak_Hdb_Table>;
  /** fetch aggregated fields from the table: "vak.hdb_table" */
  vak_hdb_table_aggregate: Vak_Hdb_Table_Aggregate;
  /** fetch data from the table: "vak.hdb_table" using primary key columns */
  vak_hdb_table_by_pk?: Maybe<Vak_Hdb_Table>;
  /** fetch data from the table in a streaming manner: "vak.hdb_table" */
  vak_hdb_table_stream: Array<Vak_Hdb_Table>;
  /** fetch data from the table: "vak.kontrola" */
  vak_kontrola: Array<Vak_Kontrola>;
  /** fetch aggregated fields from the table: "vak.kontrola" */
  vak_kontrola_aggregate: Vak_Kontrola_Aggregate;
  /** fetch data from the table: "vak.kontrola" using primary key columns */
  vak_kontrola_by_pk?: Maybe<Vak_Kontrola>;
  /** fetch data from the table in a streaming manner: "vak.kontrola" */
  vak_kontrola_stream: Array<Vak_Kontrola>;
  /** fetch data from the table: "vak.kontrola_sumar_nenaparovane" */
  vak_kontrola_sumar_nenaparovane: Array<Vak_Kontrola_Sumar_Nenaparovane>;
  /** fetch aggregated fields from the table: "vak.kontrola_sumar_nenaparovane" */
  vak_kontrola_sumar_nenaparovane_aggregate: Vak_Kontrola_Sumar_Nenaparovane_Aggregate;
  /** fetch data from the table in a streaming manner: "vak.kontrola_sumar_nenaparovane" */
  vak_kontrola_sumar_nenaparovane_stream: Array<Vak_Kontrola_Sumar_Nenaparovane>;
  /** fetch data from the table: "vak.kontrolny_bod" */
  vak_kontrolny_bod: Array<Vak_Kontrolny_Bod>;
  /** fetch aggregated fields from the table: "vak.kontrolny_bod" */
  vak_kontrolny_bod_aggregate: Vak_Kontrolny_Bod_Aggregate;
  /** fetch data from the table: "vak.kontrolny_bod" using primary key columns */
  vak_kontrolny_bod_by_pk?: Maybe<Vak_Kontrolny_Bod>;
  /** fetch data from the table in a streaming manner: "vak.kontrolny_bod" */
  vak_kontrolny_bod_stream: Array<Vak_Kontrolny_Bod>;
  /** fetch data from the table: "vak.obhliadka" */
  vak_obhliadka: Array<Vak_Obhliadka>;
  /** fetch aggregated fields from the table: "vak.obhliadka" */
  vak_obhliadka_aggregate: Vak_Obhliadka_Aggregate;
  /** fetch data from the table: "vak.obhliadka_old" */
  vak_obhliadka_old: Array<Vak_Obhliadka_Old>;
  /** fetch aggregated fields from the table: "vak.obhliadka_old" */
  vak_obhliadka_old_aggregate: Vak_Obhliadka_Old_Aggregate;
  /** fetch data from the table: "vak.obhliadka_old" using primary key columns */
  vak_obhliadka_old_by_pk?: Maybe<Vak_Obhliadka_Old>;
  /** fetch data from the table in a streaming manner: "vak.obhliadka_old" */
  vak_obhliadka_old_stream: Array<Vak_Obhliadka_Old>;
  /** fetch data from the table in a streaming manner: "vak.obhliadka" */
  vak_obhliadka_stream: Array<Vak_Obhliadka>;
  /** fetch data from the table: "vak.obhliadka_sumar" */
  vak_obhliadka_sumar: Array<Vak_Obhliadka_Sumar>;
  /** fetch aggregated fields from the table: "vak.obhliadka_sumar" */
  vak_obhliadka_sumar_aggregate: Vak_Obhliadka_Sumar_Aggregate;
  /** fetch data from the table: "vak.obhliadka_sumar_mesiac" */
  vak_obhliadka_sumar_mesiac: Array<Vak_Obhliadka_Sumar_Mesiac>;
  /** fetch aggregated fields from the table: "vak.obhliadka_sumar_mesiac" */
  vak_obhliadka_sumar_mesiac_aggregate: Vak_Obhliadka_Sumar_Mesiac_Aggregate;
  /** fetch data from the table in a streaming manner: "vak.obhliadka_sumar_mesiac" */
  vak_obhliadka_sumar_mesiac_stream: Array<Vak_Obhliadka_Sumar_Mesiac>;
  /** fetch data from the table in a streaming manner: "vak.obhliadka_sumar" */
  vak_obhliadka_sumar_stream: Array<Vak_Obhliadka_Sumar>;
  /** fetch data from the table: "vak.objekt" */
  vak_objekt: Array<Vak_Objekt>;
  /** fetch aggregated fields from the table: "vak.objekt" */
  vak_objekt_aggregate: Vak_Objekt_Aggregate;
  /** fetch data from the table: "vak.objekt" using primary key columns */
  vak_objekt_by_pk?: Maybe<Vak_Objekt>;
  /** fetch data from the table in a streaming manner: "vak.objekt" */
  vak_objekt_stream: Array<Vak_Objekt>;
  /** fetch data from the table: "vak.objekt_typ" */
  vak_objekt_typ: Array<Vak_Objekt_Typ>;
  /** fetch aggregated fields from the table: "vak.objekt_typ" */
  vak_objekt_typ_aggregate: Vak_Objekt_Typ_Aggregate;
  /** fetch data from the table: "vak.objekt_typ" using primary key columns */
  vak_objekt_typ_by_pk?: Maybe<Vak_Objekt_Typ>;
  /** fetch data from the table in a streaming manner: "vak.objekt_typ" */
  vak_objekt_typ_stream: Array<Vak_Objekt_Typ>;
  /** fetch data from the table: "vak.page" */
  vak_page: Array<Vak_Page>;
  /** fetch aggregated fields from the table: "vak.page" */
  vak_page_aggregate: Vak_Page_Aggregate;
  /** fetch data from the table: "vak.page" using primary key columns */
  vak_page_by_pk?: Maybe<Vak_Page>;
  /** fetch data from the table in a streaming manner: "vak.page" */
  vak_page_stream: Array<Vak_Page>;
  /** fetch data from the table: "vak.page_uri_json" */
  vak_page_uri_json: Array<Vak_Page_Uri_Json>;
  /** fetch aggregated fields from the table: "vak.page_uri_json" */
  vak_page_uri_json_aggregate: Vak_Page_Uri_Json_Aggregate;
  /** fetch data from the table in a streaming manner: "vak.page_uri_json" */
  vak_page_uri_json_stream: Array<Vak_Page_Uri_Json>;
  /** fetch data from the table: "vak.pracovnik" */
  vak_pracovnik: Array<Vak_Pracovnik>;
  /** fetch aggregated fields from the table: "vak.pracovnik" */
  vak_pracovnik_aggregate: Vak_Pracovnik_Aggregate;
  /** fetch data from the table: "vak.pracovnik" using primary key columns */
  vak_pracovnik_by_pk?: Maybe<Vak_Pracovnik>;
  /** fetch data from the table: "vak.pracovnik_obhliadka_sumar" */
  vak_pracovnik_obhliadka_sumar: Array<Vak_Pracovnik_Obhliadka_Sumar>;
  /** fetch aggregated fields from the table: "vak.pracovnik_obhliadka_sumar" */
  vak_pracovnik_obhliadka_sumar_aggregate: Vak_Pracovnik_Obhliadka_Sumar_Aggregate;
  /** fetch data from the table in a streaming manner: "vak.pracovnik_obhliadka_sumar" */
  vak_pracovnik_obhliadka_sumar_stream: Array<Vak_Pracovnik_Obhliadka_Sumar>;
  /** fetch data from the table in a streaming manner: "vak.pracovnik" */
  vak_pracovnik_stream: Array<Vak_Pracovnik>;
  /** fetch data from the table: "vak.predpis_kontrola" */
  vak_predpis_kontrola: Array<Vak_Predpis_Kontrola>;
  /** fetch aggregated fields from the table: "vak.predpis_kontrola" */
  vak_predpis_kontrola_aggregate: Vak_Predpis_Kontrola_Aggregate;
  /** fetch data from the table: "vak.predpis_kontrola" using primary key columns */
  vak_predpis_kontrola_by_pk?: Maybe<Vak_Predpis_Kontrola>;
  /** fetch data from the table in a streaming manner: "vak.predpis_kontrola" */
  vak_predpis_kontrola_stream: Array<Vak_Predpis_Kontrola>;
  /** fetch data from the table: "vak.predpis_obhliadka" */
  vak_predpis_obhliadka: Array<Vak_Predpis_Obhliadka>;
  /** fetch aggregated fields from the table: "vak.predpis_obhliadka" */
  vak_predpis_obhliadka_aggregate: Vak_Predpis_Obhliadka_Aggregate;
  /** fetch data from the table: "vak.predpis_obhliadka" using primary key columns */
  vak_predpis_obhliadka_by_pk?: Maybe<Vak_Predpis_Obhliadka>;
  /** fetch data from the table in a streaming manner: "vak.predpis_obhliadka" */
  vak_predpis_obhliadka_stream: Array<Vak_Predpis_Obhliadka>;
  /** fetch data from the table: "vak.smena" */
  vak_smena: Array<Vak_Smena>;
  /** fetch data from the table: "vak.smena2pracovnik" */
  vak_smena2pracovnik: Array<Vak_Smena2pracovnik>;
  /** fetch aggregated fields from the table: "vak.smena2pracovnik" */
  vak_smena2pracovnik_aggregate: Vak_Smena2pracovnik_Aggregate;
  /** fetch data from the table: "vak.smena2pracovnik" using primary key columns */
  vak_smena2pracovnik_by_pk?: Maybe<Vak_Smena2pracovnik>;
  /** fetch data from the table in a streaming manner: "vak.smena2pracovnik" */
  vak_smena2pracovnik_stream: Array<Vak_Smena2pracovnik>;
  /** fetch aggregated fields from the table: "vak.smena" */
  vak_smena_aggregate: Vak_Smena_Aggregate;
  /** fetch data from the table: "vak.smena" using primary key columns */
  vak_smena_by_pk?: Maybe<Vak_Smena>;
  /** fetch data from the table in a streaming manner: "vak.smena" */
  vak_smena_stream: Array<Vak_Smena>;
  /** fetch data from the table: "vak.smena_typ" */
  vak_smena_typ: Array<Vak_Smena_Typ>;
  /** fetch aggregated fields from the table: "vak.smena_typ" */
  vak_smena_typ_aggregate: Vak_Smena_Typ_Aggregate;
  /** fetch data from the table: "vak.smena_typ" using primary key columns */
  vak_smena_typ_by_pk?: Maybe<Vak_Smena_Typ>;
  /** fetch data from the table in a streaming manner: "vak.smena_typ" */
  vak_smena_typ_stream: Array<Vak_Smena_Typ>;
  /** fetch data from the table: "vak.smena_typ_vstup" */
  vak_smena_typ_vstup: Array<Vak_Smena_Typ_Vstup>;
  /** fetch aggregated fields from the table: "vak.smena_typ_vstup" */
  vak_smena_typ_vstup_aggregate: Vak_Smena_Typ_Vstup_Aggregate;
  /** fetch data from the table: "vak.smena_typ_vstup" using primary key columns */
  vak_smena_typ_vstup_by_pk?: Maybe<Vak_Smena_Typ_Vstup>;
  /** fetch data from the table in a streaming manner: "vak.smena_typ_vstup" */
  vak_smena_typ_vstup_stream: Array<Vak_Smena_Typ_Vstup>;
  /** fetch data from the table: "vak.theme" */
  vak_theme: Array<Vak_Theme>;
  /** fetch aggregated fields from the table: "vak.theme" */
  vak_theme_aggregate: Vak_Theme_Aggregate;
  /** fetch data from the table: "vak.theme" using primary key columns */
  vak_theme_by_pk?: Maybe<Vak_Theme>;
  /** fetch data from the table in a streaming manner: "vak.theme" */
  vak_theme_stream: Array<Vak_Theme>;
  /** fetch data from the table: "vak.uloha" */
  vak_uloha: Array<Vak_Uloha>;
  /** fetch aggregated fields from the table: "vak.uloha" */
  vak_uloha_aggregate: Vak_Uloha_Aggregate;
  /** fetch data from the table: "vak.uloha" using primary key columns */
  vak_uloha_by_pk?: Maybe<Vak_Uloha>;
  /** fetch data from the table in a streaming manner: "vak.uloha" */
  vak_uloha_stream: Array<Vak_Uloha>;
  /** fetch data from the table: "vak.uloha_typ" */
  vak_uloha_typ: Array<Vak_Uloha_Typ>;
  /** fetch aggregated fields from the table: "vak.uloha_typ" */
  vak_uloha_typ_aggregate: Vak_Uloha_Typ_Aggregate;
  /** fetch data from the table: "vak.uloha_typ" using primary key columns */
  vak_uloha_typ_by_pk?: Maybe<Vak_Uloha_Typ>;
  /** fetch data from the table in a streaming manner: "vak.uloha_typ" */
  vak_uloha_typ_stream: Array<Vak_Uloha_Typ>;
  /** fetch data from the table: "vak.uloha_typ_vstup" */
  vak_uloha_typ_vstup: Array<Vak_Uloha_Typ_Vstup>;
  /** fetch aggregated fields from the table: "vak.uloha_typ_vstup" */
  vak_uloha_typ_vstup_aggregate: Vak_Uloha_Typ_Vstup_Aggregate;
  /** fetch data from the table: "vak.uloha_typ_vstup" using primary key columns */
  vak_uloha_typ_vstup_by_pk?: Maybe<Vak_Uloha_Typ_Vstup>;
  /** fetch data from the table in a streaming manner: "vak.uloha_typ_vstup" */
  vak_uloha_typ_vstup_stream: Array<Vak_Uloha_Typ_Vstup>;
};


export type Subscription_RootAudit_Logged_ActionsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logged_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Audit_Logged_Actions_Order_By>>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};


export type Subscription_RootAudit_Logged_Actions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logged_Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Audit_Logged_Actions_Order_By>>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};


export type Subscription_RootAudit_Logged_Actions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Audit_Logged_Actions_Stream_Cursor_Input>>;
  where?: InputMaybe<Audit_Logged_Actions_Bool_Exp>;
};


export type Subscription_RootCitiesArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


export type Subscription_RootCitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<City_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<City_Order_By>>;
  where?: InputMaybe<City_Bool_Exp>;
};


export type Subscription_RootCityArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCityStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<City_Stream_Cursor_Input>>;
  where?: InputMaybe<City_Bool_Exp>;
};


export type Subscription_RootCountriesArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountriesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountriesStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Country_Stream_Cursor_Input>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountryArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGiftEventArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGiftEventsArgs = {
  distinct_on?: InputMaybe<Array<GiftEvent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GiftEvent_Order_By>>;
  where?: InputMaybe<GiftEvent_Bool_Exp>;
};


export type Subscription_RootGiftEventsAggregateArgs = {
  distinct_on?: InputMaybe<Array<GiftEvent_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GiftEvent_Order_By>>;
  where?: InputMaybe<GiftEvent_Bool_Exp>;
};


export type Subscription_RootGiftEventsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GiftEvent_Stream_Cursor_Input>>;
  where?: InputMaybe<GiftEvent_Bool_Exp>;
};


export type Subscription_RootGiftWisheArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGiftWishesArgs = {
  distinct_on?: InputMaybe<Array<GiftWish_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GiftWish_Order_By>>;
  where?: InputMaybe<GiftWish_Bool_Exp>;
};


export type Subscription_RootGiftWishesAggregateArgs = {
  distinct_on?: InputMaybe<Array<GiftWish_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GiftWish_Order_By>>;
  where?: InputMaybe<GiftWish_Bool_Exp>;
};


export type Subscription_RootGiftWishesStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GiftWish_Stream_Cursor_Input>>;
  where?: InputMaybe<GiftWish_Bool_Exp>;
};


export type Subscription_RootGift_Wish_SubscriberArgs = {
  distinct_on?: InputMaybe<Array<Gift_Wish_Subscriber_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gift_Wish_Subscriber_Order_By>>;
  where?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
};


export type Subscription_RootGift_Wish_Subscriber_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gift_Wish_Subscriber_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gift_Wish_Subscriber_Order_By>>;
  where?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
};


export type Subscription_RootGift_Wish_Subscriber_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGift_Wish_Subscriber_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Gift_Wish_Subscriber_Stream_Cursor_Input>>;
  where?: InputMaybe<Gift_Wish_Subscriber_Bool_Exp>;
};


export type Subscription_RootParliament_Election_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Election_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Election_Periods_Order_By>>;
  where?: InputMaybe<Parliament_Election_Periods_Bool_Exp>;
};


export type Subscription_RootParliament_Election_Periods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Election_Periods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Election_Periods_Order_By>>;
  where?: InputMaybe<Parliament_Election_Periods_Bool_Exp>;
};


export type Subscription_RootParliament_Election_Periods_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootParliament_Election_Periods_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Parliament_Election_Periods_Stream_Cursor_Input>>;
  where?: InputMaybe<Parliament_Election_Periods_Bool_Exp>;
};


export type Subscription_RootParliament_Question_Item_TypeArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Question_Item_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Question_Item_Type_Order_By>>;
  where?: InputMaybe<Parliament_Question_Item_Type_Bool_Exp>;
};


export type Subscription_RootParliament_Question_Item_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Question_Item_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Question_Item_Type_Order_By>>;
  where?: InputMaybe<Parliament_Question_Item_Type_Bool_Exp>;
};


export type Subscription_RootParliament_Question_Item_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootParliament_Question_Item_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Parliament_Question_Item_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Parliament_Question_Item_Type_Bool_Exp>;
};


export type Subscription_RootParliament_Question_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Question_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Question_Items_Order_By>>;
  where?: InputMaybe<Parliament_Question_Items_Bool_Exp>;
};


export type Subscription_RootParliament_Question_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Question_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Question_Items_Order_By>>;
  where?: InputMaybe<Parliament_Question_Items_Bool_Exp>;
};


export type Subscription_RootParliament_Question_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootParliament_Question_Items_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Parliament_Question_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Parliament_Question_Items_Bool_Exp>;
};


export type Subscription_RootParliament_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Questions_Order_By>>;
  where?: InputMaybe<Parliament_Questions_Bool_Exp>;
};


export type Subscription_RootParliament_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Questions_Order_By>>;
  where?: InputMaybe<Parliament_Questions_Bool_Exp>;
};


export type Subscription_RootParliament_Questions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootParliament_Questions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Parliament_Questions_Stream_Cursor_Input>>;
  where?: InputMaybe<Parliament_Questions_Bool_Exp>;
};


export type Subscription_RootParliament_SessionsArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Sessions_Order_By>>;
  where?: InputMaybe<Parliament_Sessions_Bool_Exp>;
};


export type Subscription_RootParliament_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Parliament_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Parliament_Sessions_Order_By>>;
  where?: InputMaybe<Parliament_Sessions_Bool_Exp>;
};


export type Subscription_RootParliament_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootParliament_Sessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Parliament_Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Parliament_Sessions_Bool_Exp>;
};


export type Subscription_RootPostalCodeArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPostalCodesArgs = {
  distinct_on?: InputMaybe<Array<PostalCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostalCode_Order_By>>;
  where?: InputMaybe<PostalCode_Bool_Exp>;
};


export type Subscription_RootPostalCodesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostalCode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostalCode_Order_By>>;
  where?: InputMaybe<PostalCode_Bool_Exp>;
};


export type Subscription_RootPostalCodesStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<PostalCode_Stream_Cursor_Input>>;
  where?: InputMaybe<PostalCode_Bool_Exp>;
};


export type Subscription_RootStreetArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStreetsArgs = {
  distinct_on?: InputMaybe<Array<Street_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Street_Order_By>>;
  where?: InputMaybe<Street_Bool_Exp>;
};


export type Subscription_RootStreetsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Street_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Street_Order_By>>;
  where?: InputMaybe<Street_Bool_Exp>;
};


export type Subscription_RootStreetsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Street_Stream_Cursor_Input>>;
  where?: InputMaybe<Street_Bool_Exp>;
};


export type Subscription_RootVaccinationCentreArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVaccinationCentresArgs = {
  distinct_on?: InputMaybe<Array<VaccinationCentres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationCentres_Order_By>>;
  where?: InputMaybe<VaccinationCentres_Bool_Exp>;
};


export type Subscription_RootVaccinationCentresAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaccinationCentres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationCentres_Order_By>>;
  where?: InputMaybe<VaccinationCentres_Bool_Exp>;
};


export type Subscription_RootVaccinationCentresStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<VaccinationCentres_Stream_Cursor_Input>>;
  where?: InputMaybe<VaccinationCentres_Bool_Exp>;
};


export type Subscription_RootVaccinationRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVaccinationRequestStatusesArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequestStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequestStatuses_Order_By>>;
  where?: InputMaybe<VaccinationRequestStatuses_Bool_Exp>;
};


export type Subscription_RootVaccinationRequestStatuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequestStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequestStatuses_Order_By>>;
  where?: InputMaybe<VaccinationRequestStatuses_Bool_Exp>;
};


export type Subscription_RootVaccinationRequestStatuses_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootVaccinationRequestStatuses_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<VaccinationRequestStatuses_Stream_Cursor_Input>>;
  where?: InputMaybe<VaccinationRequestStatuses_Bool_Exp>;
};


export type Subscription_RootVaccinationRequestorAddressArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequestorAddress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequestorAddress_Order_By>>;
  where?: InputMaybe<VaccinationRequestorAddress_Bool_Exp>;
};


export type Subscription_RootVaccinationRequestorAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequestorAddress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequestorAddress_Order_By>>;
  where?: InputMaybe<VaccinationRequestorAddress_Bool_Exp>;
};


export type Subscription_RootVaccinationRequestorAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVaccinationRequestorAddress_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<VaccinationRequestorAddress_Stream_Cursor_Input>>;
  where?: InputMaybe<VaccinationRequestorAddress_Bool_Exp>;
};


export type Subscription_RootVaccinationRequestsArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequests_Order_By>>;
  where?: InputMaybe<VaccinationRequests_Bool_Exp>;
};


export type Subscription_RootVaccinationRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequests_Order_By>>;
  where?: InputMaybe<VaccinationRequests_Bool_Exp>;
};


export type Subscription_RootVaccinationRequestsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<VaccinationRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<VaccinationRequests_Bool_Exp>;
};


export type Subscription_RootVak_Hdb_Foreign_KeyArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
};


export type Subscription_RootVak_Hdb_Foreign_Key_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
};


export type Subscription_RootVak_Hdb_Foreign_Key_By_PkArgs = {
  ref_table: Scalars['String'];
  table_name: Scalars['String'];
};


export type Subscription_RootVak_Hdb_Foreign_Key_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Hdb_Foreign_Key_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
};


export type Subscription_RootVak_Hdb_RelationshipArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Relationship_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
};


export type Subscription_RootVak_Hdb_Relationship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Relationship_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
};


export type Subscription_RootVak_Hdb_Relationship_By_PkArgs = {
  rel_name: Scalars['String'];
  table_name: Scalars['String'];
};


export type Subscription_RootVak_Hdb_Relationship_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Hdb_Relationship_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
};


export type Subscription_RootVak_Hdb_TableArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Table_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Table_Bool_Exp>;
};


export type Subscription_RootVak_Hdb_Table_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Table_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Table_Bool_Exp>;
};


export type Subscription_RootVak_Hdb_Table_By_PkArgs = {
  table_name: Scalars['String'];
};


export type Subscription_RootVak_Hdb_Table_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Hdb_Table_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Hdb_Table_Bool_Exp>;
};


export type Subscription_RootVak_KontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


export type Subscription_RootVak_Kontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


export type Subscription_RootVak_Kontrola_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Kontrola_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Kontrola_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


export type Subscription_RootVak_Kontrola_Sumar_NenaparovaneArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Sumar_Nenaparovane_Bool_Exp>;
};


export type Subscription_RootVak_Kontrola_Sumar_Nenaparovane_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Sumar_Nenaparovane_Bool_Exp>;
};


export type Subscription_RootVak_Kontrola_Sumar_Nenaparovane_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Kontrola_Sumar_Nenaparovane_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Kontrola_Sumar_Nenaparovane_Bool_Exp>;
};


export type Subscription_RootVak_Kontrolny_BodArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrolny_Bod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrolny_Bod_Order_By>>;
  where?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
};


export type Subscription_RootVak_Kontrolny_Bod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrolny_Bod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrolny_Bod_Order_By>>;
  where?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
};


export type Subscription_RootVak_Kontrolny_Bod_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Kontrolny_Bod_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Kontrolny_Bod_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
};


export type Subscription_RootVak_ObhliadkaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_OldArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Old_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Old_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_Old_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Old_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Old_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Old_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_Old_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Obhliadka_Old_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Obhliadka_Old_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Obhliadka_Old_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Obhliadka_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Obhliadka_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_SumarArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_Sumar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_Sumar_MesiacArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Mesiac_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_Sumar_Mesiac_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Mesiac_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_Sumar_Mesiac_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Obhliadka_Sumar_Mesiac_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Mesiac_Bool_Exp>;
};


export type Subscription_RootVak_Obhliadka_Sumar_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Obhliadka_Sumar_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
};


export type Subscription_RootVak_ObjektArgs = {
  distinct_on?: InputMaybe<Array<Vak_Objekt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Objekt_Order_By>>;
  where?: InputMaybe<Vak_Objekt_Bool_Exp>;
};


export type Subscription_RootVak_Objekt_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Objekt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Objekt_Order_By>>;
  where?: InputMaybe<Vak_Objekt_Bool_Exp>;
};


export type Subscription_RootVak_Objekt_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Objekt_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Objekt_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Objekt_Bool_Exp>;
};


export type Subscription_RootVak_Objekt_TypArgs = {
  distinct_on?: InputMaybe<Array<Vak_Objekt_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Objekt_Typ_Order_By>>;
  where?: InputMaybe<Vak_Objekt_Typ_Bool_Exp>;
};


export type Subscription_RootVak_Objekt_Typ_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Objekt_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Objekt_Typ_Order_By>>;
  where?: InputMaybe<Vak_Objekt_Typ_Bool_Exp>;
};


export type Subscription_RootVak_Objekt_Typ_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Objekt_Typ_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Objekt_Typ_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Objekt_Typ_Bool_Exp>;
};


export type Subscription_RootVak_PageArgs = {
  distinct_on?: InputMaybe<Array<Vak_Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Page_Order_By>>;
  where?: InputMaybe<Vak_Page_Bool_Exp>;
};


export type Subscription_RootVak_Page_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Page_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Page_Order_By>>;
  where?: InputMaybe<Vak_Page_Bool_Exp>;
};


export type Subscription_RootVak_Page_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootVak_Page_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Page_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Page_Bool_Exp>;
};


export type Subscription_RootVak_Page_Uri_JsonArgs = {
  distinct_on?: InputMaybe<Array<Vak_Page_Uri_Json_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Page_Uri_Json_Order_By>>;
  where?: InputMaybe<Vak_Page_Uri_Json_Bool_Exp>;
};


export type Subscription_RootVak_Page_Uri_Json_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Page_Uri_Json_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Page_Uri_Json_Order_By>>;
  where?: InputMaybe<Vak_Page_Uri_Json_Bool_Exp>;
};


export type Subscription_RootVak_Page_Uri_Json_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Page_Uri_Json_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Page_Uri_Json_Bool_Exp>;
};


export type Subscription_RootVak_PracovnikArgs = {
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Pracovnik_Bool_Exp>;
};


export type Subscription_RootVak_Pracovnik_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Pracovnik_Bool_Exp>;
};


export type Subscription_RootVak_Pracovnik_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Pracovnik_Obhliadka_SumarArgs = {
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
};


export type Subscription_RootVak_Pracovnik_Obhliadka_Sumar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
};


export type Subscription_RootVak_Pracovnik_Obhliadka_Sumar_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
};


export type Subscription_RootVak_Pracovnik_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Pracovnik_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Pracovnik_Bool_Exp>;
};


export type Subscription_RootVak_Predpis_KontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
};


export type Subscription_RootVak_Predpis_Kontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
};


export type Subscription_RootVak_Predpis_Kontrola_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Predpis_Kontrola_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Predpis_Kontrola_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
};


export type Subscription_RootVak_Predpis_ObhliadkaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Obhliadka_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Obhliadka_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
};


export type Subscription_RootVak_Predpis_Obhliadka_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Obhliadka_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Obhliadka_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
};


export type Subscription_RootVak_Predpis_Obhliadka_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Predpis_Obhliadka_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Predpis_Obhliadka_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
};


export type Subscription_RootVak_SmenaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Order_By>>;
  where?: InputMaybe<Vak_Smena_Bool_Exp>;
};


export type Subscription_RootVak_Smena2pracovnikArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena2pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena2pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
};


export type Subscription_RootVak_Smena2pracovnik_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena2pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena2pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
};


export type Subscription_RootVak_Smena2pracovnik_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Smena2pracovnik_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Smena2pracovnik_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
};


export type Subscription_RootVak_Smena_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Order_By>>;
  where?: InputMaybe<Vak_Smena_Bool_Exp>;
};


export type Subscription_RootVak_Smena_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Smena_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Smena_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Smena_Bool_Exp>;
};


export type Subscription_RootVak_Smena_TypArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Typ_Order_By>>;
  where?: InputMaybe<Vak_Smena_Typ_Bool_Exp>;
};


export type Subscription_RootVak_Smena_Typ_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Typ_Order_By>>;
  where?: InputMaybe<Vak_Smena_Typ_Bool_Exp>;
};


export type Subscription_RootVak_Smena_Typ_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVak_Smena_Typ_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Smena_Typ_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Smena_Typ_Bool_Exp>;
};


export type Subscription_RootVak_Smena_Typ_VstupArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Order_By>>;
  where?: InputMaybe<Vak_Smena_Typ_Vstup_Bool_Exp>;
};


export type Subscription_RootVak_Smena_Typ_Vstup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Order_By>>;
  where?: InputMaybe<Vak_Smena_Typ_Vstup_Bool_Exp>;
};


export type Subscription_RootVak_Smena_Typ_Vstup_By_PkArgs = {
  smena_typ: Scalars['String'];
};


export type Subscription_RootVak_Smena_Typ_Vstup_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Smena_Typ_Vstup_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Smena_Typ_Vstup_Bool_Exp>;
};


export type Subscription_RootVak_ThemeArgs = {
  distinct_on?: InputMaybe<Array<Vak_Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Theme_Order_By>>;
  where?: InputMaybe<Vak_Theme_Bool_Exp>;
};


export type Subscription_RootVak_Theme_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Theme_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Theme_Order_By>>;
  where?: InputMaybe<Vak_Theme_Bool_Exp>;
};


export type Subscription_RootVak_Theme_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootVak_Theme_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Theme_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Theme_Bool_Exp>;
};


export type Subscription_RootVak_UlohaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};


export type Subscription_RootVak_Uloha_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};


export type Subscription_RootVak_Uloha_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVak_Uloha_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Uloha_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};


export type Subscription_RootVak_Uloha_TypArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
};


export type Subscription_RootVak_Uloha_Typ_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
};


export type Subscription_RootVak_Uloha_Typ_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVak_Uloha_Typ_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Uloha_Typ_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
};


export type Subscription_RootVak_Uloha_Typ_VstupArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Typ_Vstup_Bool_Exp>;
};


export type Subscription_RootVak_Uloha_Typ_Vstup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Typ_Vstup_Bool_Exp>;
};


export type Subscription_RootVak_Uloha_Typ_Vstup_By_PkArgs = {
  uloha_typ: Scalars['String'];
};


export type Subscription_RootVak_Uloha_Typ_Vstup_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vak_Uloha_Typ_Vstup_Stream_Cursor_Input>>;
  where?: InputMaybe<Vak_Uloha_Typ_Vstup_Bool_Exp>;
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['time']>;
  _gt?: InputMaybe<Scalars['time']>;
  _gte?: InputMaybe<Scalars['time']>;
  _in?: InputMaybe<Array<Scalars['time']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['time']>;
  _lte?: InputMaybe<Scalars['time']>;
  _neq?: InputMaybe<Scalars['time']>;
  _nin?: InputMaybe<Array<Scalars['time']>>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "vaccination.centres" */
export type VaccinationCentres = {
  __typename?: 'vaccinationCentres';
  /** An object relationship */
  city: City;
  city_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  vaccinationRequests: Array<VaccinationRequests>;
  /** An aggregate relationship */
  vaccinationRequests_aggregate: VaccinationRequests_Aggregate;
};


/** columns and relationships of "vaccination.centres" */
export type VaccinationCentresVaccinationRequestsArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequests_Order_By>>;
  where?: InputMaybe<VaccinationRequests_Bool_Exp>;
};


/** columns and relationships of "vaccination.centres" */
export type VaccinationCentresVaccinationRequests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VaccinationRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VaccinationRequests_Order_By>>;
  where?: InputMaybe<VaccinationRequests_Bool_Exp>;
};

/** aggregated selection of "vaccination.centres" */
export type VaccinationCentres_Aggregate = {
  __typename?: 'vaccinationCentres_aggregate';
  aggregate?: Maybe<VaccinationCentres_Aggregate_Fields>;
  nodes: Array<VaccinationCentres>;
};

export type VaccinationCentres_Aggregate_Bool_Exp = {
  count?: InputMaybe<VaccinationCentres_Aggregate_Bool_Exp_Count>;
};

export type VaccinationCentres_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<VaccinationCentres_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<VaccinationCentres_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vaccination.centres" */
export type VaccinationCentres_Aggregate_Fields = {
  __typename?: 'vaccinationCentres_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<VaccinationCentres_Max_Fields>;
  min?: Maybe<VaccinationCentres_Min_Fields>;
};


/** aggregate fields of "vaccination.centres" */
export type VaccinationCentres_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VaccinationCentres_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vaccination.centres" */
export type VaccinationCentres_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<VaccinationCentres_Max_Order_By>;
  min?: InputMaybe<VaccinationCentres_Min_Order_By>;
};

/** input type for inserting array relation for remote table "vaccination.centres" */
export type VaccinationCentres_Arr_Rel_Insert_Input = {
  data: Array<VaccinationCentres_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<VaccinationCentres_On_Conflict>;
};

/** Boolean expression to filter rows from the table "vaccination.centres". All fields are combined with a logical 'AND'. */
export type VaccinationCentres_Bool_Exp = {
  _and?: InputMaybe<Array<VaccinationCentres_Bool_Exp>>;
  _not?: InputMaybe<VaccinationCentres_Bool_Exp>;
  _or?: InputMaybe<Array<VaccinationCentres_Bool_Exp>>;
  city?: InputMaybe<City_Bool_Exp>;
  city_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vaccinationRequests?: InputMaybe<VaccinationRequests_Bool_Exp>;
  vaccinationRequests_aggregate?: InputMaybe<VaccinationRequests_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "vaccination.centres" */
export enum VaccinationCentres_Constraint {
  /** unique or primary key constraint on columns "id" */
  CentresPkey = 'centres_pkey'
}

/** input type for inserting data into table "vaccination.centres" */
export type VaccinationCentres_Insert_Input = {
  city?: InputMaybe<City_Obj_Rel_Insert_Input>;
  city_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vaccinationRequests?: InputMaybe<VaccinationRequests_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type VaccinationCentres_Max_Fields = {
  __typename?: 'vaccinationCentres_max_fields';
  city_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "vaccination.centres" */
export type VaccinationCentres_Max_Order_By = {
  city_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type VaccinationCentres_Min_Fields = {
  __typename?: 'vaccinationCentres_min_fields';
  city_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "vaccination.centres" */
export type VaccinationCentres_Min_Order_By = {
  city_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vaccination.centres" */
export type VaccinationCentres_Mutation_Response = {
  __typename?: 'vaccinationCentres_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VaccinationCentres>;
};

/** input type for inserting object relation for remote table "vaccination.centres" */
export type VaccinationCentres_Obj_Rel_Insert_Input = {
  data: VaccinationCentres_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<VaccinationCentres_On_Conflict>;
};

/** on_conflict condition type for table "vaccination.centres" */
export type VaccinationCentres_On_Conflict = {
  constraint: VaccinationCentres_Constraint;
  update_columns?: Array<VaccinationCentres_Update_Column>;
  where?: InputMaybe<VaccinationCentres_Bool_Exp>;
};

/** Ordering options when selecting data from "vaccination.centres". */
export type VaccinationCentres_Order_By = {
  city?: InputMaybe<City_Order_By>;
  city_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vaccinationRequests_aggregate?: InputMaybe<VaccinationRequests_Aggregate_Order_By>;
};

/** primary key columns input for table: vaccination.centres */
export type VaccinationCentres_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "vaccination.centres" */
export enum VaccinationCentres_Select_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "vaccination.centres" */
export type VaccinationCentres_Set_Input = {
  city_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "vaccinationCentres" */
export type VaccinationCentres_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VaccinationCentres_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VaccinationCentres_Stream_Cursor_Value_Input = {
  city_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "vaccination.centres" */
export enum VaccinationCentres_Update_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type VaccinationCentres_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VaccinationCentres_Set_Input>;
  /** filter the rows which have to be updated */
  where: VaccinationCentres_Bool_Exp;
};

/** columns and relationships of "vaccination.request_statuses" */
export type VaccinationRequestStatuses = {
  __typename?: 'vaccinationRequestStatuses';
  code: Scalars['String'];
};

/** aggregated selection of "vaccination.request_statuses" */
export type VaccinationRequestStatuses_Aggregate = {
  __typename?: 'vaccinationRequestStatuses_aggregate';
  aggregate?: Maybe<VaccinationRequestStatuses_Aggregate_Fields>;
  nodes: Array<VaccinationRequestStatuses>;
};

/** aggregate fields of "vaccination.request_statuses" */
export type VaccinationRequestStatuses_Aggregate_Fields = {
  __typename?: 'vaccinationRequestStatuses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<VaccinationRequestStatuses_Max_Fields>;
  min?: Maybe<VaccinationRequestStatuses_Min_Fields>;
};


/** aggregate fields of "vaccination.request_statuses" */
export type VaccinationRequestStatuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VaccinationRequestStatuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "vaccination.request_statuses". All fields are combined with a logical 'AND'. */
export type VaccinationRequestStatuses_Bool_Exp = {
  _and?: InputMaybe<Array<VaccinationRequestStatuses_Bool_Exp>>;
  _not?: InputMaybe<VaccinationRequestStatuses_Bool_Exp>;
  _or?: InputMaybe<Array<VaccinationRequestStatuses_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "vaccination.request_statuses" */
export enum VaccinationRequestStatuses_Constraint {
  /** unique or primary key constraint on columns "code" */
  RequestStatusesPkey = 'request_statuses_pkey'
}

export enum VaccinationRequestStatuses_Enum {
  Approved = 'APPROVED',
  New = 'NEW',
  Rejected = 'REJECTED'
}

/** Boolean expression to compare columns of type "vaccinationRequestStatuses_enum". All fields are combined with logical 'AND'. */
export type VaccinationRequestStatuses_Enum_Comparison_Exp = {
  _eq?: InputMaybe<VaccinationRequestStatuses_Enum>;
  _in?: InputMaybe<Array<VaccinationRequestStatuses_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<VaccinationRequestStatuses_Enum>;
  _nin?: InputMaybe<Array<VaccinationRequestStatuses_Enum>>;
};

/** input type for inserting data into table "vaccination.request_statuses" */
export type VaccinationRequestStatuses_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type VaccinationRequestStatuses_Max_Fields = {
  __typename?: 'vaccinationRequestStatuses_max_fields';
  code?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type VaccinationRequestStatuses_Min_Fields = {
  __typename?: 'vaccinationRequestStatuses_min_fields';
  code?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "vaccination.request_statuses" */
export type VaccinationRequestStatuses_Mutation_Response = {
  __typename?: 'vaccinationRequestStatuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VaccinationRequestStatuses>;
};

/** input type for inserting object relation for remote table "vaccination.request_statuses" */
export type VaccinationRequestStatuses_Obj_Rel_Insert_Input = {
  data: VaccinationRequestStatuses_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<VaccinationRequestStatuses_On_Conflict>;
};

/** on_conflict condition type for table "vaccination.request_statuses" */
export type VaccinationRequestStatuses_On_Conflict = {
  constraint: VaccinationRequestStatuses_Constraint;
  update_columns?: Array<VaccinationRequestStatuses_Update_Column>;
  where?: InputMaybe<VaccinationRequestStatuses_Bool_Exp>;
};

/** Ordering options when selecting data from "vaccination.request_statuses". */
export type VaccinationRequestStatuses_Order_By = {
  code?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vaccination.request_statuses */
export type VaccinationRequestStatuses_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "vaccination.request_statuses" */
export enum VaccinationRequestStatuses_Select_Column {
  /** column name */
  Code = 'code'
}

/** input type for updating data in table "vaccination.request_statuses" */
export type VaccinationRequestStatuses_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "vaccinationRequestStatuses" */
export type VaccinationRequestStatuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VaccinationRequestStatuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VaccinationRequestStatuses_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
};

/** update columns of table "vaccination.request_statuses" */
export enum VaccinationRequestStatuses_Update_Column {
  /** column name */
  Code = 'code'
}

export type VaccinationRequestStatuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VaccinationRequestStatuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: VaccinationRequestStatuses_Bool_Exp;
};

/** columns and relationships of "vaccination.requestor_address" */
export type VaccinationRequestorAddress = {
  __typename?: 'vaccinationRequestorAddress';
  id: Scalars['uuid'];
  line1: Scalars['String'];
  line2: Scalars['String'];
  street_id: Scalars['uuid'];
};

/** aggregated selection of "vaccination.requestor_address" */
export type VaccinationRequestorAddress_Aggregate = {
  __typename?: 'vaccinationRequestorAddress_aggregate';
  aggregate?: Maybe<VaccinationRequestorAddress_Aggregate_Fields>;
  nodes: Array<VaccinationRequestorAddress>;
};

/** aggregate fields of "vaccination.requestor_address" */
export type VaccinationRequestorAddress_Aggregate_Fields = {
  __typename?: 'vaccinationRequestorAddress_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<VaccinationRequestorAddress_Max_Fields>;
  min?: Maybe<VaccinationRequestorAddress_Min_Fields>;
};


/** aggregate fields of "vaccination.requestor_address" */
export type VaccinationRequestorAddress_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VaccinationRequestorAddress_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "vaccination.requestor_address". All fields are combined with a logical 'AND'. */
export type VaccinationRequestorAddress_Bool_Exp = {
  _and?: InputMaybe<Array<VaccinationRequestorAddress_Bool_Exp>>;
  _not?: InputMaybe<VaccinationRequestorAddress_Bool_Exp>;
  _or?: InputMaybe<Array<VaccinationRequestorAddress_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  line1?: InputMaybe<String_Comparison_Exp>;
  line2?: InputMaybe<String_Comparison_Exp>;
  street_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "vaccination.requestor_address" */
export enum VaccinationRequestorAddress_Constraint {
  /** unique or primary key constraint on columns "id" */
  RequestorAddressPkey = 'requestor_address_pkey'
}

/** input type for inserting data into table "vaccination.requestor_address" */
export type VaccinationRequestorAddress_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  street_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type VaccinationRequestorAddress_Max_Fields = {
  __typename?: 'vaccinationRequestorAddress_max_fields';
  id?: Maybe<Scalars['uuid']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  street_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type VaccinationRequestorAddress_Min_Fields = {
  __typename?: 'vaccinationRequestorAddress_min_fields';
  id?: Maybe<Scalars['uuid']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  street_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "vaccination.requestor_address" */
export type VaccinationRequestorAddress_Mutation_Response = {
  __typename?: 'vaccinationRequestorAddress_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VaccinationRequestorAddress>;
};

/** on_conflict condition type for table "vaccination.requestor_address" */
export type VaccinationRequestorAddress_On_Conflict = {
  constraint: VaccinationRequestorAddress_Constraint;
  update_columns?: Array<VaccinationRequestorAddress_Update_Column>;
  where?: InputMaybe<VaccinationRequestorAddress_Bool_Exp>;
};

/** Ordering options when selecting data from "vaccination.requestor_address". */
export type VaccinationRequestorAddress_Order_By = {
  id?: InputMaybe<Order_By>;
  line1?: InputMaybe<Order_By>;
  line2?: InputMaybe<Order_By>;
  street_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vaccination.requestor_address */
export type VaccinationRequestorAddress_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "vaccination.requestor_address" */
export enum VaccinationRequestorAddress_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Line1 = 'line1',
  /** column name */
  Line2 = 'line2',
  /** column name */
  StreetId = 'street_id'
}

/** input type for updating data in table "vaccination.requestor_address" */
export type VaccinationRequestorAddress_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  street_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "vaccinationRequestorAddress" */
export type VaccinationRequestorAddress_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VaccinationRequestorAddress_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VaccinationRequestorAddress_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  street_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "vaccination.requestor_address" */
export enum VaccinationRequestorAddress_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Line1 = 'line1',
  /** column name */
  Line2 = 'line2',
  /** column name */
  StreetId = 'street_id'
}

export type VaccinationRequestorAddress_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VaccinationRequestorAddress_Set_Input>;
  /** filter the rows which have to be updated */
  where: VaccinationRequestorAddress_Bool_Exp;
};

/** poziadavky na ockovanie */
export type VaccinationRequests = {
  __typename?: 'vaccinationRequests';
  birthNumber?: Maybe<Scalars['String']>;
  centerId?: Maybe<Scalars['uuid']>;
  createdAt: Scalars['timestamptz'];
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  lastName?: Maybe<Scalars['String']>;
  preferredDate?: Maybe<Scalars['date']>;
  /** An object relationship */
  requestStatus?: Maybe<VaccinationRequestStatuses>;
  requestorAddressId?: Maybe<Scalars['uuid']>;
  requestorCity?: Maybe<Scalars['String']>;
  requestorCountry?: Maybe<Scalars['String']>;
  requestorPostalCode?: Maybe<Scalars['String']>;
  requestorStreet?: Maybe<Scalars['String']>;
  statusCode?: Maybe<VaccinationRequestStatuses_Enum>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  vaccinationCentre?: Maybe<VaccinationCentres>;
};

/** aggregated selection of "vaccination.requests" */
export type VaccinationRequests_Aggregate = {
  __typename?: 'vaccinationRequests_aggregate';
  aggregate?: Maybe<VaccinationRequests_Aggregate_Fields>;
  nodes: Array<VaccinationRequests>;
};

export type VaccinationRequests_Aggregate_Bool_Exp = {
  count?: InputMaybe<VaccinationRequests_Aggregate_Bool_Exp_Count>;
};

export type VaccinationRequests_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<VaccinationRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<VaccinationRequests_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vaccination.requests" */
export type VaccinationRequests_Aggregate_Fields = {
  __typename?: 'vaccinationRequests_aggregate_fields';
  avg?: Maybe<VaccinationRequests_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<VaccinationRequests_Max_Fields>;
  min?: Maybe<VaccinationRequests_Min_Fields>;
  stddev?: Maybe<VaccinationRequests_Stddev_Fields>;
  stddev_pop?: Maybe<VaccinationRequests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<VaccinationRequests_Stddev_Samp_Fields>;
  sum?: Maybe<VaccinationRequests_Sum_Fields>;
  var_pop?: Maybe<VaccinationRequests_Var_Pop_Fields>;
  var_samp?: Maybe<VaccinationRequests_Var_Samp_Fields>;
  variance?: Maybe<VaccinationRequests_Variance_Fields>;
};


/** aggregate fields of "vaccination.requests" */
export type VaccinationRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VaccinationRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vaccination.requests" */
export type VaccinationRequests_Aggregate_Order_By = {
  avg?: InputMaybe<VaccinationRequests_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<VaccinationRequests_Max_Order_By>;
  min?: InputMaybe<VaccinationRequests_Min_Order_By>;
  stddev?: InputMaybe<VaccinationRequests_Stddev_Order_By>;
  stddev_pop?: InputMaybe<VaccinationRequests_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<VaccinationRequests_Stddev_Samp_Order_By>;
  sum?: InputMaybe<VaccinationRequests_Sum_Order_By>;
  var_pop?: InputMaybe<VaccinationRequests_Var_Pop_Order_By>;
  var_samp?: InputMaybe<VaccinationRequests_Var_Samp_Order_By>;
  variance?: InputMaybe<VaccinationRequests_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vaccination.requests" */
export type VaccinationRequests_Arr_Rel_Insert_Input = {
  data: Array<VaccinationRequests_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<VaccinationRequests_On_Conflict>;
};

/** aggregate avg on columns */
export type VaccinationRequests_Avg_Fields = {
  __typename?: 'vaccinationRequests_avg_fields';
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vaccination.requests" */
export type VaccinationRequests_Avg_Order_By = {
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vaccination.requests". All fields are combined with a logical 'AND'. */
export type VaccinationRequests_Bool_Exp = {
  _and?: InputMaybe<Array<VaccinationRequests_Bool_Exp>>;
  _not?: InputMaybe<VaccinationRequests_Bool_Exp>;
  _or?: InputMaybe<Array<VaccinationRequests_Bool_Exp>>;
  birthNumber?: InputMaybe<String_Comparison_Exp>;
  centerId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  doseNumber?: InputMaybe<Int_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  preferredDate?: InputMaybe<Date_Comparison_Exp>;
  requestStatus?: InputMaybe<VaccinationRequestStatuses_Bool_Exp>;
  requestorAddressId?: InputMaybe<Uuid_Comparison_Exp>;
  requestorCity?: InputMaybe<String_Comparison_Exp>;
  requestorCountry?: InputMaybe<String_Comparison_Exp>;
  requestorPostalCode?: InputMaybe<String_Comparison_Exp>;
  requestorStreet?: InputMaybe<String_Comparison_Exp>;
  statusCode?: InputMaybe<VaccinationRequestStatuses_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  vaccinationCentre?: InputMaybe<VaccinationCentres_Bool_Exp>;
};

/** unique or primary key constraints on table "vaccination.requests" */
export enum VaccinationRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  RequestsPkey = 'requests_pkey'
}

/** input type for incrementing numeric columns in table "vaccination.requests" */
export type VaccinationRequests_Inc_Input = {
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vaccination.requests" */
export type VaccinationRequests_Insert_Input = {
  birthNumber?: InputMaybe<Scalars['String']>;
  centerId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  preferredDate?: InputMaybe<Scalars['date']>;
  requestStatus?: InputMaybe<VaccinationRequestStatuses_Obj_Rel_Insert_Input>;
  requestorAddressId?: InputMaybe<Scalars['uuid']>;
  requestorCity?: InputMaybe<Scalars['String']>;
  requestorCountry?: InputMaybe<Scalars['String']>;
  requestorPostalCode?: InputMaybe<Scalars['String']>;
  requestorStreet?: InputMaybe<Scalars['String']>;
  statusCode?: InputMaybe<VaccinationRequestStatuses_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vaccinationCentre?: InputMaybe<VaccinationCentres_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type VaccinationRequests_Max_Fields = {
  __typename?: 'vaccinationRequests_max_fields';
  birthNumber?: Maybe<Scalars['String']>;
  centerId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  preferredDate?: Maybe<Scalars['date']>;
  requestorAddressId?: Maybe<Scalars['uuid']>;
  requestorCity?: Maybe<Scalars['String']>;
  requestorCountry?: Maybe<Scalars['String']>;
  requestorPostalCode?: Maybe<Scalars['String']>;
  requestorStreet?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "vaccination.requests" */
export type VaccinationRequests_Max_Order_By = {
  birthNumber?: InputMaybe<Order_By>;
  centerId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  preferredDate?: InputMaybe<Order_By>;
  requestorAddressId?: InputMaybe<Order_By>;
  requestorCity?: InputMaybe<Order_By>;
  requestorCountry?: InputMaybe<Order_By>;
  requestorPostalCode?: InputMaybe<Order_By>;
  requestorStreet?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type VaccinationRequests_Min_Fields = {
  __typename?: 'vaccinationRequests_min_fields';
  birthNumber?: Maybe<Scalars['String']>;
  centerId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  preferredDate?: Maybe<Scalars['date']>;
  requestorAddressId?: Maybe<Scalars['uuid']>;
  requestorCity?: Maybe<Scalars['String']>;
  requestorCountry?: Maybe<Scalars['String']>;
  requestorPostalCode?: Maybe<Scalars['String']>;
  requestorStreet?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "vaccination.requests" */
export type VaccinationRequests_Min_Order_By = {
  birthNumber?: InputMaybe<Order_By>;
  centerId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  preferredDate?: InputMaybe<Order_By>;
  requestorAddressId?: InputMaybe<Order_By>;
  requestorCity?: InputMaybe<Order_By>;
  requestorCountry?: InputMaybe<Order_By>;
  requestorPostalCode?: InputMaybe<Order_By>;
  requestorStreet?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vaccination.requests" */
export type VaccinationRequests_Mutation_Response = {
  __typename?: 'vaccinationRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VaccinationRequests>;
};

/** on_conflict condition type for table "vaccination.requests" */
export type VaccinationRequests_On_Conflict = {
  constraint: VaccinationRequests_Constraint;
  update_columns?: Array<VaccinationRequests_Update_Column>;
  where?: InputMaybe<VaccinationRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "vaccination.requests". */
export type VaccinationRequests_Order_By = {
  birthNumber?: InputMaybe<Order_By>;
  centerId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  doseNumber?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  preferredDate?: InputMaybe<Order_By>;
  requestStatus?: InputMaybe<VaccinationRequestStatuses_Order_By>;
  requestorAddressId?: InputMaybe<Order_By>;
  requestorCity?: InputMaybe<Order_By>;
  requestorCountry?: InputMaybe<Order_By>;
  requestorPostalCode?: InputMaybe<Order_By>;
  requestorStreet?: InputMaybe<Order_By>;
  statusCode?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  vaccinationCentre?: InputMaybe<VaccinationCentres_Order_By>;
};

/** primary key columns input for table: vaccination.requests */
export type VaccinationRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "vaccination.requests" */
export enum VaccinationRequests_Select_Column {
  /** column name */
  BirthNumber = 'birthNumber',
  /** column name */
  CenterId = 'centerId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DoseNumber = 'doseNumber',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  PreferredDate = 'preferredDate',
  /** column name */
  RequestorAddressId = 'requestorAddressId',
  /** column name */
  RequestorCity = 'requestorCity',
  /** column name */
  RequestorCountry = 'requestorCountry',
  /** column name */
  RequestorPostalCode = 'requestorPostalCode',
  /** column name */
  RequestorStreet = 'requestorStreet',
  /** column name */
  StatusCode = 'statusCode',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "vaccination.requests" */
export type VaccinationRequests_Set_Input = {
  birthNumber?: InputMaybe<Scalars['String']>;
  centerId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  preferredDate?: InputMaybe<Scalars['date']>;
  requestorAddressId?: InputMaybe<Scalars['uuid']>;
  requestorCity?: InputMaybe<Scalars['String']>;
  requestorCountry?: InputMaybe<Scalars['String']>;
  requestorPostalCode?: InputMaybe<Scalars['String']>;
  requestorStreet?: InputMaybe<Scalars['String']>;
  statusCode?: InputMaybe<VaccinationRequestStatuses_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type VaccinationRequests_Stddev_Fields = {
  __typename?: 'vaccinationRequests_stddev_fields';
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vaccination.requests" */
export type VaccinationRequests_Stddev_Order_By = {
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type VaccinationRequests_Stddev_Pop_Fields = {
  __typename?: 'vaccinationRequests_stddev_pop_fields';
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vaccination.requests" */
export type VaccinationRequests_Stddev_Pop_Order_By = {
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type VaccinationRequests_Stddev_Samp_Fields = {
  __typename?: 'vaccinationRequests_stddev_samp_fields';
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vaccination.requests" */
export type VaccinationRequests_Stddev_Samp_Order_By = {
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vaccinationRequests" */
export type VaccinationRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VaccinationRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VaccinationRequests_Stream_Cursor_Value_Input = {
  birthNumber?: InputMaybe<Scalars['String']>;
  centerId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  preferredDate?: InputMaybe<Scalars['date']>;
  requestorAddressId?: InputMaybe<Scalars['uuid']>;
  requestorCity?: InputMaybe<Scalars['String']>;
  requestorCountry?: InputMaybe<Scalars['String']>;
  requestorPostalCode?: InputMaybe<Scalars['String']>;
  requestorStreet?: InputMaybe<Scalars['String']>;
  statusCode?: InputMaybe<VaccinationRequestStatuses_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type VaccinationRequests_Sum_Fields = {
  __typename?: 'vaccinationRequests_sum_fields';
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vaccination.requests" */
export type VaccinationRequests_Sum_Order_By = {
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Order_By>;
};

/** update columns of table "vaccination.requests" */
export enum VaccinationRequests_Update_Column {
  /** column name */
  BirthNumber = 'birthNumber',
  /** column name */
  CenterId = 'centerId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DoseNumber = 'doseNumber',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  PreferredDate = 'preferredDate',
  /** column name */
  RequestorAddressId = 'requestorAddressId',
  /** column name */
  RequestorCity = 'requestorCity',
  /** column name */
  RequestorCountry = 'requestorCountry',
  /** column name */
  RequestorPostalCode = 'requestorPostalCode',
  /** column name */
  RequestorStreet = 'requestorStreet',
  /** column name */
  StatusCode = 'statusCode',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type VaccinationRequests_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<VaccinationRequests_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VaccinationRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: VaccinationRequests_Bool_Exp;
};

/** aggregate var_pop on columns */
export type VaccinationRequests_Var_Pop_Fields = {
  __typename?: 'vaccinationRequests_var_pop_fields';
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vaccination.requests" */
export type VaccinationRequests_Var_Pop_Order_By = {
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type VaccinationRequests_Var_Samp_Fields = {
  __typename?: 'vaccinationRequests_var_samp_fields';
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vaccination.requests" */
export type VaccinationRequests_Var_Samp_Order_By = {
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type VaccinationRequests_Variance_Fields = {
  __typename?: 'vaccinationRequests_variance_fields';
  /** davka 1, 2, 3 */
  doseNumber?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vaccination.requests" */
export type VaccinationRequests_Variance_Order_By = {
  /** davka 1, 2, 3 */
  doseNumber?: InputMaybe<Order_By>;
};

/** columns and relationships of "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key = {
  __typename?: 'vak_hdb_foreign_key';
  column_mapping: Scalars['jsonb'];
  ref_table: Scalars['String'];
  table_name: Scalars['String'];
};


/** columns and relationships of "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_KeyColumn_MappingArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Aggregate = {
  __typename?: 'vak_hdb_foreign_key_aggregate';
  aggregate?: Maybe<Vak_Hdb_Foreign_Key_Aggregate_Fields>;
  nodes: Array<Vak_Hdb_Foreign_Key>;
};

export type Vak_Hdb_Foreign_Key_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vak_Hdb_Foreign_Key_Aggregate_Bool_Exp_Count>;
};

export type Vak_Hdb_Foreign_Key_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Aggregate_Fields = {
  __typename?: 'vak_hdb_foreign_key_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Vak_Hdb_Foreign_Key_Max_Fields>;
  min?: Maybe<Vak_Hdb_Foreign_Key_Min_Fields>;
};


/** aggregate fields of "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Hdb_Foreign_Key_Max_Order_By>;
  min?: InputMaybe<Vak_Hdb_Foreign_Key_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vak_Hdb_Foreign_Key_Append_Input = {
  column_mapping?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Arr_Rel_Insert_Input = {
  data: Array<Vak_Hdb_Foreign_Key_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Hdb_Foreign_Key_On_Conflict>;
};

/** Boolean expression to filter rows from the table "vak.hdb_foreign_key". All fields are combined with a logical 'AND'. */
export type Vak_Hdb_Foreign_Key_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Bool_Exp>>;
  _not?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Bool_Exp>>;
  column_mapping?: InputMaybe<Jsonb_Comparison_Exp>;
  ref_table?: InputMaybe<String_Comparison_Exp>;
  table_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.hdb_foreign_key" */
export enum Vak_Hdb_Foreign_Key_Constraint {
  /** unique or primary key constraint on columns "table_name", "ref_table" */
  HdbTableFkPkey = 'hdb_table_fk_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vak_Hdb_Foreign_Key_Delete_At_Path_Input = {
  column_mapping?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Vak_Hdb_Foreign_Key_Delete_Elem_Input = {
  column_mapping?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vak_Hdb_Foreign_Key_Delete_Key_Input = {
  column_mapping?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Insert_Input = {
  column_mapping?: InputMaybe<Scalars['jsonb']>;
  ref_table?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Vak_Hdb_Foreign_Key_Max_Fields = {
  __typename?: 'vak_hdb_foreign_key_max_fields';
  ref_table?: Maybe<Scalars['String']>;
  table_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Max_Order_By = {
  ref_table?: InputMaybe<Order_By>;
  table_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Hdb_Foreign_Key_Min_Fields = {
  __typename?: 'vak_hdb_foreign_key_min_fields';
  ref_table?: Maybe<Scalars['String']>;
  table_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Min_Order_By = {
  ref_table?: InputMaybe<Order_By>;
  table_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Mutation_Response = {
  __typename?: 'vak_hdb_foreign_key_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Hdb_Foreign_Key>;
};

/** on_conflict condition type for table "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_On_Conflict = {
  constraint: Vak_Hdb_Foreign_Key_Constraint;
  update_columns?: Array<Vak_Hdb_Foreign_Key_Update_Column>;
  where?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.hdb_foreign_key". */
export type Vak_Hdb_Foreign_Key_Order_By = {
  column_mapping?: InputMaybe<Order_By>;
  ref_table?: InputMaybe<Order_By>;
  table_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.hdb_foreign_key */
export type Vak_Hdb_Foreign_Key_Pk_Columns_Input = {
  ref_table: Scalars['String'];
  table_name: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vak_Hdb_Foreign_Key_Prepend_Input = {
  column_mapping?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "vak.hdb_foreign_key" */
export enum Vak_Hdb_Foreign_Key_Select_Column {
  /** column name */
  ColumnMapping = 'column_mapping',
  /** column name */
  RefTable = 'ref_table',
  /** column name */
  TableName = 'table_name'
}

/** input type for updating data in table "vak.hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Set_Input = {
  column_mapping?: InputMaybe<Scalars['jsonb']>;
  ref_table?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "vak_hdb_foreign_key" */
export type Vak_Hdb_Foreign_Key_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Hdb_Foreign_Key_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Hdb_Foreign_Key_Stream_Cursor_Value_Input = {
  column_mapping?: InputMaybe<Scalars['jsonb']>;
  ref_table?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "vak.hdb_foreign_key" */
export enum Vak_Hdb_Foreign_Key_Update_Column {
  /** column name */
  ColumnMapping = 'column_mapping',
  /** column name */
  RefTable = 'ref_table',
  /** column name */
  TableName = 'table_name'
}

export type Vak_Hdb_Foreign_Key_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Vak_Hdb_Foreign_Key_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Vak_Hdb_Foreign_Key_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Vak_Hdb_Foreign_Key_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Vak_Hdb_Foreign_Key_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Vak_Hdb_Foreign_Key_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Hdb_Foreign_Key_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Hdb_Foreign_Key_Bool_Exp;
};

/** columns and relationships of "vak.hdb_relationship" */
export type Vak_Hdb_Relationship = {
  __typename?: 'vak_hdb_relationship';
  rel_def: Scalars['jsonb'];
  rel_name: Scalars['String'];
  rel_type: Scalars['String'];
  table_name: Scalars['String'];
};


/** columns and relationships of "vak.hdb_relationship" */
export type Vak_Hdb_RelationshipRel_DefArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_Aggregate = {
  __typename?: 'vak_hdb_relationship_aggregate';
  aggregate?: Maybe<Vak_Hdb_Relationship_Aggregate_Fields>;
  nodes: Array<Vak_Hdb_Relationship>;
};

export type Vak_Hdb_Relationship_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vak_Hdb_Relationship_Aggregate_Bool_Exp_Count>;
};

export type Vak_Hdb_Relationship_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Hdb_Relationship_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_Aggregate_Fields = {
  __typename?: 'vak_hdb_relationship_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Vak_Hdb_Relationship_Max_Fields>;
  min?: Maybe<Vak_Hdb_Relationship_Min_Fields>;
};


/** aggregate fields of "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Hdb_Relationship_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Hdb_Relationship_Max_Order_By>;
  min?: InputMaybe<Vak_Hdb_Relationship_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vak_Hdb_Relationship_Append_Input = {
  rel_def?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_Arr_Rel_Insert_Input = {
  data: Array<Vak_Hdb_Relationship_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Hdb_Relationship_On_Conflict>;
};

/** Boolean expression to filter rows from the table "vak.hdb_relationship". All fields are combined with a logical 'AND'. */
export type Vak_Hdb_Relationship_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Hdb_Relationship_Bool_Exp>>;
  _not?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Hdb_Relationship_Bool_Exp>>;
  rel_def?: InputMaybe<Jsonb_Comparison_Exp>;
  rel_name?: InputMaybe<String_Comparison_Exp>;
  rel_type?: InputMaybe<String_Comparison_Exp>;
  table_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.hdb_relationship" */
export enum Vak_Hdb_Relationship_Constraint {
  /** unique or primary key constraint on columns "table_name", "rel_name" */
  HdbTableRelationshipPkey = 'hdb_table_relationship_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vak_Hdb_Relationship_Delete_At_Path_Input = {
  rel_def?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Vak_Hdb_Relationship_Delete_Elem_Input = {
  rel_def?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vak_Hdb_Relationship_Delete_Key_Input = {
  rel_def?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_Insert_Input = {
  rel_def?: InputMaybe<Scalars['jsonb']>;
  rel_name?: InputMaybe<Scalars['String']>;
  rel_type?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Vak_Hdb_Relationship_Max_Fields = {
  __typename?: 'vak_hdb_relationship_max_fields';
  rel_name?: Maybe<Scalars['String']>;
  rel_type?: Maybe<Scalars['String']>;
  table_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_Max_Order_By = {
  rel_name?: InputMaybe<Order_By>;
  rel_type?: InputMaybe<Order_By>;
  table_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Hdb_Relationship_Min_Fields = {
  __typename?: 'vak_hdb_relationship_min_fields';
  rel_name?: Maybe<Scalars['String']>;
  rel_type?: Maybe<Scalars['String']>;
  table_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_Min_Order_By = {
  rel_name?: InputMaybe<Order_By>;
  rel_type?: InputMaybe<Order_By>;
  table_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_Mutation_Response = {
  __typename?: 'vak_hdb_relationship_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Hdb_Relationship>;
};

/** on_conflict condition type for table "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_On_Conflict = {
  constraint: Vak_Hdb_Relationship_Constraint;
  update_columns?: Array<Vak_Hdb_Relationship_Update_Column>;
  where?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.hdb_relationship". */
export type Vak_Hdb_Relationship_Order_By = {
  rel_def?: InputMaybe<Order_By>;
  rel_name?: InputMaybe<Order_By>;
  rel_type?: InputMaybe<Order_By>;
  table_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.hdb_relationship */
export type Vak_Hdb_Relationship_Pk_Columns_Input = {
  rel_name: Scalars['String'];
  table_name: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vak_Hdb_Relationship_Prepend_Input = {
  rel_def?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "vak.hdb_relationship" */
export enum Vak_Hdb_Relationship_Select_Column {
  /** column name */
  RelDef = 'rel_def',
  /** column name */
  RelName = 'rel_name',
  /** column name */
  RelType = 'rel_type',
  /** column name */
  TableName = 'table_name'
}

/** input type for updating data in table "vak.hdb_relationship" */
export type Vak_Hdb_Relationship_Set_Input = {
  rel_def?: InputMaybe<Scalars['jsonb']>;
  rel_name?: InputMaybe<Scalars['String']>;
  rel_type?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "vak_hdb_relationship" */
export type Vak_Hdb_Relationship_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Hdb_Relationship_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Hdb_Relationship_Stream_Cursor_Value_Input = {
  rel_def?: InputMaybe<Scalars['jsonb']>;
  rel_name?: InputMaybe<Scalars['String']>;
  rel_type?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "vak.hdb_relationship" */
export enum Vak_Hdb_Relationship_Update_Column {
  /** column name */
  RelDef = 'rel_def',
  /** column name */
  RelName = 'rel_name',
  /** column name */
  RelType = 'rel_type',
  /** column name */
  TableName = 'table_name'
}

export type Vak_Hdb_Relationship_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Vak_Hdb_Relationship_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Vak_Hdb_Relationship_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Vak_Hdb_Relationship_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Vak_Hdb_Relationship_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Vak_Hdb_Relationship_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Hdb_Relationship_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Hdb_Relationship_Bool_Exp;
};

/** columns and relationships of "vak.hdb_table" */
export type Vak_Hdb_Table = {
  __typename?: 'vak_hdb_table';
  /** An array relationship */
  foreign_key: Array<Vak_Hdb_Foreign_Key>;
  /** An aggregate relationship */
  foreign_key_aggregate: Vak_Hdb_Foreign_Key_Aggregate;
  /** An array relationship */
  foreign_key_ref: Array<Vak_Hdb_Foreign_Key>;
  /** An aggregate relationship */
  foreign_key_ref_aggregate: Vak_Hdb_Foreign_Key_Aggregate;
  /** An array relationship */
  relationship: Array<Vak_Hdb_Relationship>;
  /** An aggregate relationship */
  relationship_aggregate: Vak_Hdb_Relationship_Aggregate;
  table_name: Scalars['String'];
};


/** columns and relationships of "vak.hdb_table" */
export type Vak_Hdb_TableForeign_KeyArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
};


/** columns and relationships of "vak.hdb_table" */
export type Vak_Hdb_TableForeign_Key_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
};


/** columns and relationships of "vak.hdb_table" */
export type Vak_Hdb_TableForeign_Key_RefArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
};


/** columns and relationships of "vak.hdb_table" */
export type Vak_Hdb_TableForeign_Key_Ref_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Foreign_Key_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
};


/** columns and relationships of "vak.hdb_table" */
export type Vak_Hdb_TableRelationshipArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Relationship_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
};


/** columns and relationships of "vak.hdb_table" */
export type Vak_Hdb_TableRelationship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Hdb_Relationship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Hdb_Relationship_Order_By>>;
  where?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
};

/** aggregated selection of "vak.hdb_table" */
export type Vak_Hdb_Table_Aggregate = {
  __typename?: 'vak_hdb_table_aggregate';
  aggregate?: Maybe<Vak_Hdb_Table_Aggregate_Fields>;
  nodes: Array<Vak_Hdb_Table>;
};

/** aggregate fields of "vak.hdb_table" */
export type Vak_Hdb_Table_Aggregate_Fields = {
  __typename?: 'vak_hdb_table_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Vak_Hdb_Table_Max_Fields>;
  min?: Maybe<Vak_Hdb_Table_Min_Fields>;
};


/** aggregate fields of "vak.hdb_table" */
export type Vak_Hdb_Table_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Hdb_Table_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "vak.hdb_table". All fields are combined with a logical 'AND'. */
export type Vak_Hdb_Table_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Hdb_Table_Bool_Exp>>;
  _not?: InputMaybe<Vak_Hdb_Table_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Hdb_Table_Bool_Exp>>;
  foreign_key?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
  foreign_key_aggregate?: InputMaybe<Vak_Hdb_Foreign_Key_Aggregate_Bool_Exp>;
  foreign_key_ref?: InputMaybe<Vak_Hdb_Foreign_Key_Bool_Exp>;
  foreign_key_ref_aggregate?: InputMaybe<Vak_Hdb_Foreign_Key_Aggregate_Bool_Exp>;
  relationship?: InputMaybe<Vak_Hdb_Relationship_Bool_Exp>;
  relationship_aggregate?: InputMaybe<Vak_Hdb_Relationship_Aggregate_Bool_Exp>;
  table_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.hdb_table" */
export enum Vak_Hdb_Table_Constraint {
  /** unique or primary key constraint on columns "table_name" */
  HdbTablePkey = 'hdb_table_pkey'
}

/** input type for inserting data into table "vak.hdb_table" */
export type Vak_Hdb_Table_Insert_Input = {
  foreign_key?: InputMaybe<Vak_Hdb_Foreign_Key_Arr_Rel_Insert_Input>;
  foreign_key_ref?: InputMaybe<Vak_Hdb_Foreign_Key_Arr_Rel_Insert_Input>;
  relationship?: InputMaybe<Vak_Hdb_Relationship_Arr_Rel_Insert_Input>;
  table_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Vak_Hdb_Table_Max_Fields = {
  __typename?: 'vak_hdb_table_max_fields';
  table_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Vak_Hdb_Table_Min_Fields = {
  __typename?: 'vak_hdb_table_min_fields';
  table_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "vak.hdb_table" */
export type Vak_Hdb_Table_Mutation_Response = {
  __typename?: 'vak_hdb_table_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Hdb_Table>;
};

/** on_conflict condition type for table "vak.hdb_table" */
export type Vak_Hdb_Table_On_Conflict = {
  constraint: Vak_Hdb_Table_Constraint;
  update_columns?: Array<Vak_Hdb_Table_Update_Column>;
  where?: InputMaybe<Vak_Hdb_Table_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.hdb_table". */
export type Vak_Hdb_Table_Order_By = {
  foreign_key_aggregate?: InputMaybe<Vak_Hdb_Foreign_Key_Aggregate_Order_By>;
  foreign_key_ref_aggregate?: InputMaybe<Vak_Hdb_Foreign_Key_Aggregate_Order_By>;
  relationship_aggregate?: InputMaybe<Vak_Hdb_Relationship_Aggregate_Order_By>;
  table_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.hdb_table */
export type Vak_Hdb_Table_Pk_Columns_Input = {
  table_name: Scalars['String'];
};

/** select columns of table "vak.hdb_table" */
export enum Vak_Hdb_Table_Select_Column {
  /** column name */
  TableName = 'table_name'
}

/** input type for updating data in table "vak.hdb_table" */
export type Vak_Hdb_Table_Set_Input = {
  table_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "vak_hdb_table" */
export type Vak_Hdb_Table_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Hdb_Table_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Hdb_Table_Stream_Cursor_Value_Input = {
  table_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "vak.hdb_table" */
export enum Vak_Hdb_Table_Update_Column {
  /** column name */
  TableName = 'table_name'
}

export type Vak_Hdb_Table_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Hdb_Table_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Hdb_Table_Bool_Exp;
};

/** columns and relationships of "vak.kontrola" */
export type Vak_Kontrola = {
  __typename?: 'vak_kontrola';
  created_at?: Maybe<Scalars['timestamptz']>;
  firebase_stamp?: Maybe<Scalars['bigint']>;
  id: Scalars['Int'];
  /** An object relationship */
  kontrolny_bod: Vak_Kontrolny_Bod;
  kontrolny_bod_fk: Scalars['Int'];
  /** An object relationship */
  obhliadka?: Maybe<Vak_Obhliadka>;
  obhliadka_fk?: Maybe<Scalars['Int']>;
  /** An object relationship */
  ok_predpis_kontrola?: Maybe<Vak_Predpis_Kontrola>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Int']>;
  /** Ak bol termin OK tak true, NULL ak zatial nevyhodnotene */
  ok_termin?: Maybe<Scalars['Boolean']>;
  platny?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  predpis_obhliadka?: Maybe<Vak_Predpis_Obhliadka>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  /** An object relationship */
  smena?: Maybe<Vak_Smena>;
  smena_fk?: Maybe<Scalars['Int']>;
  /** termin vykonania kontroly na kontrolnom bode (sluzi na porovanie terminu/casu v predpise) */
  termin_cas?: Maybe<Scalars['time']>;
  /** datum vykonania kontroly na kontrolnom bode */
  termin_datum?: Maybe<Scalars['date']>;
  /** An array relationship */
  ulohas: Array<Vak_Uloha>;
  /** An aggregate relationship */
  ulohas_aggregate: Vak_Uloha_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "vak.kontrola" */
export type Vak_KontrolaUlohasArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};


/** columns and relationships of "vak.kontrola" */
export type Vak_KontrolaUlohas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};

/** aggregated selection of "vak.kontrola" */
export type Vak_Kontrola_Aggregate = {
  __typename?: 'vak_kontrola_aggregate';
  aggregate?: Maybe<Vak_Kontrola_Aggregate_Fields>;
  nodes: Array<Vak_Kontrola>;
};

export type Vak_Kontrola_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Vak_Kontrola_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Vak_Kontrola_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Vak_Kontrola_Aggregate_Bool_Exp_Count>;
};

export type Vak_Kontrola_Aggregate_Bool_Exp_Bool_And = {
  arguments: Vak_Kontrola_Select_Column_Vak_Kontrola_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Kontrola_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Vak_Kontrola_Select_Column_Vak_Kontrola_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Kontrola_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.kontrola" */
export type Vak_Kontrola_Aggregate_Fields = {
  __typename?: 'vak_kontrola_aggregate_fields';
  avg?: Maybe<Vak_Kontrola_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Kontrola_Max_Fields>;
  min?: Maybe<Vak_Kontrola_Min_Fields>;
  stddev?: Maybe<Vak_Kontrola_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Kontrola_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Kontrola_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Kontrola_Sum_Fields>;
  var_pop?: Maybe<Vak_Kontrola_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Kontrola_Var_Samp_Fields>;
  variance?: Maybe<Vak_Kontrola_Variance_Fields>;
};


/** aggregate fields of "vak.kontrola" */
export type Vak_Kontrola_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.kontrola" */
export type Vak_Kontrola_Aggregate_Order_By = {
  avg?: InputMaybe<Vak_Kontrola_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Kontrola_Max_Order_By>;
  min?: InputMaybe<Vak_Kontrola_Min_Order_By>;
  stddev?: InputMaybe<Vak_Kontrola_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vak_Kontrola_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vak_Kontrola_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vak_Kontrola_Sum_Order_By>;
  var_pop?: InputMaybe<Vak_Kontrola_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vak_Kontrola_Var_Samp_Order_By>;
  variance?: InputMaybe<Vak_Kontrola_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vak.kontrola" */
export type Vak_Kontrola_Arr_Rel_Insert_Input = {
  data: Array<Vak_Kontrola_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Kontrola_On_Conflict>;
};

/** aggregate avg on columns */
export type Vak_Kontrola_Avg_Fields = {
  __typename?: 'vak_kontrola_avg_fields';
  firebase_stamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  obhliadka_fk?: Maybe<Scalars['Float']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vak.kontrola" */
export type Vak_Kontrola_Avg_Order_By = {
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vak.kontrola". All fields are combined with a logical 'AND'. */
export type Vak_Kontrola_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Kontrola_Bool_Exp>>;
  _not?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Kontrola_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  firebase_stamp?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
  kontrolny_bod_fk?: InputMaybe<Int_Comparison_Exp>;
  obhliadka?: InputMaybe<Vak_Obhliadka_Bool_Exp>;
  obhliadka_fk?: InputMaybe<Int_Comparison_Exp>;
  ok_predpis_kontrola?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
  ok_predpis_kontrola_fk?: InputMaybe<Int_Comparison_Exp>;
  ok_termin?: InputMaybe<Boolean_Comparison_Exp>;
  platny?: InputMaybe<Boolean_Comparison_Exp>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
  predpis_obhliadka_fk?: InputMaybe<Int_Comparison_Exp>;
  smena?: InputMaybe<Vak_Smena_Bool_Exp>;
  smena_fk?: InputMaybe<Int_Comparison_Exp>;
  termin_cas?: InputMaybe<Time_Comparison_Exp>;
  termin_datum?: InputMaybe<Date_Comparison_Exp>;
  ulohas?: InputMaybe<Vak_Uloha_Bool_Exp>;
  ulohas_aggregate?: InputMaybe<Vak_Uloha_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.kontrola" */
export enum Vak_Kontrola_Constraint {
  /** unique or primary key constraint on columns "termin_cas", "termin_datum", "kontrolny_bod_fk" */
  KontrolaTerminDatumTerminCasKontrolnyBodFkKey = 'kontrola_termin_datum_termin_cas_kontrolny_bod_fk_key',
  /** unique or primary key constraint on columns "id" */
  ObhliadkaPkey = 'obhliadka_pkey'
}

/** input type for incrementing numeric columns in table "vak.kontrola" */
export type Vak_Kontrola_Inc_Input = {
  firebase_stamp?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  obhliadka_fk?: InputMaybe<Scalars['Int']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.kontrola" */
export type Vak_Kontrola_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  firebase_stamp?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Obj_Rel_Insert_Input>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  obhliadka?: InputMaybe<Vak_Obhliadka_Obj_Rel_Insert_Input>;
  obhliadka_fk?: InputMaybe<Scalars['Int']>;
  ok_predpis_kontrola?: InputMaybe<Vak_Predpis_Kontrola_Obj_Rel_Insert_Input>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Scalars['Int']>;
  /** Ak bol termin OK tak true, NULL ak zatial nevyhodnotene */
  ok_termin?: InputMaybe<Scalars['Boolean']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Obj_Rel_Insert_Input>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  smena?: InputMaybe<Vak_Smena_Obj_Rel_Insert_Input>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  /** termin vykonania kontroly na kontrolnom bode (sluzi na porovanie terminu/casu v predpise) */
  termin_cas?: InputMaybe<Scalars['time']>;
  /** datum vykonania kontroly na kontrolnom bode */
  termin_datum?: InputMaybe<Scalars['date']>;
  ulohas?: InputMaybe<Vak_Uloha_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Vak_Kontrola_Max_Fields = {
  __typename?: 'vak_kontrola_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  firebase_stamp?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  kontrolny_bod_fk?: Maybe<Scalars['Int']>;
  obhliadka_fk?: Maybe<Scalars['Int']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
  /** datum vykonania kontroly na kontrolnom bode */
  termin_datum?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "vak.kontrola" */
export type Vak_Kontrola_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  /** datum vykonania kontroly na kontrolnom bode */
  termin_datum?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Kontrola_Min_Fields = {
  __typename?: 'vak_kontrola_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  firebase_stamp?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  kontrolny_bod_fk?: Maybe<Scalars['Int']>;
  obhliadka_fk?: Maybe<Scalars['Int']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
  /** datum vykonania kontroly na kontrolnom bode */
  termin_datum?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "vak.kontrola" */
export type Vak_Kontrola_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  /** datum vykonania kontroly na kontrolnom bode */
  termin_datum?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vak.kontrola" */
export type Vak_Kontrola_Mutation_Response = {
  __typename?: 'vak_kontrola_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Kontrola>;
};

/** input type for inserting object relation for remote table "vak.kontrola" */
export type Vak_Kontrola_Obj_Rel_Insert_Input = {
  data: Vak_Kontrola_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Kontrola_On_Conflict>;
};

/** on_conflict condition type for table "vak.kontrola" */
export type Vak_Kontrola_On_Conflict = {
  constraint: Vak_Kontrola_Constraint;
  update_columns?: Array<Vak_Kontrola_Update_Column>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.kontrola". */
export type Vak_Kontrola_Order_By = {
  created_at?: InputMaybe<Order_By>;
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka?: InputMaybe<Vak_Obhliadka_Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  ok_predpis_kontrola?: InputMaybe<Vak_Predpis_Kontrola_Order_By>;
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  ok_termin?: InputMaybe<Order_By>;
  platny?: InputMaybe<Order_By>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena?: InputMaybe<Vak_Smena_Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  termin_cas?: InputMaybe<Order_By>;
  termin_datum?: InputMaybe<Order_By>;
  ulohas_aggregate?: InputMaybe<Vak_Uloha_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.kontrola */
export type Vak_Kontrola_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.kontrola" */
export enum Vak_Kontrola_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirebaseStamp = 'firebase_stamp',
  /** column name */
  Id = 'id',
  /** column name */
  KontrolnyBodFk = 'kontrolny_bod_fk',
  /** column name */
  ObhliadkaFk = 'obhliadka_fk',
  /** column name */
  OkPredpisKontrolaFk = 'ok_predpis_kontrola_fk',
  /** column name */
  OkTermin = 'ok_termin',
  /** column name */
  Platny = 'platny',
  /** column name */
  PredpisObhliadkaFk = 'predpis_obhliadka_fk',
  /** column name */
  SmenaFk = 'smena_fk',
  /** column name */
  TerminCas = 'termin_cas',
  /** column name */
  TerminDatum = 'termin_datum',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "vak_kontrola_aggregate_bool_exp_bool_and_arguments_columns" columns of table "vak.kontrola" */
export enum Vak_Kontrola_Select_Column_Vak_Kontrola_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  OkTermin = 'ok_termin',
  /** column name */
  Platny = 'platny'
}

/** select "vak_kontrola_aggregate_bool_exp_bool_or_arguments_columns" columns of table "vak.kontrola" */
export enum Vak_Kontrola_Select_Column_Vak_Kontrola_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  OkTermin = 'ok_termin',
  /** column name */
  Platny = 'platny'
}

/** input type for updating data in table "vak.kontrola" */
export type Vak_Kontrola_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  firebase_stamp?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  obhliadka_fk?: InputMaybe<Scalars['Int']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Scalars['Int']>;
  /** Ak bol termin OK tak true, NULL ak zatial nevyhodnotene */
  ok_termin?: InputMaybe<Scalars['Boolean']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  /** termin vykonania kontroly na kontrolnom bode (sluzi na porovanie terminu/casu v predpise) */
  termin_cas?: InputMaybe<Scalars['time']>;
  /** datum vykonania kontroly na kontrolnom bode */
  termin_datum?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Vak_Kontrola_Stddev_Fields = {
  __typename?: 'vak_kontrola_stddev_fields';
  firebase_stamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  obhliadka_fk?: Maybe<Scalars['Float']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vak.kontrola" */
export type Vak_Kontrola_Stddev_Order_By = {
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vak_Kontrola_Stddev_Pop_Fields = {
  __typename?: 'vak_kontrola_stddev_pop_fields';
  firebase_stamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  obhliadka_fk?: Maybe<Scalars['Float']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vak.kontrola" */
export type Vak_Kontrola_Stddev_Pop_Order_By = {
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vak_Kontrola_Stddev_Samp_Fields = {
  __typename?: 'vak_kontrola_stddev_samp_fields';
  firebase_stamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  obhliadka_fk?: Maybe<Scalars['Float']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vak.kontrola" */
export type Vak_Kontrola_Stddev_Samp_Order_By = {
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vak_kontrola" */
export type Vak_Kontrola_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Kontrola_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Kontrola_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  firebase_stamp?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  obhliadka_fk?: InputMaybe<Scalars['Int']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Scalars['Int']>;
  /** Ak bol termin OK tak true, NULL ak zatial nevyhodnotene */
  ok_termin?: InputMaybe<Scalars['Boolean']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  /** termin vykonania kontroly na kontrolnom bode (sluzi na porovanie terminu/casu v predpise) */
  termin_cas?: InputMaybe<Scalars['time']>;
  /** datum vykonania kontroly na kontrolnom bode */
  termin_datum?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Vak_Kontrola_Sum_Fields = {
  __typename?: 'vak_kontrola_sum_fields';
  firebase_stamp?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  kontrolny_bod_fk?: Maybe<Scalars['Int']>;
  obhliadka_fk?: Maybe<Scalars['Int']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vak.kontrola" */
export type Vak_Kontrola_Sum_Order_By = {
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** columns and relationships of "vak.kontrola_sumar_nenaparovane" */
export type Vak_Kontrola_Sumar_Nenaparovane = {
  __typename?: 'vak_kontrola_sumar_nenaparovane';
  count?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['float8']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "vak.kontrola_sumar_nenaparovane" */
export type Vak_Kontrola_Sumar_Nenaparovane_Aggregate = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_aggregate';
  aggregate?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Aggregate_Fields>;
  nodes: Array<Vak_Kontrola_Sumar_Nenaparovane>;
};

/** aggregate fields of "vak.kontrola_sumar_nenaparovane" */
export type Vak_Kontrola_Sumar_Nenaparovane_Aggregate_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_aggregate_fields';
  avg?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Max_Fields>;
  min?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Min_Fields>;
  stddev?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Sum_Fields>;
  var_pop?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Var_Samp_Fields>;
  variance?: Maybe<Vak_Kontrola_Sumar_Nenaparovane_Variance_Fields>;
};


/** aggregate fields of "vak.kontrola_sumar_nenaparovane" */
export type Vak_Kontrola_Sumar_Nenaparovane_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vak_Kontrola_Sumar_Nenaparovane_Avg_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_avg_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vak.kontrola_sumar_nenaparovane". All fields are combined with a logical 'AND'. */
export type Vak_Kontrola_Sumar_Nenaparovane_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Bool_Exp>>;
  _not?: InputMaybe<Vak_Kontrola_Sumar_Nenaparovane_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Kontrola_Sumar_Nenaparovane_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Float8_Comparison_Exp>;
  termin_month?: InputMaybe<Float8_Comparison_Exp>;
  termin_year?: InputMaybe<Float8_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vak_Kontrola_Sumar_Nenaparovane_Max_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_max_fields';
  count?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['float8']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** aggregate min on columns */
export type Vak_Kontrola_Sumar_Nenaparovane_Min_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_min_fields';
  count?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['float8']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** Ordering options when selecting data from "vak.kontrola_sumar_nenaparovane". */
export type Vak_Kontrola_Sumar_Nenaparovane_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** select columns of table "vak.kontrola_sumar_nenaparovane" */
export enum Vak_Kontrola_Sumar_Nenaparovane_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Id = 'id',
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** aggregate stddev on columns */
export type Vak_Kontrola_Sumar_Nenaparovane_Stddev_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vak_Kontrola_Sumar_Nenaparovane_Stddev_Pop_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vak_Kontrola_Sumar_Nenaparovane_Stddev_Samp_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "vak_kontrola_sumar_nenaparovane" */
export type Vak_Kontrola_Sumar_Nenaparovane_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Kontrola_Sumar_Nenaparovane_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Kontrola_Sumar_Nenaparovane_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['float8']>;
  termin_month?: InputMaybe<Scalars['float8']>;
  termin_year?: InputMaybe<Scalars['float8']>;
};

/** aggregate sum on columns */
export type Vak_Kontrola_Sumar_Nenaparovane_Sum_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_sum_fields';
  count?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['float8']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** aggregate var_pop on columns */
export type Vak_Kontrola_Sumar_Nenaparovane_Var_Pop_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vak_Kontrola_Sumar_Nenaparovane_Var_Samp_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vak_Kontrola_Sumar_Nenaparovane_Variance_Fields = {
  __typename?: 'vak_kontrola_sumar_nenaparovane_variance_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** update columns of table "vak.kontrola" */
export enum Vak_Kontrola_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirebaseStamp = 'firebase_stamp',
  /** column name */
  Id = 'id',
  /** column name */
  KontrolnyBodFk = 'kontrolny_bod_fk',
  /** column name */
  ObhliadkaFk = 'obhliadka_fk',
  /** column name */
  OkPredpisKontrolaFk = 'ok_predpis_kontrola_fk',
  /** column name */
  OkTermin = 'ok_termin',
  /** column name */
  Platny = 'platny',
  /** column name */
  PredpisObhliadkaFk = 'predpis_obhliadka_fk',
  /** column name */
  SmenaFk = 'smena_fk',
  /** column name */
  TerminCas = 'termin_cas',
  /** column name */
  TerminDatum = 'termin_datum',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Vak_Kontrola_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Kontrola_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Kontrola_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Kontrola_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Kontrola_Var_Pop_Fields = {
  __typename?: 'vak_kontrola_var_pop_fields';
  firebase_stamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  obhliadka_fk?: Maybe<Scalars['Float']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vak.kontrola" */
export type Vak_Kontrola_Var_Pop_Order_By = {
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vak_Kontrola_Var_Samp_Fields = {
  __typename?: 'vak_kontrola_var_samp_fields';
  firebase_stamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  obhliadka_fk?: Maybe<Scalars['Float']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vak.kontrola" */
export type Vak_Kontrola_Var_Samp_Order_By = {
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vak_Kontrola_Variance_Fields = {
  __typename?: 'vak_kontrola_variance_fields';
  firebase_stamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  obhliadka_fk?: Maybe<Scalars['Float']>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vak.kontrola" */
export type Vak_Kontrola_Variance_Order_By = {
  firebase_stamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  obhliadka_fk?: InputMaybe<Order_By>;
  /** Ak bol termin OK tak obsahuje ID predpis_kontrola */
  ok_predpis_kontrola_fk?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** columns and relationships of "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod = {
  __typename?: 'vak_kontrolny_bod';
  id: Scalars['Int'];
  kod?: Maybe<Scalars['String']>;
  /** An array relationship */
  kontrola: Array<Vak_Kontrola>;
  /** An aggregate relationship */
  kontrola_aggregate: Vak_Kontrola_Aggregate;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  objekt?: Maybe<Vak_Objekt>;
  objekt_fk?: Maybe<Scalars['Int']>;
  parovane?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  predpis_kontrola: Array<Vak_Predpis_Kontrola>;
  /** An aggregate relationship */
  predpis_kontrola_aggregate: Vak_Predpis_Kontrola_Aggregate;
  /** An array relationship */
  ulohas: Array<Vak_Uloha>;
  /** An aggregate relationship */
  ulohas_aggregate: Vak_Uloha_Aggregate;
};


/** columns and relationships of "vak.kontrolny_bod" */
export type Vak_Kontrolny_BodKontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.kontrolny_bod" */
export type Vak_Kontrolny_BodKontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.kontrolny_bod" */
export type Vak_Kontrolny_BodPredpis_KontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.kontrolny_bod" */
export type Vak_Kontrolny_BodPredpis_Kontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.kontrolny_bod" */
export type Vak_Kontrolny_BodUlohasArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};


/** columns and relationships of "vak.kontrolny_bod" */
export type Vak_Kontrolny_BodUlohas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};

/** aggregated selection of "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Aggregate = {
  __typename?: 'vak_kontrolny_bod_aggregate';
  aggregate?: Maybe<Vak_Kontrolny_Bod_Aggregate_Fields>;
  nodes: Array<Vak_Kontrolny_Bod>;
};

export type Vak_Kontrolny_Bod_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vak_Kontrolny_Bod_Aggregate_Bool_Exp_Count>;
};

export type Vak_Kontrolny_Bod_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Kontrolny_Bod_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Aggregate_Fields = {
  __typename?: 'vak_kontrolny_bod_aggregate_fields';
  avg?: Maybe<Vak_Kontrolny_Bod_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Kontrolny_Bod_Max_Fields>;
  min?: Maybe<Vak_Kontrolny_Bod_Min_Fields>;
  stddev?: Maybe<Vak_Kontrolny_Bod_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Kontrolny_Bod_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Kontrolny_Bod_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Kontrolny_Bod_Sum_Fields>;
  var_pop?: Maybe<Vak_Kontrolny_Bod_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Kontrolny_Bod_Var_Samp_Fields>;
  variance?: Maybe<Vak_Kontrolny_Bod_Variance_Fields>;
};


/** aggregate fields of "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Kontrolny_Bod_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Aggregate_Order_By = {
  avg?: InputMaybe<Vak_Kontrolny_Bod_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Kontrolny_Bod_Max_Order_By>;
  min?: InputMaybe<Vak_Kontrolny_Bod_Min_Order_By>;
  stddev?: InputMaybe<Vak_Kontrolny_Bod_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vak_Kontrolny_Bod_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vak_Kontrolny_Bod_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vak_Kontrolny_Bod_Sum_Order_By>;
  var_pop?: InputMaybe<Vak_Kontrolny_Bod_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vak_Kontrolny_Bod_Var_Samp_Order_By>;
  variance?: InputMaybe<Vak_Kontrolny_Bod_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Arr_Rel_Insert_Input = {
  data: Array<Vak_Kontrolny_Bod_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Kontrolny_Bod_On_Conflict>;
};

/** aggregate avg on columns */
export type Vak_Kontrolny_Bod_Avg_Fields = {
  __typename?: 'vak_kontrolny_bod_avg_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_fk?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vak.kontrolny_bod". All fields are combined with a logical 'AND'. */
export type Vak_Kontrolny_Bod_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Kontrolny_Bod_Bool_Exp>>;
  _not?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Kontrolny_Bod_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kod?: InputMaybe<String_Comparison_Exp>;
  kontrola?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  objekt?: InputMaybe<Vak_Objekt_Bool_Exp>;
  objekt_fk?: InputMaybe<Int_Comparison_Exp>;
  parovane?: InputMaybe<Timestamp_Comparison_Exp>;
  predpis_kontrola?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
  predpis_kontrola_aggregate?: InputMaybe<Vak_Predpis_Kontrola_Aggregate_Bool_Exp>;
  ulohas?: InputMaybe<Vak_Uloha_Bool_Exp>;
  ulohas_aggregate?: InputMaybe<Vak_Uloha_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "vak.kontrolny_bod" */
export enum Vak_Kontrolny_Bod_Constraint {
  /** unique or primary key constraint on columns "kod" */
  KontrolnyBodKodKey = 'kontrolny_bod_kod_key',
  /** unique or primary key constraint on columns "id" */
  KontrolnyBodPkey = 'kontrolny_bod_pkey'
}

/** input type for incrementing numeric columns in table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  objekt_fk?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  kod?: InputMaybe<Scalars['String']>;
  kontrola?: InputMaybe<Vak_Kontrola_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  objekt?: InputMaybe<Vak_Objekt_Obj_Rel_Insert_Input>;
  objekt_fk?: InputMaybe<Scalars['Int']>;
  parovane?: InputMaybe<Scalars['timestamp']>;
  predpis_kontrola?: InputMaybe<Vak_Predpis_Kontrola_Arr_Rel_Insert_Input>;
  ulohas?: InputMaybe<Vak_Uloha_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Vak_Kontrolny_Bod_Max_Fields = {
  __typename?: 'vak_kontrolny_bod_max_fields';
  id?: Maybe<Scalars['Int']>;
  kod?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  objekt_fk?: Maybe<Scalars['Int']>;
  parovane?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  kod?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
  parovane?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Kontrolny_Bod_Min_Fields = {
  __typename?: 'vak_kontrolny_bod_min_fields';
  id?: Maybe<Scalars['Int']>;
  kod?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  objekt_fk?: Maybe<Scalars['Int']>;
  parovane?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  kod?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
  parovane?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Mutation_Response = {
  __typename?: 'vak_kontrolny_bod_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Kontrolny_Bod>;
};

/** input type for inserting object relation for remote table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Obj_Rel_Insert_Input = {
  data: Vak_Kontrolny_Bod_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Kontrolny_Bod_On_Conflict>;
};

/** on_conflict condition type for table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_On_Conflict = {
  constraint: Vak_Kontrolny_Bod_Constraint;
  update_columns?: Array<Vak_Kontrolny_Bod_Update_Column>;
  where?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.kontrolny_bod". */
export type Vak_Kontrolny_Bod_Order_By = {
  id?: InputMaybe<Order_By>;
  kod?: InputMaybe<Order_By>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  objekt?: InputMaybe<Vak_Objekt_Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
  parovane?: InputMaybe<Order_By>;
  predpis_kontrola_aggregate?: InputMaybe<Vak_Predpis_Kontrola_Aggregate_Order_By>;
  ulohas_aggregate?: InputMaybe<Vak_Uloha_Aggregate_Order_By>;
};

/** primary key columns input for table: vak.kontrolny_bod */
export type Vak_Kontrolny_Bod_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.kontrolny_bod" */
export enum Vak_Kontrolny_Bod_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Kod = 'kod',
  /** column name */
  Name = 'name',
  /** column name */
  ObjektFk = 'objekt_fk',
  /** column name */
  Parovane = 'parovane'
}

/** input type for updating data in table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  kod?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  objekt_fk?: InputMaybe<Scalars['Int']>;
  parovane?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Vak_Kontrolny_Bod_Stddev_Fields = {
  __typename?: 'vak_kontrolny_bod_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vak_Kontrolny_Bod_Stddev_Pop_Fields = {
  __typename?: 'vak_kontrolny_bod_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vak_Kontrolny_Bod_Stddev_Samp_Fields = {
  __typename?: 'vak_kontrolny_bod_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vak_kontrolny_bod" */
export type Vak_Kontrolny_Bod_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Kontrolny_Bod_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Kontrolny_Bod_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  kod?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  objekt_fk?: InputMaybe<Scalars['Int']>;
  parovane?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Vak_Kontrolny_Bod_Sum_Fields = {
  __typename?: 'vak_kontrolny_bod_sum_fields';
  id?: Maybe<Scalars['Int']>;
  objekt_fk?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
};

/** update columns of table "vak.kontrolny_bod" */
export enum Vak_Kontrolny_Bod_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Kod = 'kod',
  /** column name */
  Name = 'name',
  /** column name */
  ObjektFk = 'objekt_fk',
  /** column name */
  Parovane = 'parovane'
}

export type Vak_Kontrolny_Bod_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Kontrolny_Bod_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Kontrolny_Bod_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Kontrolny_Bod_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Kontrolny_Bod_Var_Pop_Fields = {
  __typename?: 'vak_kontrolny_bod_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_fk?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vak_Kontrolny_Bod_Var_Samp_Fields = {
  __typename?: 'vak_kontrolny_bod_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_fk?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vak_Kontrolny_Bod_Variance_Fields = {
  __typename?: 'vak_kontrolny_bod_variance_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_fk?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vak.kontrolny_bod" */
export type Vak_Kontrolny_Bod_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  objekt_fk?: InputMaybe<Order_By>;
};

/** columns and relationships of "vak.obhliadka" */
export type Vak_Obhliadka = {
  __typename?: 'vak_obhliadka';
  id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  kontrola: Array<Vak_Kontrola>;
  /** An aggregate relationship */
  kontrola_aggregate: Vak_Kontrola_Aggregate;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  obhliadka?: Maybe<Vak_Smena>;
  ok?: Maybe<Scalars['Boolean']>;
  poradie?: Maybe<Scalars['Int']>;
  /** An object relationship */
  predpis_obhliadka?: Maybe<Vak_Predpis_Obhliadka>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
  termin_cas?: Maybe<Scalars['time']>;
  termin_datum?: Maybe<Scalars['date']>;
};


/** columns and relationships of "vak.obhliadka" */
export type Vak_ObhliadkaKontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.obhliadka" */
export type Vak_ObhliadkaKontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};

/** aggregated selection of "vak.obhliadka" */
export type Vak_Obhliadka_Aggregate = {
  __typename?: 'vak_obhliadka_aggregate';
  aggregate?: Maybe<Vak_Obhliadka_Aggregate_Fields>;
  nodes: Array<Vak_Obhliadka>;
};

/** aggregate fields of "vak.obhliadka" */
export type Vak_Obhliadka_Aggregate_Fields = {
  __typename?: 'vak_obhliadka_aggregate_fields';
  avg?: Maybe<Vak_Obhliadka_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Obhliadka_Max_Fields>;
  min?: Maybe<Vak_Obhliadka_Min_Fields>;
  stddev?: Maybe<Vak_Obhliadka_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Obhliadka_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Obhliadka_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Obhliadka_Sum_Fields>;
  var_pop?: Maybe<Vak_Obhliadka_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Obhliadka_Var_Samp_Fields>;
  variance?: Maybe<Vak_Obhliadka_Variance_Fields>;
};


/** aggregate fields of "vak.obhliadka" */
export type Vak_Obhliadka_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Obhliadka_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vak_Obhliadka_Avg_Fields = {
  __typename?: 'vak_obhliadka_avg_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vak.obhliadka". All fields are combined with a logical 'AND'. */
export type Vak_Obhliadka_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Obhliadka_Bool_Exp>>;
  _not?: InputMaybe<Vak_Obhliadka_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Obhliadka_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kontrola?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  obhliadka?: InputMaybe<Vak_Smena_Bool_Exp>;
  ok?: InputMaybe<Boolean_Comparison_Exp>;
  poradie?: InputMaybe<Int_Comparison_Exp>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
  predpis_obhliadka_fk?: InputMaybe<Int_Comparison_Exp>;
  smena_fk?: InputMaybe<Int_Comparison_Exp>;
  termin_cas?: InputMaybe<Time_Comparison_Exp>;
  termin_datum?: InputMaybe<Date_Comparison_Exp>;
};

/** input type for inserting data into table "vak.obhliadka" */
export type Vak_Obhliadka_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  kontrola?: InputMaybe<Vak_Kontrola_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  obhliadka?: InputMaybe<Vak_Smena_Obj_Rel_Insert_Input>;
  ok?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Obj_Rel_Insert_Input>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  termin_cas?: InputMaybe<Scalars['time']>;
  termin_datum?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Vak_Obhliadka_Max_Fields = {
  __typename?: 'vak_obhliadka_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  poradie?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
  termin_datum?: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Vak_Obhliadka_Min_Fields = {
  __typename?: 'vak_obhliadka_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  poradie?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
  termin_datum?: Maybe<Scalars['date']>;
};

/** input type for inserting object relation for remote table "vak.obhliadka" */
export type Vak_Obhliadka_Obj_Rel_Insert_Input = {
  data: Vak_Obhliadka_Insert_Input;
};

/** columns and relationships of "vak.obhliadka_old" */
export type Vak_Obhliadka_Old = {
  __typename?: 'vak_obhliadka_old';
  id: Scalars['Int'];
  /** An array relationship */
  kontrola: Array<Vak_Kontrola>;
  /** An aggregate relationship */
  kontrola_aggregate: Vak_Kontrola_Aggregate;
  name?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
  poradie?: Maybe<Scalars['Int']>;
  /** An object relationship */
  predpis_obhliadka?: Maybe<Vak_Predpis_Obhliadka>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  /** An object relationship */
  smena?: Maybe<Vak_Smena>;
  smena_fk?: Maybe<Scalars['Int']>;
  termin_max?: Maybe<Scalars['timestamp']>;
  termin_min?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "vak.obhliadka_old" */
export type Vak_Obhliadka_OldKontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.obhliadka_old" */
export type Vak_Obhliadka_OldKontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};

/** aggregated selection of "vak.obhliadka_old" */
export type Vak_Obhliadka_Old_Aggregate = {
  __typename?: 'vak_obhliadka_old_aggregate';
  aggregate?: Maybe<Vak_Obhliadka_Old_Aggregate_Fields>;
  nodes: Array<Vak_Obhliadka_Old>;
};

/** aggregate fields of "vak.obhliadka_old" */
export type Vak_Obhliadka_Old_Aggregate_Fields = {
  __typename?: 'vak_obhliadka_old_aggregate_fields';
  avg?: Maybe<Vak_Obhliadka_Old_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Obhliadka_Old_Max_Fields>;
  min?: Maybe<Vak_Obhliadka_Old_Min_Fields>;
  stddev?: Maybe<Vak_Obhliadka_Old_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Obhliadka_Old_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Obhliadka_Old_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Obhliadka_Old_Sum_Fields>;
  var_pop?: Maybe<Vak_Obhliadka_Old_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Obhliadka_Old_Var_Samp_Fields>;
  variance?: Maybe<Vak_Obhliadka_Old_Variance_Fields>;
};


/** aggregate fields of "vak.obhliadka_old" */
export type Vak_Obhliadka_Old_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Obhliadka_Old_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vak_Obhliadka_Old_Avg_Fields = {
  __typename?: 'vak_obhliadka_old_avg_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vak.obhliadka_old". All fields are combined with a logical 'AND'. */
export type Vak_Obhliadka_Old_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Obhliadka_Old_Bool_Exp>>;
  _not?: InputMaybe<Vak_Obhliadka_Old_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Obhliadka_Old_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kontrola?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  ok?: InputMaybe<Boolean_Comparison_Exp>;
  poradie?: InputMaybe<Int_Comparison_Exp>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
  predpis_obhliadka_fk?: InputMaybe<Int_Comparison_Exp>;
  smena?: InputMaybe<Vak_Smena_Bool_Exp>;
  smena_fk?: InputMaybe<Int_Comparison_Exp>;
  termin_max?: InputMaybe<Timestamp_Comparison_Exp>;
  termin_min?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.obhliadka_old" */
export enum Vak_Obhliadka_Old_Constraint {
  /** unique or primary key constraint on columns "id" */
  ObhliadkaPkey2 = 'obhliadka_pkey2'
}

/** input type for incrementing numeric columns in table "vak.obhliadka_old" */
export type Vak_Obhliadka_Old_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.obhliadka_old" */
export type Vak_Obhliadka_Old_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  kontrola?: InputMaybe<Vak_Kontrola_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Obj_Rel_Insert_Input>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  smena?: InputMaybe<Vak_Smena_Obj_Rel_Insert_Input>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  termin_max?: InputMaybe<Scalars['timestamp']>;
  termin_min?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Vak_Obhliadka_Old_Max_Fields = {
  __typename?: 'vak_obhliadka_old_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  poradie?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
  termin_max?: Maybe<Scalars['timestamp']>;
  termin_min?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Vak_Obhliadka_Old_Min_Fields = {
  __typename?: 'vak_obhliadka_old_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  poradie?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
  termin_max?: Maybe<Scalars['timestamp']>;
  termin_min?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "vak.obhliadka_old" */
export type Vak_Obhliadka_Old_Mutation_Response = {
  __typename?: 'vak_obhliadka_old_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Obhliadka_Old>;
};

/** on_conflict condition type for table "vak.obhliadka_old" */
export type Vak_Obhliadka_Old_On_Conflict = {
  constraint: Vak_Obhliadka_Old_Constraint;
  update_columns?: Array<Vak_Obhliadka_Old_Update_Column>;
  where?: InputMaybe<Vak_Obhliadka_Old_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.obhliadka_old". */
export type Vak_Obhliadka_Old_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  ok?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena?: InputMaybe<Vak_Smena_Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  termin_max?: InputMaybe<Order_By>;
  termin_min?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.obhliadka_old */
export type Vak_Obhliadka_Old_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.obhliadka_old" */
export enum Vak_Obhliadka_Old_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Ok = 'ok',
  /** column name */
  Poradie = 'poradie',
  /** column name */
  PredpisObhliadkaFk = 'predpis_obhliadka_fk',
  /** column name */
  SmenaFk = 'smena_fk',
  /** column name */
  TerminMax = 'termin_max',
  /** column name */
  TerminMin = 'termin_min'
}

/** input type for updating data in table "vak.obhliadka_old" */
export type Vak_Obhliadka_Old_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  termin_max?: InputMaybe<Scalars['timestamp']>;
  termin_min?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Vak_Obhliadka_Old_Stddev_Fields = {
  __typename?: 'vak_obhliadka_old_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vak_Obhliadka_Old_Stddev_Pop_Fields = {
  __typename?: 'vak_obhliadka_old_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vak_Obhliadka_Old_Stddev_Samp_Fields = {
  __typename?: 'vak_obhliadka_old_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "vak_obhliadka_old" */
export type Vak_Obhliadka_Old_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Obhliadka_Old_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Obhliadka_Old_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  termin_max?: InputMaybe<Scalars['timestamp']>;
  termin_min?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Vak_Obhliadka_Old_Sum_Fields = {
  __typename?: 'vak_obhliadka_old_sum_fields';
  id?: Maybe<Scalars['Int']>;
  poradie?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
};

/** update columns of table "vak.obhliadka_old" */
export enum Vak_Obhliadka_Old_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Ok = 'ok',
  /** column name */
  Poradie = 'poradie',
  /** column name */
  PredpisObhliadkaFk = 'predpis_obhliadka_fk',
  /** column name */
  SmenaFk = 'smena_fk',
  /** column name */
  TerminMax = 'termin_max',
  /** column name */
  TerminMin = 'termin_min'
}

export type Vak_Obhliadka_Old_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Obhliadka_Old_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Obhliadka_Old_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Obhliadka_Old_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Obhliadka_Old_Var_Pop_Fields = {
  __typename?: 'vak_obhliadka_old_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vak_Obhliadka_Old_Var_Samp_Fields = {
  __typename?: 'vak_obhliadka_old_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vak_Obhliadka_Old_Variance_Fields = {
  __typename?: 'vak_obhliadka_old_variance_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** Ordering options when selecting data from "vak.obhliadka". */
export type Vak_Obhliadka_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  obhliadka?: InputMaybe<Vak_Smena_Order_By>;
  ok?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  termin_cas?: InputMaybe<Order_By>;
  termin_datum?: InputMaybe<Order_By>;
};

/** select columns of table "vak.obhliadka" */
export enum Vak_Obhliadka_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Ok = 'ok',
  /** column name */
  Poradie = 'poradie',
  /** column name */
  PredpisObhliadkaFk = 'predpis_obhliadka_fk',
  /** column name */
  SmenaFk = 'smena_fk',
  /** column name */
  TerminCas = 'termin_cas',
  /** column name */
  TerminDatum = 'termin_datum'
}

/** aggregate stddev on columns */
export type Vak_Obhliadka_Stddev_Fields = {
  __typename?: 'vak_obhliadka_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vak_Obhliadka_Stddev_Pop_Fields = {
  __typename?: 'vak_obhliadka_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vak_Obhliadka_Stddev_Samp_Fields = {
  __typename?: 'vak_obhliadka_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "vak_obhliadka" */
export type Vak_Obhliadka_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Obhliadka_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Obhliadka_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  termin_cas?: InputMaybe<Scalars['time']>;
  termin_datum?: InputMaybe<Scalars['date']>;
};

/** aggregate sum on columns */
export type Vak_Obhliadka_Sum_Fields = {
  __typename?: 'vak_obhliadka_sum_fields';
  id?: Maybe<Scalars['Int']>;
  poradie?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar = {
  __typename?: 'vak_obhliadka_sumar';
  id?: Maybe<Scalars['String']>;
  /** An array relationship */
  kontrola: Array<Vak_Kontrola>;
  /** An aggregate relationship */
  kontrola_aggregate: Vak_Kontrola_Aggregate;
  ok?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  predpis_obhliadka?: Maybe<Vak_Predpis_Obhliadka>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  predpisane?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  smena?: Maybe<Vak_Smena>;
  smena_fk?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "vak.obhliadka_sumar" */
export type Vak_Obhliadka_SumarKontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.obhliadka_sumar" */
export type Vak_Obhliadka_SumarKontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};

/** aggregated selection of "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Aggregate = {
  __typename?: 'vak_obhliadka_sumar_aggregate';
  aggregate?: Maybe<Vak_Obhliadka_Sumar_Aggregate_Fields>;
  nodes: Array<Vak_Obhliadka_Sumar>;
};

export type Vak_Obhliadka_Sumar_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vak_Obhliadka_Sumar_Aggregate_Bool_Exp_Count>;
};

export type Vak_Obhliadka_Sumar_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Obhliadka_Sumar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Aggregate_Fields = {
  __typename?: 'vak_obhliadka_sumar_aggregate_fields';
  avg?: Maybe<Vak_Obhliadka_Sumar_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Obhliadka_Sumar_Max_Fields>;
  min?: Maybe<Vak_Obhliadka_Sumar_Min_Fields>;
  stddev?: Maybe<Vak_Obhliadka_Sumar_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Obhliadka_Sumar_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Obhliadka_Sumar_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Obhliadka_Sumar_Sum_Fields>;
  var_pop?: Maybe<Vak_Obhliadka_Sumar_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Obhliadka_Sumar_Var_Samp_Fields>;
  variance?: Maybe<Vak_Obhliadka_Sumar_Variance_Fields>;
};


/** aggregate fields of "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Obhliadka_Sumar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Aggregate_Order_By = {
  avg?: InputMaybe<Vak_Obhliadka_Sumar_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Obhliadka_Sumar_Max_Order_By>;
  min?: InputMaybe<Vak_Obhliadka_Sumar_Min_Order_By>;
  stddev?: InputMaybe<Vak_Obhliadka_Sumar_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vak_Obhliadka_Sumar_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vak_Obhliadka_Sumar_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vak_Obhliadka_Sumar_Sum_Order_By>;
  var_pop?: InputMaybe<Vak_Obhliadka_Sumar_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vak_Obhliadka_Sumar_Var_Samp_Order_By>;
  variance?: InputMaybe<Vak_Obhliadka_Sumar_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Arr_Rel_Insert_Input = {
  data: Array<Vak_Obhliadka_Sumar_Insert_Input>;
};

/** aggregate avg on columns */
export type Vak_Obhliadka_Sumar_Avg_Fields = {
  __typename?: 'vak_obhliadka_sumar_avg_fields';
  ok?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Avg_Order_By = {
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vak.obhliadka_sumar". All fields are combined with a logical 'AND'. */
export type Vak_Obhliadka_Sumar_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Obhliadka_Sumar_Bool_Exp>>;
  _not?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Obhliadka_Sumar_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  kontrola?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Bool_Exp>;
  ok?: InputMaybe<Bigint_Comparison_Exp>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
  predpis_obhliadka_fk?: InputMaybe<Int_Comparison_Exp>;
  predpisane?: InputMaybe<Bigint_Comparison_Exp>;
  smena?: InputMaybe<Vak_Smena_Bool_Exp>;
  smena_fk?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for inserting data into table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  kontrola?: InputMaybe<Vak_Kontrola_Arr_Rel_Insert_Input>;
  ok?: InputMaybe<Scalars['bigint']>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Obj_Rel_Insert_Input>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  predpisane?: InputMaybe<Scalars['bigint']>;
  smena?: InputMaybe<Vak_Smena_Obj_Rel_Insert_Input>;
  smena_fk?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Vak_Obhliadka_Sumar_Max_Fields = {
  __typename?: 'vak_obhliadka_sumar_max_fields';
  id?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['bigint']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  predpisane?: Maybe<Scalars['bigint']>;
  smena_fk?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** columns and relationships of "vak.obhliadka_sumar_mesiac" */
export type Vak_Obhliadka_Sumar_Mesiac = {
  __typename?: 'vak_obhliadka_sumar_mesiac';
  id?: Maybe<Scalars['float8']>;
  ok?: Maybe<Scalars['numeric']>;
  predpisane?: Maybe<Scalars['numeric']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "vak.obhliadka_sumar_mesiac" */
export type Vak_Obhliadka_Sumar_Mesiac_Aggregate = {
  __typename?: 'vak_obhliadka_sumar_mesiac_aggregate';
  aggregate?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Aggregate_Fields>;
  nodes: Array<Vak_Obhliadka_Sumar_Mesiac>;
};

/** aggregate fields of "vak.obhliadka_sumar_mesiac" */
export type Vak_Obhliadka_Sumar_Mesiac_Aggregate_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_aggregate_fields';
  avg?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Max_Fields>;
  min?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Min_Fields>;
  stddev?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Sum_Fields>;
  var_pop?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Var_Samp_Fields>;
  variance?: Maybe<Vak_Obhliadka_Sumar_Mesiac_Variance_Fields>;
};


/** aggregate fields of "vak.obhliadka_sumar_mesiac" */
export type Vak_Obhliadka_Sumar_Mesiac_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vak_Obhliadka_Sumar_Mesiac_Avg_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_avg_fields';
  id?: Maybe<Scalars['Float']>;
  ok?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vak.obhliadka_sumar_mesiac". All fields are combined with a logical 'AND'. */
export type Vak_Obhliadka_Sumar_Mesiac_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Bool_Exp>>;
  _not?: InputMaybe<Vak_Obhliadka_Sumar_Mesiac_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Obhliadka_Sumar_Mesiac_Bool_Exp>>;
  id?: InputMaybe<Float8_Comparison_Exp>;
  ok?: InputMaybe<Numeric_Comparison_Exp>;
  predpisane?: InputMaybe<Numeric_Comparison_Exp>;
  termin_month?: InputMaybe<Float8_Comparison_Exp>;
  termin_year?: InputMaybe<Float8_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vak_Obhliadka_Sumar_Mesiac_Max_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_max_fields';
  id?: Maybe<Scalars['float8']>;
  ok?: Maybe<Scalars['numeric']>;
  predpisane?: Maybe<Scalars['numeric']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** aggregate min on columns */
export type Vak_Obhliadka_Sumar_Mesiac_Min_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_min_fields';
  id?: Maybe<Scalars['float8']>;
  ok?: Maybe<Scalars['numeric']>;
  predpisane?: Maybe<Scalars['numeric']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** Ordering options when selecting data from "vak.obhliadka_sumar_mesiac". */
export type Vak_Obhliadka_Sumar_Mesiac_Order_By = {
  id?: InputMaybe<Order_By>;
  ok?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** select columns of table "vak.obhliadka_sumar_mesiac" */
export enum Vak_Obhliadka_Sumar_Mesiac_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Ok = 'ok',
  /** column name */
  Predpisane = 'predpisane',
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** aggregate stddev on columns */
export type Vak_Obhliadka_Sumar_Mesiac_Stddev_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  ok?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vak_Obhliadka_Sumar_Mesiac_Stddev_Pop_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  ok?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vak_Obhliadka_Sumar_Mesiac_Stddev_Samp_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  ok?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "vak_obhliadka_sumar_mesiac" */
export type Vak_Obhliadka_Sumar_Mesiac_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Obhliadka_Sumar_Mesiac_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Obhliadka_Sumar_Mesiac_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['float8']>;
  ok?: InputMaybe<Scalars['numeric']>;
  predpisane?: InputMaybe<Scalars['numeric']>;
  termin_month?: InputMaybe<Scalars['float8']>;
  termin_year?: InputMaybe<Scalars['float8']>;
};

/** aggregate sum on columns */
export type Vak_Obhliadka_Sumar_Mesiac_Sum_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_sum_fields';
  id?: Maybe<Scalars['float8']>;
  ok?: Maybe<Scalars['numeric']>;
  predpisane?: Maybe<Scalars['numeric']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** aggregate var_pop on columns */
export type Vak_Obhliadka_Sumar_Mesiac_Var_Pop_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  ok?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vak_Obhliadka_Sumar_Mesiac_Var_Samp_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  ok?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vak_Obhliadka_Sumar_Mesiac_Variance_Fields = {
  __typename?: 'vak_obhliadka_sumar_mesiac_variance_fields';
  id?: Maybe<Scalars['Float']>;
  ok?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** aggregate min on columns */
export type Vak_Obhliadka_Sumar_Min_Fields = {
  __typename?: 'vak_obhliadka_sumar_min_fields';
  id?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['bigint']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  predpisane?: Maybe<Scalars['bigint']>;
  smena_fk?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vak.obhliadka_sumar". */
export type Vak_Obhliadka_Sumar_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Order_By>;
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena?: InputMaybe<Vak_Smena_Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** select columns of table "vak.obhliadka_sumar" */
export enum Vak_Obhliadka_Sumar_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Ok = 'ok',
  /** column name */
  PredpisObhliadkaFk = 'predpis_obhliadka_fk',
  /** column name */
  Predpisane = 'predpisane',
  /** column name */
  SmenaFk = 'smena_fk'
}

/** aggregate stddev on columns */
export type Vak_Obhliadka_Sumar_Stddev_Fields = {
  __typename?: 'vak_obhliadka_sumar_stddev_fields';
  ok?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Stddev_Order_By = {
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vak_Obhliadka_Sumar_Stddev_Pop_Fields = {
  __typename?: 'vak_obhliadka_sumar_stddev_pop_fields';
  ok?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Stddev_Pop_Order_By = {
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vak_Obhliadka_Sumar_Stddev_Samp_Fields = {
  __typename?: 'vak_obhliadka_sumar_stddev_samp_fields';
  ok?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Stddev_Samp_Order_By = {
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vak_obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Obhliadka_Sumar_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Obhliadka_Sumar_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['bigint']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  predpisane?: InputMaybe<Scalars['bigint']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Vak_Obhliadka_Sumar_Sum_Fields = {
  __typename?: 'vak_obhliadka_sumar_sum_fields';
  ok?: Maybe<Scalars['bigint']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  predpisane?: Maybe<Scalars['bigint']>;
  smena_fk?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Sum_Order_By = {
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vak_Obhliadka_Sumar_Var_Pop_Fields = {
  __typename?: 'vak_obhliadka_sumar_var_pop_fields';
  ok?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Var_Pop_Order_By = {
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vak_Obhliadka_Sumar_Var_Samp_Fields = {
  __typename?: 'vak_obhliadka_sumar_var_samp_fields';
  ok?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Var_Samp_Order_By = {
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vak_Obhliadka_Sumar_Variance_Fields = {
  __typename?: 'vak_obhliadka_sumar_variance_fields';
  ok?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vak.obhliadka_sumar" */
export type Vak_Obhliadka_Sumar_Variance_Order_By = {
  ok?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vak_Obhliadka_Var_Pop_Fields = {
  __typename?: 'vak_obhliadka_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vak_Obhliadka_Var_Samp_Fields = {
  __typename?: 'vak_obhliadka_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vak_Obhliadka_Variance_Fields = {
  __typename?: 'vak_obhliadka_variance_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "vak.objekt" */
export type Vak_Objekt = {
  __typename?: 'vak_objekt';
  id: Scalars['Int'];
  /** An array relationship */
  kontrolny_bod: Array<Vak_Kontrolny_Bod>;
  /** An aggregate relationship */
  kontrolny_bod_aggregate: Vak_Kontrolny_Bod_Aggregate;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  objekt_typ?: Maybe<Vak_Objekt_Typ>;
  objekt_typ_fk?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "vak.objekt" */
export type Vak_ObjektKontrolny_BodArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrolny_Bod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrolny_Bod_Order_By>>;
  where?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
};


/** columns and relationships of "vak.objekt" */
export type Vak_ObjektKontrolny_Bod_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrolny_Bod_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrolny_Bod_Order_By>>;
  where?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
};

/** aggregated selection of "vak.objekt" */
export type Vak_Objekt_Aggregate = {
  __typename?: 'vak_objekt_aggregate';
  aggregate?: Maybe<Vak_Objekt_Aggregate_Fields>;
  nodes: Array<Vak_Objekt>;
};

/** aggregate fields of "vak.objekt" */
export type Vak_Objekt_Aggregate_Fields = {
  __typename?: 'vak_objekt_aggregate_fields';
  avg?: Maybe<Vak_Objekt_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Objekt_Max_Fields>;
  min?: Maybe<Vak_Objekt_Min_Fields>;
  stddev?: Maybe<Vak_Objekt_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Objekt_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Objekt_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Objekt_Sum_Fields>;
  var_pop?: Maybe<Vak_Objekt_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Objekt_Var_Samp_Fields>;
  variance?: Maybe<Vak_Objekt_Variance_Fields>;
};


/** aggregate fields of "vak.objekt" */
export type Vak_Objekt_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Objekt_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vak_Objekt_Avg_Fields = {
  __typename?: 'vak_objekt_avg_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_typ_fk?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vak.objekt". All fields are combined with a logical 'AND'. */
export type Vak_Objekt_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Objekt_Bool_Exp>>;
  _not?: InputMaybe<Vak_Objekt_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Objekt_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
  kontrolny_bod_aggregate?: InputMaybe<Vak_Kontrolny_Bod_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  objekt_typ?: InputMaybe<Vak_Objekt_Typ_Bool_Exp>;
  objekt_typ_fk?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.objekt" */
export enum Vak_Objekt_Constraint {
  /** unique or primary key constraint on columns "id" */
  ObjektPkey = 'objekt_pkey'
}

/** input type for incrementing numeric columns in table "vak.objekt" */
export type Vak_Objekt_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  objekt_typ_fk?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.objekt" */
export type Vak_Objekt_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  objekt_typ?: InputMaybe<Vak_Objekt_Typ_Obj_Rel_Insert_Input>;
  objekt_typ_fk?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Vak_Objekt_Max_Fields = {
  __typename?: 'vak_objekt_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  objekt_typ_fk?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Vak_Objekt_Min_Fields = {
  __typename?: 'vak_objekt_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  objekt_typ_fk?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "vak.objekt" */
export type Vak_Objekt_Mutation_Response = {
  __typename?: 'vak_objekt_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Objekt>;
};

/** input type for inserting object relation for remote table "vak.objekt" */
export type Vak_Objekt_Obj_Rel_Insert_Input = {
  data: Vak_Objekt_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Objekt_On_Conflict>;
};

/** on_conflict condition type for table "vak.objekt" */
export type Vak_Objekt_On_Conflict = {
  constraint: Vak_Objekt_Constraint;
  update_columns?: Array<Vak_Objekt_Update_Column>;
  where?: InputMaybe<Vak_Objekt_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.objekt". */
export type Vak_Objekt_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_aggregate?: InputMaybe<Vak_Kontrolny_Bod_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  objekt_typ?: InputMaybe<Vak_Objekt_Typ_Order_By>;
  objekt_typ_fk?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.objekt */
export type Vak_Objekt_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.objekt" */
export enum Vak_Objekt_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ObjektTypFk = 'objekt_typ_fk'
}

/** input type for updating data in table "vak.objekt" */
export type Vak_Objekt_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  objekt_typ_fk?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Vak_Objekt_Stddev_Fields = {
  __typename?: 'vak_objekt_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_typ_fk?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vak_Objekt_Stddev_Pop_Fields = {
  __typename?: 'vak_objekt_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_typ_fk?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vak_Objekt_Stddev_Samp_Fields = {
  __typename?: 'vak_objekt_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_typ_fk?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "vak_objekt" */
export type Vak_Objekt_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Objekt_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Objekt_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  objekt_typ_fk?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Vak_Objekt_Sum_Fields = {
  __typename?: 'vak_objekt_sum_fields';
  id?: Maybe<Scalars['Int']>;
  objekt_typ_fk?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "vak.objekt_typ" */
export type Vak_Objekt_Typ = {
  __typename?: 'vak_objekt_typ';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "vak.objekt_typ" */
export type Vak_Objekt_Typ_Aggregate = {
  __typename?: 'vak_objekt_typ_aggregate';
  aggregate?: Maybe<Vak_Objekt_Typ_Aggregate_Fields>;
  nodes: Array<Vak_Objekt_Typ>;
};

/** aggregate fields of "vak.objekt_typ" */
export type Vak_Objekt_Typ_Aggregate_Fields = {
  __typename?: 'vak_objekt_typ_aggregate_fields';
  avg?: Maybe<Vak_Objekt_Typ_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Objekt_Typ_Max_Fields>;
  min?: Maybe<Vak_Objekt_Typ_Min_Fields>;
  stddev?: Maybe<Vak_Objekt_Typ_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Objekt_Typ_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Objekt_Typ_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Objekt_Typ_Sum_Fields>;
  var_pop?: Maybe<Vak_Objekt_Typ_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Objekt_Typ_Var_Samp_Fields>;
  variance?: Maybe<Vak_Objekt_Typ_Variance_Fields>;
};


/** aggregate fields of "vak.objekt_typ" */
export type Vak_Objekt_Typ_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Objekt_Typ_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vak_Objekt_Typ_Avg_Fields = {
  __typename?: 'vak_objekt_typ_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vak.objekt_typ". All fields are combined with a logical 'AND'. */
export type Vak_Objekt_Typ_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Objekt_Typ_Bool_Exp>>;
  _not?: InputMaybe<Vak_Objekt_Typ_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Objekt_Typ_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.objekt_typ" */
export enum Vak_Objekt_Typ_Constraint {
  /** unique or primary key constraint on columns "id" */
  ObjektTypPkey = 'objekt_typ_pkey'
}

/** input type for incrementing numeric columns in table "vak.objekt_typ" */
export type Vak_Objekt_Typ_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.objekt_typ" */
export type Vak_Objekt_Typ_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Vak_Objekt_Typ_Max_Fields = {
  __typename?: 'vak_objekt_typ_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Vak_Objekt_Typ_Min_Fields = {
  __typename?: 'vak_objekt_typ_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "vak.objekt_typ" */
export type Vak_Objekt_Typ_Mutation_Response = {
  __typename?: 'vak_objekt_typ_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Objekt_Typ>;
};

/** input type for inserting object relation for remote table "vak.objekt_typ" */
export type Vak_Objekt_Typ_Obj_Rel_Insert_Input = {
  data: Vak_Objekt_Typ_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Objekt_Typ_On_Conflict>;
};

/** on_conflict condition type for table "vak.objekt_typ" */
export type Vak_Objekt_Typ_On_Conflict = {
  constraint: Vak_Objekt_Typ_Constraint;
  update_columns?: Array<Vak_Objekt_Typ_Update_Column>;
  where?: InputMaybe<Vak_Objekt_Typ_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.objekt_typ". */
export type Vak_Objekt_Typ_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.objekt_typ */
export type Vak_Objekt_Typ_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.objekt_typ" */
export enum Vak_Objekt_Typ_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "vak.objekt_typ" */
export type Vak_Objekt_Typ_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Vak_Objekt_Typ_Stddev_Fields = {
  __typename?: 'vak_objekt_typ_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vak_Objekt_Typ_Stddev_Pop_Fields = {
  __typename?: 'vak_objekt_typ_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vak_Objekt_Typ_Stddev_Samp_Fields = {
  __typename?: 'vak_objekt_typ_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "vak_objekt_typ" */
export type Vak_Objekt_Typ_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Objekt_Typ_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Objekt_Typ_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Vak_Objekt_Typ_Sum_Fields = {
  __typename?: 'vak_objekt_typ_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "vak.objekt_typ" */
export enum Vak_Objekt_Typ_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Vak_Objekt_Typ_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Objekt_Typ_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Objekt_Typ_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Objekt_Typ_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Objekt_Typ_Var_Pop_Fields = {
  __typename?: 'vak_objekt_typ_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vak_Objekt_Typ_Var_Samp_Fields = {
  __typename?: 'vak_objekt_typ_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vak_Objekt_Typ_Variance_Fields = {
  __typename?: 'vak_objekt_typ_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** update columns of table "vak.objekt" */
export enum Vak_Objekt_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ObjektTypFk = 'objekt_typ_fk'
}

export type Vak_Objekt_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Objekt_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Objekt_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Objekt_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Objekt_Var_Pop_Fields = {
  __typename?: 'vak_objekt_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_typ_fk?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vak_Objekt_Var_Samp_Fields = {
  __typename?: 'vak_objekt_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_typ_fk?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vak_Objekt_Variance_Fields = {
  __typename?: 'vak_objekt_variance_fields';
  id?: Maybe<Scalars['Float']>;
  objekt_typ_fk?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "vak.page" */
export type Vak_Page = {
  __typename?: 'vak_page';
  components?: Maybe<Scalars['jsonb']>;
  grouping?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  ordering?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['bpchar']>;
};


/** columns and relationships of "vak.page" */
export type Vak_PageComponentsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "vak.page" */
export type Vak_Page_Aggregate = {
  __typename?: 'vak_page_aggregate';
  aggregate?: Maybe<Vak_Page_Aggregate_Fields>;
  nodes: Array<Vak_Page>;
};

/** aggregate fields of "vak.page" */
export type Vak_Page_Aggregate_Fields = {
  __typename?: 'vak_page_aggregate_fields';
  avg?: Maybe<Vak_Page_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Page_Max_Fields>;
  min?: Maybe<Vak_Page_Min_Fields>;
  stddev?: Maybe<Vak_Page_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Page_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Page_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Page_Sum_Fields>;
  var_pop?: Maybe<Vak_Page_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Page_Var_Samp_Fields>;
  variance?: Maybe<Vak_Page_Variance_Fields>;
};


/** aggregate fields of "vak.page" */
export type Vak_Page_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Page_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vak_Page_Append_Input = {
  components?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Vak_Page_Avg_Fields = {
  __typename?: 'vak_page_avg_fields';
  grouping?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vak.page". All fields are combined with a logical 'AND'. */
export type Vak_Page_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Page_Bool_Exp>>;
  _not?: InputMaybe<Vak_Page_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Page_Bool_Exp>>;
  components?: InputMaybe<Jsonb_Comparison_Exp>;
  grouping?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  ordering?: InputMaybe<String_Comparison_Exp>;
  query?: InputMaybe<String_Comparison_Exp>;
  uri?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.page" */
export enum Vak_Page_Constraint {
  /** unique or primary key constraint on columns "id" */
  PagePkey = 'page_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vak_Page_Delete_At_Path_Input = {
  components?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Vak_Page_Delete_Elem_Input = {
  components?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vak_Page_Delete_Key_Input = {
  components?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "vak.page" */
export type Vak_Page_Inc_Input = {
  grouping?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.page" */
export type Vak_Page_Insert_Input = {
  components?: InputMaybe<Scalars['jsonb']>;
  grouping?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ordering?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Vak_Page_Max_Fields = {
  __typename?: 'vak_page_max_fields';
  grouping?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ordering?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type Vak_Page_Min_Fields = {
  __typename?: 'vak_page_min_fields';
  grouping?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ordering?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "vak.page" */
export type Vak_Page_Mutation_Response = {
  __typename?: 'vak_page_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Page>;
};

/** on_conflict condition type for table "vak.page" */
export type Vak_Page_On_Conflict = {
  constraint: Vak_Page_Constraint;
  update_columns?: Array<Vak_Page_Update_Column>;
  where?: InputMaybe<Vak_Page_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.page". */
export type Vak_Page_Order_By = {
  components?: InputMaybe<Order_By>;
  grouping?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ordering?: InputMaybe<Order_By>;
  query?: InputMaybe<Order_By>;
  uri?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.page */
export type Vak_Page_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vak_Page_Prepend_Input = {
  components?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "vak.page" */
export enum Vak_Page_Select_Column {
  /** column name */
  Components = 'components',
  /** column name */
  Grouping = 'grouping',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Ordering = 'ordering',
  /** column name */
  Query = 'query',
  /** column name */
  Uri = 'uri'
}

/** input type for updating data in table "vak.page" */
export type Vak_Page_Set_Input = {
  components?: InputMaybe<Scalars['jsonb']>;
  grouping?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ordering?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type Vak_Page_Stddev_Fields = {
  __typename?: 'vak_page_stddev_fields';
  grouping?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vak_Page_Stddev_Pop_Fields = {
  __typename?: 'vak_page_stddev_pop_fields';
  grouping?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vak_Page_Stddev_Samp_Fields = {
  __typename?: 'vak_page_stddev_samp_fields';
  grouping?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "vak_page" */
export type Vak_Page_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Page_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Page_Stream_Cursor_Value_Input = {
  components?: InputMaybe<Scalars['jsonb']>;
  grouping?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ordering?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate sum on columns */
export type Vak_Page_Sum_Fields = {
  __typename?: 'vak_page_sum_fields';
  grouping?: Maybe<Scalars['Int']>;
};

/** update columns of table "vak.page" */
export enum Vak_Page_Update_Column {
  /** column name */
  Components = 'components',
  /** column name */
  Grouping = 'grouping',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Ordering = 'ordering',
  /** column name */
  Query = 'query',
  /** column name */
  Uri = 'uri'
}

export type Vak_Page_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Vak_Page_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Vak_Page_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Vak_Page_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Vak_Page_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Page_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Vak_Page_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Page_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Page_Bool_Exp;
};

/** columns and relationships of "vak.page_uri_json" */
export type Vak_Page_Uri_Json = {
  __typename?: 'vak_page_uri_json';
  pages?: Maybe<Scalars['json']>;
};


/** columns and relationships of "vak.page_uri_json" */
export type Vak_Page_Uri_JsonPagesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "vak.page_uri_json" */
export type Vak_Page_Uri_Json_Aggregate = {
  __typename?: 'vak_page_uri_json_aggregate';
  aggregate?: Maybe<Vak_Page_Uri_Json_Aggregate_Fields>;
  nodes: Array<Vak_Page_Uri_Json>;
};

/** aggregate fields of "vak.page_uri_json" */
export type Vak_Page_Uri_Json_Aggregate_Fields = {
  __typename?: 'vak_page_uri_json_aggregate_fields';
  count: Scalars['Int'];
};


/** aggregate fields of "vak.page_uri_json" */
export type Vak_Page_Uri_Json_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Page_Uri_Json_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "vak.page_uri_json". All fields are combined with a logical 'AND'. */
export type Vak_Page_Uri_Json_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Page_Uri_Json_Bool_Exp>>;
  _not?: InputMaybe<Vak_Page_Uri_Json_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Page_Uri_Json_Bool_Exp>>;
  pages?: InputMaybe<Json_Comparison_Exp>;
};

/** Ordering options when selecting data from "vak.page_uri_json". */
export type Vak_Page_Uri_Json_Order_By = {
  pages?: InputMaybe<Order_By>;
};

/** select columns of table "vak.page_uri_json" */
export enum Vak_Page_Uri_Json_Select_Column {
  /** column name */
  Pages = 'pages'
}

/** Streaming cursor of the table "vak_page_uri_json" */
export type Vak_Page_Uri_Json_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Page_Uri_Json_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Page_Uri_Json_Stream_Cursor_Value_Input = {
  pages?: InputMaybe<Scalars['json']>;
};

/** aggregate var_pop on columns */
export type Vak_Page_Var_Pop_Fields = {
  __typename?: 'vak_page_var_pop_fields';
  grouping?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vak_Page_Var_Samp_Fields = {
  __typename?: 'vak_page_var_samp_fields';
  grouping?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vak_Page_Variance_Fields = {
  __typename?: 'vak_page_variance_fields';
  grouping?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "vak.pracovnik" */
export type Vak_Pracovnik = {
  __typename?: 'vak_pracovnik';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  obhliadka_sumar: Array<Vak_Pracovnik_Obhliadka_Sumar>;
  /** An aggregate relationship */
  obhliadka_sumar_aggregate: Vak_Pracovnik_Obhliadka_Sumar_Aggregate;
  platny?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  smena2pracovnik: Array<Vak_Smena2pracovnik>;
  /** An aggregate relationship */
  smena2pracovnik_aggregate: Vak_Smena2pracovnik_Aggregate;
};


/** columns and relationships of "vak.pracovnik" */
export type Vak_PracovnikObhliadka_SumarArgs = {
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
};


/** columns and relationships of "vak.pracovnik" */
export type Vak_PracovnikObhliadka_Sumar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
};


/** columns and relationships of "vak.pracovnik" */
export type Vak_PracovnikSmena2pracovnikArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena2pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena2pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
};


/** columns and relationships of "vak.pracovnik" */
export type Vak_PracovnikSmena2pracovnik_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena2pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena2pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
};

/** aggregated selection of "vak.pracovnik" */
export type Vak_Pracovnik_Aggregate = {
  __typename?: 'vak_pracovnik_aggregate';
  aggregate?: Maybe<Vak_Pracovnik_Aggregate_Fields>;
  nodes: Array<Vak_Pracovnik>;
};

/** aggregate fields of "vak.pracovnik" */
export type Vak_Pracovnik_Aggregate_Fields = {
  __typename?: 'vak_pracovnik_aggregate_fields';
  avg?: Maybe<Vak_Pracovnik_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Pracovnik_Max_Fields>;
  min?: Maybe<Vak_Pracovnik_Min_Fields>;
  stddev?: Maybe<Vak_Pracovnik_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Pracovnik_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Pracovnik_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Pracovnik_Sum_Fields>;
  var_pop?: Maybe<Vak_Pracovnik_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Pracovnik_Var_Samp_Fields>;
  variance?: Maybe<Vak_Pracovnik_Variance_Fields>;
};


/** aggregate fields of "vak.pracovnik" */
export type Vak_Pracovnik_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Pracovnik_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vak_Pracovnik_Avg_Fields = {
  __typename?: 'vak_pracovnik_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vak.pracovnik". All fields are combined with a logical 'AND'. */
export type Vak_Pracovnik_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Pracovnik_Bool_Exp>>;
  _not?: InputMaybe<Vak_Pracovnik_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Pracovnik_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  obhliadka_sumar?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  obhliadka_sumar_aggregate?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp>;
  platny?: InputMaybe<Boolean_Comparison_Exp>;
  smena2pracovnik?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
  smena2pracovnik_aggregate?: InputMaybe<Vak_Smena2pracovnik_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "vak.pracovnik" */
export enum Vak_Pracovnik_Constraint {
  /** unique or primary key constraint on columns "id" */
  PracovnikPkey = 'pracovnik_pkey'
}

/** input type for incrementing numeric columns in table "vak.pracovnik" */
export type Vak_Pracovnik_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.pracovnik" */
export type Vak_Pracovnik_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  obhliadka_sumar?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Arr_Rel_Insert_Input>;
  platny?: InputMaybe<Scalars['Boolean']>;
  smena2pracovnik?: InputMaybe<Vak_Smena2pracovnik_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Vak_Pracovnik_Max_Fields = {
  __typename?: 'vak_pracovnik_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Vak_Pracovnik_Min_Fields = {
  __typename?: 'vak_pracovnik_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "vak.pracovnik" */
export type Vak_Pracovnik_Mutation_Response = {
  __typename?: 'vak_pracovnik_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Pracovnik>;
};

/** columns and relationships of "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar = {
  __typename?: 'vak_pracovnik_obhliadka_sumar';
  id?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  pracovnik?: Maybe<Vak_Pracovnik>;
  pracovnika_fk?: Maybe<Scalars['Int']>;
  predpisane?: Maybe<Scalars['numeric']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_aggregate';
  aggregate?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Fields>;
  nodes: Array<Vak_Pracovnik_Obhliadka_Sumar>;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Var_Samp>;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Avg = {
  arguments: Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Corr = {
  arguments: Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Max = {
  arguments: Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Min = {
  arguments: Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Sum = {
  arguments: Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_aggregate_fields';
  avg?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Max_Fields>;
  min?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Min_Fields>;
  stddev?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Sum_Fields>;
  var_pop?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Var_Samp_Fields>;
  variance?: Maybe<Vak_Pracovnik_Obhliadka_Sumar_Variance_Fields>;
};


/** aggregate fields of "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Order_By = {
  avg?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Max_Order_By>;
  min?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Min_Order_By>;
  stddev?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Sum_Order_By>;
  var_pop?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Var_Samp_Order_By>;
  variance?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Arr_Rel_Insert_Input = {
  data: Array<Vak_Pracovnik_Obhliadka_Sumar_Insert_Input>;
};

/** aggregate avg on columns */
export type Vak_Pracovnik_Obhliadka_Sumar_Avg_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_avg_fields';
  ok?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Avg_Order_By = {
  ok?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vak.pracovnik_obhliadka_sumar". All fields are combined with a logical 'AND'. */
export type Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>>;
  _not?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Pracovnik_Obhliadka_Sumar_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  ok?: InputMaybe<Numeric_Comparison_Exp>;
  pracovnik?: InputMaybe<Vak_Pracovnik_Bool_Exp>;
  pracovnika_fk?: InputMaybe<Int_Comparison_Exp>;
  predpisane?: InputMaybe<Numeric_Comparison_Exp>;
  termin_month?: InputMaybe<Float8_Comparison_Exp>;
  termin_year?: InputMaybe<Float8_Comparison_Exp>;
};

/** input type for inserting data into table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['numeric']>;
  pracovnik?: InputMaybe<Vak_Pracovnik_Obj_Rel_Insert_Input>;
  pracovnika_fk?: InputMaybe<Scalars['Int']>;
  predpisane?: InputMaybe<Scalars['numeric']>;
  termin_month?: InputMaybe<Scalars['float8']>;
  termin_year?: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Vak_Pracovnik_Obhliadka_Sumar_Max_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_max_fields';
  id?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['numeric']>;
  pracovnika_fk?: Maybe<Scalars['Int']>;
  predpisane?: Maybe<Scalars['numeric']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  ok?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Pracovnik_Obhliadka_Sumar_Min_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_min_fields';
  id?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['numeric']>;
  pracovnika_fk?: Maybe<Scalars['Int']>;
  predpisane?: Maybe<Scalars['numeric']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  ok?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vak.pracovnik_obhliadka_sumar". */
export type Vak_Pracovnik_Obhliadka_Sumar_Order_By = {
  id?: InputMaybe<Order_By>;
  ok?: InputMaybe<Order_By>;
  pracovnik?: InputMaybe<Vak_Pracovnik_Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** select columns of table "vak.pracovnik_obhliadka_sumar" */
export enum Vak_Pracovnik_Obhliadka_Sumar_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Ok = 'ok',
  /** column name */
  PracovnikaFk = 'pracovnika_fk',
  /** column name */
  Predpisane = 'predpisane',
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** select "vak_pracovnik_obhliadka_sumar_aggregate_bool_exp_avg_arguments_columns" columns of table "vak.pracovnik_obhliadka_sumar" */
export enum Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** select "vak_pracovnik_obhliadka_sumar_aggregate_bool_exp_corr_arguments_columns" columns of table "vak.pracovnik_obhliadka_sumar" */
export enum Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** select "vak_pracovnik_obhliadka_sumar_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "vak.pracovnik_obhliadka_sumar" */
export enum Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** select "vak_pracovnik_obhliadka_sumar_aggregate_bool_exp_max_arguments_columns" columns of table "vak.pracovnik_obhliadka_sumar" */
export enum Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** select "vak_pracovnik_obhliadka_sumar_aggregate_bool_exp_min_arguments_columns" columns of table "vak.pracovnik_obhliadka_sumar" */
export enum Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** select "vak_pracovnik_obhliadka_sumar_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "vak.pracovnik_obhliadka_sumar" */
export enum Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** select "vak_pracovnik_obhliadka_sumar_aggregate_bool_exp_sum_arguments_columns" columns of table "vak.pracovnik_obhliadka_sumar" */
export enum Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** select "vak_pracovnik_obhliadka_sumar_aggregate_bool_exp_var_samp_arguments_columns" columns of table "vak.pracovnik_obhliadka_sumar" */
export enum Vak_Pracovnik_Obhliadka_Sumar_Select_Column_Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  TerminMonth = 'termin_month',
  /** column name */
  TerminYear = 'termin_year'
}

/** aggregate stddev on columns */
export type Vak_Pracovnik_Obhliadka_Sumar_Stddev_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_stddev_fields';
  ok?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Stddev_Order_By = {
  ok?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vak_Pracovnik_Obhliadka_Sumar_Stddev_Pop_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_stddev_pop_fields';
  ok?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Stddev_Pop_Order_By = {
  ok?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vak_Pracovnik_Obhliadka_Sumar_Stddev_Samp_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_stddev_samp_fields';
  ok?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Stddev_Samp_Order_By = {
  ok?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vak_pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Pracovnik_Obhliadka_Sumar_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Pracovnik_Obhliadka_Sumar_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['numeric']>;
  pracovnika_fk?: InputMaybe<Scalars['Int']>;
  predpisane?: InputMaybe<Scalars['numeric']>;
  termin_month?: InputMaybe<Scalars['float8']>;
  termin_year?: InputMaybe<Scalars['float8']>;
};

/** aggregate sum on columns */
export type Vak_Pracovnik_Obhliadka_Sumar_Sum_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_sum_fields';
  ok?: Maybe<Scalars['numeric']>;
  pracovnika_fk?: Maybe<Scalars['Int']>;
  predpisane?: Maybe<Scalars['numeric']>;
  termin_month?: Maybe<Scalars['float8']>;
  termin_year?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Sum_Order_By = {
  ok?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vak_Pracovnik_Obhliadka_Sumar_Var_Pop_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_var_pop_fields';
  ok?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Var_Pop_Order_By = {
  ok?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vak_Pracovnik_Obhliadka_Sumar_Var_Samp_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_var_samp_fields';
  ok?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Var_Samp_Order_By = {
  ok?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vak_Pracovnik_Obhliadka_Sumar_Variance_Fields = {
  __typename?: 'vak_pracovnik_obhliadka_sumar_variance_fields';
  ok?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  predpisane?: Maybe<Scalars['Float']>;
  termin_month?: Maybe<Scalars['Float']>;
  termin_year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vak.pracovnik_obhliadka_sumar" */
export type Vak_Pracovnik_Obhliadka_Sumar_Variance_Order_By = {
  ok?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  predpisane?: InputMaybe<Order_By>;
  termin_month?: InputMaybe<Order_By>;
  termin_year?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "vak.pracovnik" */
export type Vak_Pracovnik_Obj_Rel_Insert_Input = {
  data: Vak_Pracovnik_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Pracovnik_On_Conflict>;
};

/** on_conflict condition type for table "vak.pracovnik" */
export type Vak_Pracovnik_On_Conflict = {
  constraint: Vak_Pracovnik_Constraint;
  update_columns?: Array<Vak_Pracovnik_Update_Column>;
  where?: InputMaybe<Vak_Pracovnik_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.pracovnik". */
export type Vak_Pracovnik_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  obhliadka_sumar_aggregate?: InputMaybe<Vak_Pracovnik_Obhliadka_Sumar_Aggregate_Order_By>;
  platny?: InputMaybe<Order_By>;
  smena2pracovnik_aggregate?: InputMaybe<Vak_Smena2pracovnik_Aggregate_Order_By>;
};

/** primary key columns input for table: vak.pracovnik */
export type Vak_Pracovnik_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.pracovnik" */
export enum Vak_Pracovnik_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Platny = 'platny'
}

/** input type for updating data in table "vak.pracovnik" */
export type Vak_Pracovnik_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Vak_Pracovnik_Stddev_Fields = {
  __typename?: 'vak_pracovnik_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vak_Pracovnik_Stddev_Pop_Fields = {
  __typename?: 'vak_pracovnik_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vak_Pracovnik_Stddev_Samp_Fields = {
  __typename?: 'vak_pracovnik_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "vak_pracovnik" */
export type Vak_Pracovnik_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Pracovnik_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Pracovnik_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Vak_Pracovnik_Sum_Fields = {
  __typename?: 'vak_pracovnik_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "vak.pracovnik" */
export enum Vak_Pracovnik_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Platny = 'platny'
}

export type Vak_Pracovnik_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Pracovnik_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Pracovnik_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Pracovnik_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Pracovnik_Var_Pop_Fields = {
  __typename?: 'vak_pracovnik_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vak_Pracovnik_Var_Samp_Fields = {
  __typename?: 'vak_pracovnik_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vak_Pracovnik_Variance_Fields = {
  __typename?: 'vak_pracovnik_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola = {
  __typename?: 'vak_predpis_kontrola';
  id: Scalars['Int'];
  /** An array relationship */
  kontrola: Array<Vak_Kontrola>;
  /** An aggregate relationship */
  kontrola_aggregate: Vak_Kontrola_Aggregate;
  /** An object relationship */
  kontrolny_bod?: Maybe<Vak_Kontrolny_Bod>;
  kontrolny_bod_fk?: Maybe<Scalars['Int']>;
  platny?: Maybe<Scalars['Boolean']>;
  poradie?: Maybe<Scalars['Int']>;
  /** An object relationship */
  predpis_obhliadka?: Maybe<Vak_Predpis_Obhliadka>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
  termin?: Maybe<Scalars['time']>;
};


/** columns and relationships of "vak.predpis_kontrola" */
export type Vak_Predpis_KontrolaKontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.predpis_kontrola" */
export type Vak_Predpis_KontrolaKontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};

/** aggregated selection of "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Aggregate = {
  __typename?: 'vak_predpis_kontrola_aggregate';
  aggregate?: Maybe<Vak_Predpis_Kontrola_Aggregate_Fields>;
  nodes: Array<Vak_Predpis_Kontrola>;
};

export type Vak_Predpis_Kontrola_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Vak_Predpis_Kontrola_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Vak_Predpis_Kontrola_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Vak_Predpis_Kontrola_Aggregate_Bool_Exp_Count>;
};

export type Vak_Predpis_Kontrola_Aggregate_Bool_Exp_Bool_And = {
  arguments: Vak_Predpis_Kontrola_Select_Column_Vak_Predpis_Kontrola_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Predpis_Kontrola_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Vak_Predpis_Kontrola_Select_Column_Vak_Predpis_Kontrola_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Predpis_Kontrola_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Predpis_Kontrola_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Aggregate_Fields = {
  __typename?: 'vak_predpis_kontrola_aggregate_fields';
  avg?: Maybe<Vak_Predpis_Kontrola_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Predpis_Kontrola_Max_Fields>;
  min?: Maybe<Vak_Predpis_Kontrola_Min_Fields>;
  stddev?: Maybe<Vak_Predpis_Kontrola_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Predpis_Kontrola_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Predpis_Kontrola_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Predpis_Kontrola_Sum_Fields>;
  var_pop?: Maybe<Vak_Predpis_Kontrola_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Predpis_Kontrola_Var_Samp_Fields>;
  variance?: Maybe<Vak_Predpis_Kontrola_Variance_Fields>;
};


/** aggregate fields of "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Predpis_Kontrola_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Aggregate_Order_By = {
  avg?: InputMaybe<Vak_Predpis_Kontrola_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Predpis_Kontrola_Max_Order_By>;
  min?: InputMaybe<Vak_Predpis_Kontrola_Min_Order_By>;
  stddev?: InputMaybe<Vak_Predpis_Kontrola_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vak_Predpis_Kontrola_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vak_Predpis_Kontrola_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vak_Predpis_Kontrola_Sum_Order_By>;
  var_pop?: InputMaybe<Vak_Predpis_Kontrola_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vak_Predpis_Kontrola_Var_Samp_Order_By>;
  variance?: InputMaybe<Vak_Predpis_Kontrola_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Arr_Rel_Insert_Input = {
  data: Array<Vak_Predpis_Kontrola_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Predpis_Kontrola_On_Conflict>;
};

/** aggregate avg on columns */
export type Vak_Predpis_Kontrola_Avg_Fields = {
  __typename?: 'vak_predpis_kontrola_avg_fields';
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vak.predpis_kontrola". All fields are combined with a logical 'AND'. */
export type Vak_Predpis_Kontrola_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Predpis_Kontrola_Bool_Exp>>;
  _not?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Predpis_Kontrola_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kontrola?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Bool_Exp>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
  kontrolny_bod_fk?: InputMaybe<Int_Comparison_Exp>;
  platny?: InputMaybe<Boolean_Comparison_Exp>;
  poradie?: InputMaybe<Int_Comparison_Exp>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
  predpis_obhliadka_fk?: InputMaybe<Int_Comparison_Exp>;
  termin?: InputMaybe<Time_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.predpis_kontrola" */
export enum Vak_Predpis_Kontrola_Constraint {
  /** unique or primary key constraint on columns "kontrolny_bod_fk", "predpis_obhliadka_fk" */
  PredpisKontrolaKontrolnyBodFkPredpisObhliadkaFkKey = 'predpis_kontrola_kontrolny_bod_fk_predpis_obhliadka_fk_key',
  /** unique or primary key constraint on columns "id" */
  PredpisKontrolaPkey = 'predpis_kontrola_pkey'
}

/** input type for incrementing numeric columns in table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  kontrola?: InputMaybe<Vak_Kontrola_Arr_Rel_Insert_Input>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Obj_Rel_Insert_Input>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Obj_Rel_Insert_Input>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  termin?: InputMaybe<Scalars['time']>;
};

/** aggregate max on columns */
export type Vak_Predpis_Kontrola_Max_Fields = {
  __typename?: 'vak_predpis_kontrola_max_fields';
  id?: Maybe<Scalars['Int']>;
  kontrolny_bod_fk?: Maybe<Scalars['Int']>;
  poradie?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Predpis_Kontrola_Min_Fields = {
  __typename?: 'vak_predpis_kontrola_min_fields';
  id?: Maybe<Scalars['Int']>;
  kontrolny_bod_fk?: Maybe<Scalars['Int']>;
  poradie?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Mutation_Response = {
  __typename?: 'vak_predpis_kontrola_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Predpis_Kontrola>;
};

/** input type for inserting object relation for remote table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Obj_Rel_Insert_Input = {
  data: Vak_Predpis_Kontrola_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Predpis_Kontrola_On_Conflict>;
};

/** on_conflict condition type for table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_On_Conflict = {
  constraint: Vak_Predpis_Kontrola_Constraint;
  update_columns?: Array<Vak_Predpis_Kontrola_Update_Column>;
  where?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.predpis_kontrola". */
export type Vak_Predpis_Kontrola_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Order_By>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  platny?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
  termin?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.predpis_kontrola */
export type Vak_Predpis_Kontrola_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.predpis_kontrola" */
export enum Vak_Predpis_Kontrola_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  KontrolnyBodFk = 'kontrolny_bod_fk',
  /** column name */
  Platny = 'platny',
  /** column name */
  Poradie = 'poradie',
  /** column name */
  PredpisObhliadkaFk = 'predpis_obhliadka_fk',
  /** column name */
  Termin = 'termin'
}

/** select "vak_predpis_kontrola_aggregate_bool_exp_bool_and_arguments_columns" columns of table "vak.predpis_kontrola" */
export enum Vak_Predpis_Kontrola_Select_Column_Vak_Predpis_Kontrola_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Platny = 'platny'
}

/** select "vak_predpis_kontrola_aggregate_bool_exp_bool_or_arguments_columns" columns of table "vak.predpis_kontrola" */
export enum Vak_Predpis_Kontrola_Select_Column_Vak_Predpis_Kontrola_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Platny = 'platny'
}

/** input type for updating data in table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  termin?: InputMaybe<Scalars['time']>;
};

/** aggregate stddev on columns */
export type Vak_Predpis_Kontrola_Stddev_Fields = {
  __typename?: 'vak_predpis_kontrola_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vak_Predpis_Kontrola_Stddev_Pop_Fields = {
  __typename?: 'vak_predpis_kontrola_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vak_Predpis_Kontrola_Stddev_Samp_Fields = {
  __typename?: 'vak_predpis_kontrola_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vak_predpis_kontrola" */
export type Vak_Predpis_Kontrola_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Predpis_Kontrola_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Predpis_Kontrola_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_obhliadka_fk?: InputMaybe<Scalars['Int']>;
  termin?: InputMaybe<Scalars['time']>;
};

/** aggregate sum on columns */
export type Vak_Predpis_Kontrola_Sum_Fields = {
  __typename?: 'vak_predpis_kontrola_sum_fields';
  id?: Maybe<Scalars['Int']>;
  kontrolny_bod_fk?: Maybe<Scalars['Int']>;
  poradie?: Maybe<Scalars['Int']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
};

/** update columns of table "vak.predpis_kontrola" */
export enum Vak_Predpis_Kontrola_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  KontrolnyBodFk = 'kontrolny_bod_fk',
  /** column name */
  Platny = 'platny',
  /** column name */
  Poradie = 'poradie',
  /** column name */
  PredpisObhliadkaFk = 'predpis_obhliadka_fk',
  /** column name */
  Termin = 'termin'
}

export type Vak_Predpis_Kontrola_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Predpis_Kontrola_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Predpis_Kontrola_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Predpis_Kontrola_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Predpis_Kontrola_Var_Pop_Fields = {
  __typename?: 'vak_predpis_kontrola_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vak_Predpis_Kontrola_Var_Samp_Fields = {
  __typename?: 'vak_predpis_kontrola_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vak_Predpis_Kontrola_Variance_Fields = {
  __typename?: 'vak_predpis_kontrola_variance_fields';
  id?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  predpis_obhliadka_fk?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vak.predpis_kontrola" */
export type Vak_Predpis_Kontrola_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_obhliadka_fk?: InputMaybe<Order_By>;
};

/** columns and relationships of "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka = {
  __typename?: 'vak_predpis_obhliadka';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An array relationship */
  kontrola: Array<Vak_Kontrola>;
  /** An aggregate relationship */
  kontrola_aggregate: Vak_Kontrola_Aggregate;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  obhliadka_sumar: Array<Vak_Obhliadka_Sumar>;
  /** An aggregate relationship */
  obhliadka_sumar_aggregate: Vak_Obhliadka_Sumar_Aggregate;
  ok?: Maybe<Scalars['Boolean']>;
  platny?: Maybe<Scalars['Boolean']>;
  poradie?: Maybe<Scalars['Int']>;
  /** An array relationship */
  predpis_kontrola: Array<Vak_Predpis_Kontrola>;
  /** An aggregate relationship */
  predpis_kontrola_aggregate: Vak_Predpis_Kontrola_Aggregate;
  /** An object relationship */
  smena_typ?: Maybe<Vak_Smena_Typ>;
  smena_typ_fk?: Maybe<Scalars['Int']>;
  termin_cas?: Maybe<Scalars['time']>;
  termin_cas_do?: Maybe<Scalars['time']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "vak.predpis_obhliadka" */
export type Vak_Predpis_ObhliadkaKontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.predpis_obhliadka" */
export type Vak_Predpis_ObhliadkaKontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.predpis_obhliadka" */
export type Vak_Predpis_ObhliadkaObhliadka_SumarArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
};


/** columns and relationships of "vak.predpis_obhliadka" */
export type Vak_Predpis_ObhliadkaObhliadka_Sumar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
};


/** columns and relationships of "vak.predpis_obhliadka" */
export type Vak_Predpis_ObhliadkaPredpis_KontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
};


/** columns and relationships of "vak.predpis_obhliadka" */
export type Vak_Predpis_ObhliadkaPredpis_Kontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
};

/** aggregated selection of "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Aggregate = {
  __typename?: 'vak_predpis_obhliadka_aggregate';
  aggregate?: Maybe<Vak_Predpis_Obhliadka_Aggregate_Fields>;
  nodes: Array<Vak_Predpis_Obhliadka>;
};

export type Vak_Predpis_Obhliadka_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Vak_Predpis_Obhliadka_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Vak_Predpis_Obhliadka_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Vak_Predpis_Obhliadka_Aggregate_Bool_Exp_Count>;
};

export type Vak_Predpis_Obhliadka_Aggregate_Bool_Exp_Bool_And = {
  arguments: Vak_Predpis_Obhliadka_Select_Column_Vak_Predpis_Obhliadka_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Predpis_Obhliadka_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Vak_Predpis_Obhliadka_Select_Column_Vak_Predpis_Obhliadka_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Predpis_Obhliadka_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Predpis_Obhliadka_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Aggregate_Fields = {
  __typename?: 'vak_predpis_obhliadka_aggregate_fields';
  avg?: Maybe<Vak_Predpis_Obhliadka_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Predpis_Obhliadka_Max_Fields>;
  min?: Maybe<Vak_Predpis_Obhliadka_Min_Fields>;
  stddev?: Maybe<Vak_Predpis_Obhliadka_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Predpis_Obhliadka_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Predpis_Obhliadka_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Predpis_Obhliadka_Sum_Fields>;
  var_pop?: Maybe<Vak_Predpis_Obhliadka_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Predpis_Obhliadka_Var_Samp_Fields>;
  variance?: Maybe<Vak_Predpis_Obhliadka_Variance_Fields>;
};


/** aggregate fields of "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Predpis_Obhliadka_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Aggregate_Order_By = {
  avg?: InputMaybe<Vak_Predpis_Obhliadka_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Predpis_Obhliadka_Max_Order_By>;
  min?: InputMaybe<Vak_Predpis_Obhliadka_Min_Order_By>;
  stddev?: InputMaybe<Vak_Predpis_Obhliadka_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vak_Predpis_Obhliadka_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vak_Predpis_Obhliadka_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vak_Predpis_Obhliadka_Sum_Order_By>;
  var_pop?: InputMaybe<Vak_Predpis_Obhliadka_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vak_Predpis_Obhliadka_Var_Samp_Order_By>;
  variance?: InputMaybe<Vak_Predpis_Obhliadka_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Arr_Rel_Insert_Input = {
  data: Array<Vak_Predpis_Obhliadka_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Predpis_Obhliadka_On_Conflict>;
};

/** aggregate avg on columns */
export type Vak_Predpis_Obhliadka_Avg_Fields = {
  __typename?: 'vak_predpis_obhliadka_avg_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vak.predpis_obhliadka". All fields are combined with a logical 'AND'. */
export type Vak_Predpis_Obhliadka_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Predpis_Obhliadka_Bool_Exp>>;
  _not?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Predpis_Obhliadka_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kontrola?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  obhliadka_sumar?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
  obhliadka_sumar_aggregate?: InputMaybe<Vak_Obhliadka_Sumar_Aggregate_Bool_Exp>;
  ok?: InputMaybe<Boolean_Comparison_Exp>;
  platny?: InputMaybe<Boolean_Comparison_Exp>;
  poradie?: InputMaybe<Int_Comparison_Exp>;
  predpis_kontrola?: InputMaybe<Vak_Predpis_Kontrola_Bool_Exp>;
  predpis_kontrola_aggregate?: InputMaybe<Vak_Predpis_Kontrola_Aggregate_Bool_Exp>;
  smena_typ?: InputMaybe<Vak_Smena_Typ_Bool_Exp>;
  smena_typ_fk?: InputMaybe<Int_Comparison_Exp>;
  termin_cas?: InputMaybe<Time_Comparison_Exp>;
  termin_cas_do?: InputMaybe<Time_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.predpis_obhliadka" */
export enum Vak_Predpis_Obhliadka_Constraint {
  /** unique or primary key constraint on columns "id" */
  ObhliadkaPkey1 = 'obhliadka_pkey1'
}

/** input type for incrementing numeric columns in table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  poradie?: InputMaybe<Scalars['Int']>;
  smena_typ_fk?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  kontrola?: InputMaybe<Vak_Kontrola_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  obhliadka_sumar?: InputMaybe<Vak_Obhliadka_Sumar_Arr_Rel_Insert_Input>;
  ok?: InputMaybe<Scalars['Boolean']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  predpis_kontrola?: InputMaybe<Vak_Predpis_Kontrola_Arr_Rel_Insert_Input>;
  smena_typ?: InputMaybe<Vak_Smena_Typ_Obj_Rel_Insert_Input>;
  smena_typ_fk?: InputMaybe<Scalars['Int']>;
  termin_cas?: InputMaybe<Scalars['time']>;
  termin_cas_do?: InputMaybe<Scalars['time']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Vak_Predpis_Obhliadka_Max_Fields = {
  __typename?: 'vak_predpis_obhliadka_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  poradie?: Maybe<Scalars['Int']>;
  smena_typ_fk?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Predpis_Obhliadka_Min_Fields = {
  __typename?: 'vak_predpis_obhliadka_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  poradie?: Maybe<Scalars['Int']>;
  smena_typ_fk?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Mutation_Response = {
  __typename?: 'vak_predpis_obhliadka_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Predpis_Obhliadka>;
};

/** input type for inserting object relation for remote table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Obj_Rel_Insert_Input = {
  data: Vak_Predpis_Obhliadka_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Predpis_Obhliadka_On_Conflict>;
};

/** on_conflict condition type for table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_On_Conflict = {
  constraint: Vak_Predpis_Obhliadka_Constraint;
  update_columns?: Array<Vak_Predpis_Obhliadka_Update_Column>;
  where?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.predpis_obhliadka". */
export type Vak_Predpis_Obhliadka_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  obhliadka_sumar_aggregate?: InputMaybe<Vak_Obhliadka_Sumar_Aggregate_Order_By>;
  ok?: InputMaybe<Order_By>;
  platny?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  predpis_kontrola_aggregate?: InputMaybe<Vak_Predpis_Kontrola_Aggregate_Order_By>;
  smena_typ?: InputMaybe<Vak_Smena_Typ_Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
  termin_cas?: InputMaybe<Order_By>;
  termin_cas_do?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.predpis_obhliadka */
export type Vak_Predpis_Obhliadka_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.predpis_obhliadka" */
export enum Vak_Predpis_Obhliadka_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Ok = 'ok',
  /** column name */
  Platny = 'platny',
  /** column name */
  Poradie = 'poradie',
  /** column name */
  SmenaTypFk = 'smena_typ_fk',
  /** column name */
  TerminCas = 'termin_cas',
  /** column name */
  TerminCasDo = 'termin_cas_do',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "vak_predpis_obhliadka_aggregate_bool_exp_bool_and_arguments_columns" columns of table "vak.predpis_obhliadka" */
export enum Vak_Predpis_Obhliadka_Select_Column_Vak_Predpis_Obhliadka_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Ok = 'ok',
  /** column name */
  Platny = 'platny'
}

/** select "vak_predpis_obhliadka_aggregate_bool_exp_bool_or_arguments_columns" columns of table "vak.predpis_obhliadka" */
export enum Vak_Predpis_Obhliadka_Select_Column_Vak_Predpis_Obhliadka_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Ok = 'ok',
  /** column name */
  Platny = 'platny'
}

/** input type for updating data in table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['Boolean']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  smena_typ_fk?: InputMaybe<Scalars['Int']>;
  termin_cas?: InputMaybe<Scalars['time']>;
  termin_cas_do?: InputMaybe<Scalars['time']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Vak_Predpis_Obhliadka_Stddev_Fields = {
  __typename?: 'vak_predpis_obhliadka_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vak_Predpis_Obhliadka_Stddev_Pop_Fields = {
  __typename?: 'vak_predpis_obhliadka_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vak_Predpis_Obhliadka_Stddev_Samp_Fields = {
  __typename?: 'vak_predpis_obhliadka_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vak_predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Predpis_Obhliadka_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Predpis_Obhliadka_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['Boolean']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  smena_typ_fk?: InputMaybe<Scalars['Int']>;
  termin_cas?: InputMaybe<Scalars['time']>;
  termin_cas_do?: InputMaybe<Scalars['time']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Vak_Predpis_Obhliadka_Sum_Fields = {
  __typename?: 'vak_predpis_obhliadka_sum_fields';
  id?: Maybe<Scalars['Int']>;
  poradie?: Maybe<Scalars['Int']>;
  smena_typ_fk?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** update columns of table "vak.predpis_obhliadka" */
export enum Vak_Predpis_Obhliadka_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Ok = 'ok',
  /** column name */
  Platny = 'platny',
  /** column name */
  Poradie = 'poradie',
  /** column name */
  SmenaTypFk = 'smena_typ_fk',
  /** column name */
  TerminCas = 'termin_cas',
  /** column name */
  TerminCasDo = 'termin_cas_do',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Vak_Predpis_Obhliadka_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Predpis_Obhliadka_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Predpis_Obhliadka_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Predpis_Obhliadka_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Predpis_Obhliadka_Var_Pop_Fields = {
  __typename?: 'vak_predpis_obhliadka_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vak_Predpis_Obhliadka_Var_Samp_Fields = {
  __typename?: 'vak_predpis_obhliadka_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vak_Predpis_Obhliadka_Variance_Fields = {
  __typename?: 'vak_predpis_obhliadka_variance_fields';
  id?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vak.predpis_obhliadka" */
export type Vak_Predpis_Obhliadka_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** "Jeden den" roboty pracovnika */
export type Vak_Smena = {
  __typename?: 'vak_smena';
  id: Scalars['Int'];
  informacia_kancelaria?: Maybe<Scalars['String']>;
  informacia_teren?: Maybe<Scalars['String']>;
  /** An array relationship */
  kontrola: Array<Vak_Kontrola>;
  /** An aggregate relationship */
  kontrola_aggregate: Vak_Kontrola_Aggregate;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  obhliadka_sumar: Array<Vak_Obhliadka_Sumar>;
  /** An aggregate relationship */
  obhliadka_sumar_aggregate: Vak_Obhliadka_Sumar_Aggregate;
  ok?: Maybe<Scalars['Boolean']>;
  platny?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  smena2pracovnik: Array<Vak_Smena2pracovnik>;
  /** An aggregate relationship */
  smena2pracovnik_aggregate: Vak_Smena2pracovnik_Aggregate;
  /** An object relationship */
  smena_typ?: Maybe<Vak_Smena_Typ>;
  smena_typ_fk?: Maybe<Scalars['Int']>;
  termin_cas_do?: Maybe<Scalars['time']>;
  termin_cas_od?: Maybe<Scalars['time']>;
  termin_datum_do?: Maybe<Scalars['date']>;
  termin_datum_od?: Maybe<Scalars['date']>;
  termin_do?: Maybe<Scalars['timestamp']>;
  termin_od?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  uloha: Array<Vak_Uloha>;
  /** An aggregate relationship */
  uloha_aggregate: Vak_Uloha_Aggregate;
};


/** "Jeden den" roboty pracovnika */
export type Vak_SmenaKontrolaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


/** "Jeden den" roboty pracovnika */
export type Vak_SmenaKontrola_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Kontrola_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrola_Order_By>>;
  where?: InputMaybe<Vak_Kontrola_Bool_Exp>;
};


/** "Jeden den" roboty pracovnika */
export type Vak_SmenaObhliadka_SumarArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
};


/** "Jeden den" roboty pracovnika */
export type Vak_SmenaObhliadka_Sumar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Obhliadka_Sumar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Obhliadka_Sumar_Order_By>>;
  where?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
};


/** "Jeden den" roboty pracovnika */
export type Vak_SmenaSmena2pracovnikArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena2pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena2pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
};


/** "Jeden den" roboty pracovnika */
export type Vak_SmenaSmena2pracovnik_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena2pracovnik_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena2pracovnik_Order_By>>;
  where?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
};


/** "Jeden den" roboty pracovnika */
export type Vak_SmenaUlohaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};


/** "Jeden den" roboty pracovnika */
export type Vak_SmenaUloha_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};

/** columns and relationships of "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik = {
  __typename?: 'vak_smena2pracovnik';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  platny?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  pracovnik?: Maybe<Vak_Pracovnik>;
  pracovnika_fk?: Maybe<Scalars['Int']>;
  /** An object relationship */
  smena?: Maybe<Vak_Smena>;
  smena_fk?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Aggregate = {
  __typename?: 'vak_smena2pracovnik_aggregate';
  aggregate?: Maybe<Vak_Smena2pracovnik_Aggregate_Fields>;
  nodes: Array<Vak_Smena2pracovnik>;
};

export type Vak_Smena2pracovnik_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Vak_Smena2pracovnik_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Vak_Smena2pracovnik_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Vak_Smena2pracovnik_Aggregate_Bool_Exp_Count>;
};

export type Vak_Smena2pracovnik_Aggregate_Bool_Exp_Bool_And = {
  arguments: Vak_Smena2pracovnik_Select_Column_Vak_Smena2pracovnik_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Smena2pracovnik_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Vak_Smena2pracovnik_Select_Column_Vak_Smena2pracovnik_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Smena2pracovnik_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Smena2pracovnik_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Aggregate_Fields = {
  __typename?: 'vak_smena2pracovnik_aggregate_fields';
  avg?: Maybe<Vak_Smena2pracovnik_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Smena2pracovnik_Max_Fields>;
  min?: Maybe<Vak_Smena2pracovnik_Min_Fields>;
  stddev?: Maybe<Vak_Smena2pracovnik_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Smena2pracovnik_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Smena2pracovnik_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Smena2pracovnik_Sum_Fields>;
  var_pop?: Maybe<Vak_Smena2pracovnik_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Smena2pracovnik_Var_Samp_Fields>;
  variance?: Maybe<Vak_Smena2pracovnik_Variance_Fields>;
};


/** aggregate fields of "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Smena2pracovnik_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Aggregate_Order_By = {
  avg?: InputMaybe<Vak_Smena2pracovnik_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Smena2pracovnik_Max_Order_By>;
  min?: InputMaybe<Vak_Smena2pracovnik_Min_Order_By>;
  stddev?: InputMaybe<Vak_Smena2pracovnik_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vak_Smena2pracovnik_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vak_Smena2pracovnik_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vak_Smena2pracovnik_Sum_Order_By>;
  var_pop?: InputMaybe<Vak_Smena2pracovnik_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vak_Smena2pracovnik_Var_Samp_Order_By>;
  variance?: InputMaybe<Vak_Smena2pracovnik_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Arr_Rel_Insert_Input = {
  data: Array<Vak_Smena2pracovnik_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Smena2pracovnik_On_Conflict>;
};

/** aggregate avg on columns */
export type Vak_Smena2pracovnik_Avg_Fields = {
  __typename?: 'vak_smena2pracovnik_avg_fields';
  id?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vak.smena2pracovnik". All fields are combined with a logical 'AND'. */
export type Vak_Smena2pracovnik_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Smena2pracovnik_Bool_Exp>>;
  _not?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Smena2pracovnik_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  platny?: InputMaybe<Boolean_Comparison_Exp>;
  pracovnik?: InputMaybe<Vak_Pracovnik_Bool_Exp>;
  pracovnika_fk?: InputMaybe<Int_Comparison_Exp>;
  smena?: InputMaybe<Vak_Smena_Bool_Exp>;
  smena_fk?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.smena2pracovnik" */
export enum Vak_Smena2pracovnik_Constraint {
  /** unique or primary key constraint on columns "id" */
  Smena2pracovnikPkey = 'smena2pracovnik_pkey'
}

/** input type for incrementing numeric columns in table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  pracovnika_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  pracovnik?: InputMaybe<Vak_Pracovnik_Obj_Rel_Insert_Input>;
  pracovnika_fk?: InputMaybe<Scalars['Int']>;
  smena?: InputMaybe<Vak_Smena_Obj_Rel_Insert_Input>;
  smena_fk?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Vak_Smena2pracovnik_Max_Fields = {
  __typename?: 'vak_smena2pracovnik_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pracovnika_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Smena2pracovnik_Min_Fields = {
  __typename?: 'vak_smena2pracovnik_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pracovnika_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Mutation_Response = {
  __typename?: 'vak_smena2pracovnik_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Smena2pracovnik>;
};

/** on_conflict condition type for table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_On_Conflict = {
  constraint: Vak_Smena2pracovnik_Constraint;
  update_columns?: Array<Vak_Smena2pracovnik_Update_Column>;
  where?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.smena2pracovnik". */
export type Vak_Smena2pracovnik_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  platny?: InputMaybe<Order_By>;
  pracovnik?: InputMaybe<Vak_Pracovnik_Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena?: InputMaybe<Vak_Smena_Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.smena2pracovnik */
export type Vak_Smena2pracovnik_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.smena2pracovnik" */
export enum Vak_Smena2pracovnik_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Platny = 'platny',
  /** column name */
  PracovnikaFk = 'pracovnika_fk',
  /** column name */
  SmenaFk = 'smena_fk'
}

/** select "vak_smena2pracovnik_aggregate_bool_exp_bool_and_arguments_columns" columns of table "vak.smena2pracovnik" */
export enum Vak_Smena2pracovnik_Select_Column_Vak_Smena2pracovnik_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Platny = 'platny'
}

/** select "vak_smena2pracovnik_aggregate_bool_exp_bool_or_arguments_columns" columns of table "vak.smena2pracovnik" */
export enum Vak_Smena2pracovnik_Select_Column_Vak_Smena2pracovnik_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Platny = 'platny'
}

/** input type for updating data in table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  pracovnika_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Vak_Smena2pracovnik_Stddev_Fields = {
  __typename?: 'vak_smena2pracovnik_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vak_Smena2pracovnik_Stddev_Pop_Fields = {
  __typename?: 'vak_smena2pracovnik_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vak_Smena2pracovnik_Stddev_Samp_Fields = {
  __typename?: 'vak_smena2pracovnik_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vak_smena2pracovnik" */
export type Vak_Smena2pracovnik_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Smena2pracovnik_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Smena2pracovnik_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  pracovnika_fk?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Vak_Smena2pracovnik_Sum_Fields = {
  __typename?: 'vak_smena2pracovnik_sum_fields';
  id?: Maybe<Scalars['Int']>;
  pracovnika_fk?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** update columns of table "vak.smena2pracovnik" */
export enum Vak_Smena2pracovnik_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Platny = 'platny',
  /** column name */
  PracovnikaFk = 'pracovnika_fk',
  /** column name */
  SmenaFk = 'smena_fk'
}

export type Vak_Smena2pracovnik_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Smena2pracovnik_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Smena2pracovnik_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Smena2pracovnik_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Smena2pracovnik_Var_Pop_Fields = {
  __typename?: 'vak_smena2pracovnik_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vak_Smena2pracovnik_Var_Samp_Fields = {
  __typename?: 'vak_smena2pracovnik_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vak_Smena2pracovnik_Variance_Fields = {
  __typename?: 'vak_smena2pracovnik_variance_fields';
  id?: Maybe<Scalars['Float']>;
  pracovnika_fk?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vak.smena2pracovnik" */
export type Vak_Smena2pracovnik_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  pracovnika_fk?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
};

/** aggregated selection of "vak.smena" */
export type Vak_Smena_Aggregate = {
  __typename?: 'vak_smena_aggregate';
  aggregate?: Maybe<Vak_Smena_Aggregate_Fields>;
  nodes: Array<Vak_Smena>;
};

export type Vak_Smena_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Vak_Smena_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Vak_Smena_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Vak_Smena_Aggregate_Bool_Exp_Count>;
};

export type Vak_Smena_Aggregate_Bool_Exp_Bool_And = {
  arguments: Vak_Smena_Select_Column_Vak_Smena_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Smena_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Smena_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Vak_Smena_Select_Column_Vak_Smena_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Smena_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Smena_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Smena_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Smena_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.smena" */
export type Vak_Smena_Aggregate_Fields = {
  __typename?: 'vak_smena_aggregate_fields';
  avg?: Maybe<Vak_Smena_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Smena_Max_Fields>;
  min?: Maybe<Vak_Smena_Min_Fields>;
  stddev?: Maybe<Vak_Smena_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Smena_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Smena_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Smena_Sum_Fields>;
  var_pop?: Maybe<Vak_Smena_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Smena_Var_Samp_Fields>;
  variance?: Maybe<Vak_Smena_Variance_Fields>;
};


/** aggregate fields of "vak.smena" */
export type Vak_Smena_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Smena_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.smena" */
export type Vak_Smena_Aggregate_Order_By = {
  avg?: InputMaybe<Vak_Smena_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Smena_Max_Order_By>;
  min?: InputMaybe<Vak_Smena_Min_Order_By>;
  stddev?: InputMaybe<Vak_Smena_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vak_Smena_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vak_Smena_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vak_Smena_Sum_Order_By>;
  var_pop?: InputMaybe<Vak_Smena_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vak_Smena_Var_Samp_Order_By>;
  variance?: InputMaybe<Vak_Smena_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vak.smena" */
export type Vak_Smena_Arr_Rel_Insert_Input = {
  data: Array<Vak_Smena_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Smena_On_Conflict>;
};

/** aggregate avg on columns */
export type Vak_Smena_Avg_Fields = {
  __typename?: 'vak_smena_avg_fields';
  id?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vak.smena" */
export type Vak_Smena_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vak.smena". All fields are combined with a logical 'AND'. */
export type Vak_Smena_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Smena_Bool_Exp>>;
  _not?: InputMaybe<Vak_Smena_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Smena_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  informacia_kancelaria?: InputMaybe<String_Comparison_Exp>;
  informacia_teren?: InputMaybe<String_Comparison_Exp>;
  kontrola?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  obhliadka_sumar?: InputMaybe<Vak_Obhliadka_Sumar_Bool_Exp>;
  obhliadka_sumar_aggregate?: InputMaybe<Vak_Obhliadka_Sumar_Aggregate_Bool_Exp>;
  ok?: InputMaybe<Boolean_Comparison_Exp>;
  platny?: InputMaybe<Boolean_Comparison_Exp>;
  smena2pracovnik?: InputMaybe<Vak_Smena2pracovnik_Bool_Exp>;
  smena2pracovnik_aggregate?: InputMaybe<Vak_Smena2pracovnik_Aggregate_Bool_Exp>;
  smena_typ?: InputMaybe<Vak_Smena_Typ_Bool_Exp>;
  smena_typ_fk?: InputMaybe<Int_Comparison_Exp>;
  termin_cas_do?: InputMaybe<Time_Comparison_Exp>;
  termin_cas_od?: InputMaybe<Time_Comparison_Exp>;
  termin_datum_do?: InputMaybe<Date_Comparison_Exp>;
  termin_datum_od?: InputMaybe<Date_Comparison_Exp>;
  termin_do?: InputMaybe<Timestamp_Comparison_Exp>;
  termin_od?: InputMaybe<Timestamp_Comparison_Exp>;
  uloha?: InputMaybe<Vak_Uloha_Bool_Exp>;
  uloha_aggregate?: InputMaybe<Vak_Uloha_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "vak.smena" */
export enum Vak_Smena_Constraint {
  /** unique or primary key constraint on columns "id" */
  SmenaPkey = 'smena_pkey'
}

/** input type for incrementing numeric columns in table "vak.smena" */
export type Vak_Smena_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  smena_typ_fk?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.smena" */
export type Vak_Smena_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  informacia_kancelaria?: InputMaybe<Scalars['String']>;
  informacia_teren?: InputMaybe<Scalars['String']>;
  kontrola?: InputMaybe<Vak_Kontrola_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  obhliadka_sumar?: InputMaybe<Vak_Obhliadka_Sumar_Arr_Rel_Insert_Input>;
  ok?: InputMaybe<Scalars['Boolean']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  smena2pracovnik?: InputMaybe<Vak_Smena2pracovnik_Arr_Rel_Insert_Input>;
  smena_typ?: InputMaybe<Vak_Smena_Typ_Obj_Rel_Insert_Input>;
  smena_typ_fk?: InputMaybe<Scalars['Int']>;
  termin_cas_do?: InputMaybe<Scalars['time']>;
  termin_cas_od?: InputMaybe<Scalars['time']>;
  termin_datum_do?: InputMaybe<Scalars['date']>;
  termin_datum_od?: InputMaybe<Scalars['date']>;
  termin_do?: InputMaybe<Scalars['timestamp']>;
  termin_od?: InputMaybe<Scalars['timestamp']>;
  uloha?: InputMaybe<Vak_Uloha_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Vak_Smena_Max_Fields = {
  __typename?: 'vak_smena_max_fields';
  id?: Maybe<Scalars['Int']>;
  informacia_kancelaria?: Maybe<Scalars['String']>;
  informacia_teren?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  smena_typ_fk?: Maybe<Scalars['Int']>;
  termin_datum_do?: Maybe<Scalars['date']>;
  termin_datum_od?: Maybe<Scalars['date']>;
  termin_do?: Maybe<Scalars['timestamp']>;
  termin_od?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "vak.smena" */
export type Vak_Smena_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  informacia_kancelaria?: InputMaybe<Order_By>;
  informacia_teren?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
  termin_datum_do?: InputMaybe<Order_By>;
  termin_datum_od?: InputMaybe<Order_By>;
  termin_do?: InputMaybe<Order_By>;
  termin_od?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Smena_Min_Fields = {
  __typename?: 'vak_smena_min_fields';
  id?: Maybe<Scalars['Int']>;
  informacia_kancelaria?: Maybe<Scalars['String']>;
  informacia_teren?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  smena_typ_fk?: Maybe<Scalars['Int']>;
  termin_datum_do?: Maybe<Scalars['date']>;
  termin_datum_od?: Maybe<Scalars['date']>;
  termin_do?: Maybe<Scalars['timestamp']>;
  termin_od?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "vak.smena" */
export type Vak_Smena_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  informacia_kancelaria?: InputMaybe<Order_By>;
  informacia_teren?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
  termin_datum_do?: InputMaybe<Order_By>;
  termin_datum_od?: InputMaybe<Order_By>;
  termin_do?: InputMaybe<Order_By>;
  termin_od?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vak.smena" */
export type Vak_Smena_Mutation_Response = {
  __typename?: 'vak_smena_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Smena>;
};

/** input type for inserting object relation for remote table "vak.smena" */
export type Vak_Smena_Obj_Rel_Insert_Input = {
  data: Vak_Smena_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Smena_On_Conflict>;
};

/** on_conflict condition type for table "vak.smena" */
export type Vak_Smena_On_Conflict = {
  constraint: Vak_Smena_Constraint;
  update_columns?: Array<Vak_Smena_Update_Column>;
  where?: InputMaybe<Vak_Smena_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.smena". */
export type Vak_Smena_Order_By = {
  id?: InputMaybe<Order_By>;
  informacia_kancelaria?: InputMaybe<Order_By>;
  informacia_teren?: InputMaybe<Order_By>;
  kontrola_aggregate?: InputMaybe<Vak_Kontrola_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  obhliadka_sumar_aggregate?: InputMaybe<Vak_Obhliadka_Sumar_Aggregate_Order_By>;
  ok?: InputMaybe<Order_By>;
  platny?: InputMaybe<Order_By>;
  smena2pracovnik_aggregate?: InputMaybe<Vak_Smena2pracovnik_Aggregate_Order_By>;
  smena_typ?: InputMaybe<Vak_Smena_Typ_Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
  termin_cas_do?: InputMaybe<Order_By>;
  termin_cas_od?: InputMaybe<Order_By>;
  termin_datum_do?: InputMaybe<Order_By>;
  termin_datum_od?: InputMaybe<Order_By>;
  termin_do?: InputMaybe<Order_By>;
  termin_od?: InputMaybe<Order_By>;
  uloha_aggregate?: InputMaybe<Vak_Uloha_Aggregate_Order_By>;
};

/** primary key columns input for table: vak.smena */
export type Vak_Smena_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.smena" */
export enum Vak_Smena_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InformaciaKancelaria = 'informacia_kancelaria',
  /** column name */
  InformaciaTeren = 'informacia_teren',
  /** column name */
  Name = 'name',
  /** column name */
  Ok = 'ok',
  /** column name */
  Platny = 'platny',
  /** column name */
  SmenaTypFk = 'smena_typ_fk',
  /** column name */
  TerminCasDo = 'termin_cas_do',
  /** column name */
  TerminCasOd = 'termin_cas_od',
  /** column name */
  TerminDatumDo = 'termin_datum_do',
  /** column name */
  TerminDatumOd = 'termin_datum_od',
  /** column name */
  TerminDo = 'termin_do',
  /** column name */
  TerminOd = 'termin_od'
}

/** select "vak_smena_aggregate_bool_exp_bool_and_arguments_columns" columns of table "vak.smena" */
export enum Vak_Smena_Select_Column_Vak_Smena_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Ok = 'ok',
  /** column name */
  Platny = 'platny'
}

/** select "vak_smena_aggregate_bool_exp_bool_or_arguments_columns" columns of table "vak.smena" */
export enum Vak_Smena_Select_Column_Vak_Smena_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Ok = 'ok',
  /** column name */
  Platny = 'platny'
}

/** input type for updating data in table "vak.smena" */
export type Vak_Smena_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  informacia_kancelaria?: InputMaybe<Scalars['String']>;
  informacia_teren?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['Boolean']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  smena_typ_fk?: InputMaybe<Scalars['Int']>;
  termin_cas_do?: InputMaybe<Scalars['time']>;
  termin_cas_od?: InputMaybe<Scalars['time']>;
  termin_datum_do?: InputMaybe<Scalars['date']>;
  termin_datum_od?: InputMaybe<Scalars['date']>;
  termin_do?: InputMaybe<Scalars['timestamp']>;
  termin_od?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Vak_Smena_Stddev_Fields = {
  __typename?: 'vak_smena_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vak.smena" */
export type Vak_Smena_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vak_Smena_Stddev_Pop_Fields = {
  __typename?: 'vak_smena_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vak.smena" */
export type Vak_Smena_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vak_Smena_Stddev_Samp_Fields = {
  __typename?: 'vak_smena_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vak.smena" */
export type Vak_Smena_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vak_smena" */
export type Vak_Smena_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Smena_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Smena_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  informacia_kancelaria?: InputMaybe<Scalars['String']>;
  informacia_teren?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ok?: InputMaybe<Scalars['Boolean']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  smena_typ_fk?: InputMaybe<Scalars['Int']>;
  termin_cas_do?: InputMaybe<Scalars['time']>;
  termin_cas_od?: InputMaybe<Scalars['time']>;
  termin_datum_do?: InputMaybe<Scalars['date']>;
  termin_datum_od?: InputMaybe<Scalars['date']>;
  termin_do?: InputMaybe<Scalars['timestamp']>;
  termin_od?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Vak_Smena_Sum_Fields = {
  __typename?: 'vak_smena_sum_fields';
  id?: Maybe<Scalars['Int']>;
  smena_typ_fk?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vak.smena" */
export type Vak_Smena_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** columns and relationships of "vak.smena_typ" */
export type Vak_Smena_Typ = {
  __typename?: 'vak_smena_typ';
  class?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  platny?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  predpis_obhliadka: Array<Vak_Predpis_Obhliadka>;
  /** An aggregate relationship */
  predpis_obhliadka_aggregate: Vak_Predpis_Obhliadka_Aggregate;
  /** An array relationship */
  smena: Array<Vak_Smena>;
  /** An aggregate relationship */
  smena_aggregate: Vak_Smena_Aggregate;
  /** An object relationship */
  smena_typ_vstup?: Maybe<Vak_Smena_Typ_Vstup>;
  tolerancia?: Maybe<Scalars['time']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vstup?: Maybe<Vak_Smena_Typ_Vstup_Enum>;
};


/** columns and relationships of "vak.smena_typ" */
export type Vak_Smena_TypPredpis_ObhliadkaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Obhliadka_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Obhliadka_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
};


/** columns and relationships of "vak.smena_typ" */
export type Vak_Smena_TypPredpis_Obhliadka_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Predpis_Obhliadka_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Predpis_Obhliadka_Order_By>>;
  where?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
};


/** columns and relationships of "vak.smena_typ" */
export type Vak_Smena_TypSmenaArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Order_By>>;
  where?: InputMaybe<Vak_Smena_Bool_Exp>;
};


/** columns and relationships of "vak.smena_typ" */
export type Vak_Smena_TypSmena_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Smena_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Order_By>>;
  where?: InputMaybe<Vak_Smena_Bool_Exp>;
};

/** aggregated selection of "vak.smena_typ" */
export type Vak_Smena_Typ_Aggregate = {
  __typename?: 'vak_smena_typ_aggregate';
  aggregate?: Maybe<Vak_Smena_Typ_Aggregate_Fields>;
  nodes: Array<Vak_Smena_Typ>;
};

/** aggregate fields of "vak.smena_typ" */
export type Vak_Smena_Typ_Aggregate_Fields = {
  __typename?: 'vak_smena_typ_aggregate_fields';
  avg?: Maybe<Vak_Smena_Typ_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Smena_Typ_Max_Fields>;
  min?: Maybe<Vak_Smena_Typ_Min_Fields>;
  stddev?: Maybe<Vak_Smena_Typ_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Smena_Typ_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Smena_Typ_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Smena_Typ_Sum_Fields>;
  var_pop?: Maybe<Vak_Smena_Typ_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Smena_Typ_Var_Samp_Fields>;
  variance?: Maybe<Vak_Smena_Typ_Variance_Fields>;
};


/** aggregate fields of "vak.smena_typ" */
export type Vak_Smena_Typ_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Smena_Typ_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vak_Smena_Typ_Avg_Fields = {
  __typename?: 'vak_smena_typ_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vak.smena_typ". All fields are combined with a logical 'AND'. */
export type Vak_Smena_Typ_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Smena_Typ_Bool_Exp>>;
  _not?: InputMaybe<Vak_Smena_Typ_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Smena_Typ_Bool_Exp>>;
  class?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  platny?: InputMaybe<Boolean_Comparison_Exp>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Bool_Exp>;
  predpis_obhliadka_aggregate?: InputMaybe<Vak_Predpis_Obhliadka_Aggregate_Bool_Exp>;
  smena?: InputMaybe<Vak_Smena_Bool_Exp>;
  smena_aggregate?: InputMaybe<Vak_Smena_Aggregate_Bool_Exp>;
  smena_typ_vstup?: InputMaybe<Vak_Smena_Typ_Vstup_Bool_Exp>;
  tolerancia?: InputMaybe<Time_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vstup?: InputMaybe<Vak_Smena_Typ_Vstup_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.smena_typ" */
export enum Vak_Smena_Typ_Constraint {
  /** unique or primary key constraint on columns "id" */
  SmenaTypPkey = 'smena_typ_pkey'
}

/** input type for incrementing numeric columns in table "vak.smena_typ" */
export type Vak_Smena_Typ_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vak.smena_typ" */
export type Vak_Smena_Typ_Insert_Input = {
  class?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  predpis_obhliadka?: InputMaybe<Vak_Predpis_Obhliadka_Arr_Rel_Insert_Input>;
  smena?: InputMaybe<Vak_Smena_Arr_Rel_Insert_Input>;
  smena_typ_vstup?: InputMaybe<Vak_Smena_Typ_Vstup_Obj_Rel_Insert_Input>;
  tolerancia?: InputMaybe<Scalars['time']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vstup?: InputMaybe<Vak_Smena_Typ_Vstup_Enum>;
};

/** aggregate max on columns */
export type Vak_Smena_Typ_Max_Fields = {
  __typename?: 'vak_smena_typ_max_fields';
  class?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Vak_Smena_Typ_Min_Fields = {
  __typename?: 'vak_smena_typ_min_fields';
  class?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "vak.smena_typ" */
export type Vak_Smena_Typ_Mutation_Response = {
  __typename?: 'vak_smena_typ_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Smena_Typ>;
};

/** input type for inserting object relation for remote table "vak.smena_typ" */
export type Vak_Smena_Typ_Obj_Rel_Insert_Input = {
  data: Vak_Smena_Typ_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Smena_Typ_On_Conflict>;
};

/** on_conflict condition type for table "vak.smena_typ" */
export type Vak_Smena_Typ_On_Conflict = {
  constraint: Vak_Smena_Typ_Constraint;
  update_columns?: Array<Vak_Smena_Typ_Update_Column>;
  where?: InputMaybe<Vak_Smena_Typ_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.smena_typ". */
export type Vak_Smena_Typ_Order_By = {
  class?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  platny?: InputMaybe<Order_By>;
  predpis_obhliadka_aggregate?: InputMaybe<Vak_Predpis_Obhliadka_Aggregate_Order_By>;
  smena_aggregate?: InputMaybe<Vak_Smena_Aggregate_Order_By>;
  smena_typ_vstup?: InputMaybe<Vak_Smena_Typ_Vstup_Order_By>;
  tolerancia?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vstup?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.smena_typ */
export type Vak_Smena_Typ_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vak.smena_typ" */
export enum Vak_Smena_Typ_Select_Column {
  /** column name */
  Class = 'class',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Platny = 'platny',
  /** column name */
  Tolerancia = 'tolerancia',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vstup = 'vstup'
}

/** input type for updating data in table "vak.smena_typ" */
export type Vak_Smena_Typ_Set_Input = {
  class?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  tolerancia?: InputMaybe<Scalars['time']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vstup?: InputMaybe<Vak_Smena_Typ_Vstup_Enum>;
};

/** aggregate stddev on columns */
export type Vak_Smena_Typ_Stddev_Fields = {
  __typename?: 'vak_smena_typ_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vak_Smena_Typ_Stddev_Pop_Fields = {
  __typename?: 'vak_smena_typ_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vak_Smena_Typ_Stddev_Samp_Fields = {
  __typename?: 'vak_smena_typ_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "vak_smena_typ" */
export type Vak_Smena_Typ_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Smena_Typ_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Smena_Typ_Stream_Cursor_Value_Input = {
  class?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  tolerancia?: InputMaybe<Scalars['time']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vstup?: InputMaybe<Vak_Smena_Typ_Vstup_Enum>;
};

/** aggregate sum on columns */
export type Vak_Smena_Typ_Sum_Fields = {
  __typename?: 'vak_smena_typ_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "vak.smena_typ" */
export enum Vak_Smena_Typ_Update_Column {
  /** column name */
  Class = 'class',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Platny = 'platny',
  /** column name */
  Tolerancia = 'tolerancia',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vstup = 'vstup'
}

export type Vak_Smena_Typ_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Smena_Typ_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Smena_Typ_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Smena_Typ_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Smena_Typ_Var_Pop_Fields = {
  __typename?: 'vak_smena_typ_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vak_Smena_Typ_Var_Samp_Fields = {
  __typename?: 'vak_smena_typ_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vak_Smena_Typ_Variance_Fields = {
  __typename?: 'vak_smena_typ_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** enum */
export type Vak_Smena_Typ_Vstup = {
  __typename?: 'vak_smena_typ_vstup';
  name: Scalars['String'];
  smena_typ: Scalars['String'];
};

/** aggregated selection of "vak.smena_typ_vstup" */
export type Vak_Smena_Typ_Vstup_Aggregate = {
  __typename?: 'vak_smena_typ_vstup_aggregate';
  aggregate?: Maybe<Vak_Smena_Typ_Vstup_Aggregate_Fields>;
  nodes: Array<Vak_Smena_Typ_Vstup>;
};

/** aggregate fields of "vak.smena_typ_vstup" */
export type Vak_Smena_Typ_Vstup_Aggregate_Fields = {
  __typename?: 'vak_smena_typ_vstup_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Vak_Smena_Typ_Vstup_Max_Fields>;
  min?: Maybe<Vak_Smena_Typ_Vstup_Min_Fields>;
};


/** aggregate fields of "vak.smena_typ_vstup" */
export type Vak_Smena_Typ_Vstup_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "vak.smena_typ_vstup". All fields are combined with a logical 'AND'. */
export type Vak_Smena_Typ_Vstup_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Bool_Exp>>;
  _not?: InputMaybe<Vak_Smena_Typ_Vstup_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  smena_typ?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.smena_typ_vstup" */
export enum Vak_Smena_Typ_Vstup_Constraint {
  /** unique or primary key constraint on columns "smena_typ" */
  SmenaTypVstupPkey = 'smena_typ_vstup_pkey'
}

export enum Vak_Smena_Typ_Vstup_Enum {
  /** PORUCHA */
  Porucha = 'PORUCHA',
  /** ZTEST01 */
  Ztest01 = 'ZTEST01'
}

/** Boolean expression to compare columns of type "vak_smena_typ_vstup_enum". All fields are combined with logical 'AND'. */
export type Vak_Smena_Typ_Vstup_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Vak_Smena_Typ_Vstup_Enum>;
  _in?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Vak_Smena_Typ_Vstup_Enum>;
  _nin?: InputMaybe<Array<Vak_Smena_Typ_Vstup_Enum>>;
};

/** input type for inserting data into table "vak.smena_typ_vstup" */
export type Vak_Smena_Typ_Vstup_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  smena_typ?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Vak_Smena_Typ_Vstup_Max_Fields = {
  __typename?: 'vak_smena_typ_vstup_max_fields';
  name?: Maybe<Scalars['String']>;
  smena_typ?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Vak_Smena_Typ_Vstup_Min_Fields = {
  __typename?: 'vak_smena_typ_vstup_min_fields';
  name?: Maybe<Scalars['String']>;
  smena_typ?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "vak.smena_typ_vstup" */
export type Vak_Smena_Typ_Vstup_Mutation_Response = {
  __typename?: 'vak_smena_typ_vstup_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Smena_Typ_Vstup>;
};

/** input type for inserting object relation for remote table "vak.smena_typ_vstup" */
export type Vak_Smena_Typ_Vstup_Obj_Rel_Insert_Input = {
  data: Vak_Smena_Typ_Vstup_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Smena_Typ_Vstup_On_Conflict>;
};

/** on_conflict condition type for table "vak.smena_typ_vstup" */
export type Vak_Smena_Typ_Vstup_On_Conflict = {
  constraint: Vak_Smena_Typ_Vstup_Constraint;
  update_columns?: Array<Vak_Smena_Typ_Vstup_Update_Column>;
  where?: InputMaybe<Vak_Smena_Typ_Vstup_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.smena_typ_vstup". */
export type Vak_Smena_Typ_Vstup_Order_By = {
  name?: InputMaybe<Order_By>;
  smena_typ?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.smena_typ_vstup */
export type Vak_Smena_Typ_Vstup_Pk_Columns_Input = {
  smena_typ: Scalars['String'];
};

/** select columns of table "vak.smena_typ_vstup" */
export enum Vak_Smena_Typ_Vstup_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  SmenaTyp = 'smena_typ'
}

/** input type for updating data in table "vak.smena_typ_vstup" */
export type Vak_Smena_Typ_Vstup_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
  smena_typ?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "vak_smena_typ_vstup" */
export type Vak_Smena_Typ_Vstup_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Smena_Typ_Vstup_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Smena_Typ_Vstup_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
  smena_typ?: InputMaybe<Scalars['String']>;
};

/** update columns of table "vak.smena_typ_vstup" */
export enum Vak_Smena_Typ_Vstup_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  SmenaTyp = 'smena_typ'
}

export type Vak_Smena_Typ_Vstup_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Smena_Typ_Vstup_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Smena_Typ_Vstup_Bool_Exp;
};

/** update columns of table "vak.smena" */
export enum Vak_Smena_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InformaciaKancelaria = 'informacia_kancelaria',
  /** column name */
  InformaciaTeren = 'informacia_teren',
  /** column name */
  Name = 'name',
  /** column name */
  Ok = 'ok',
  /** column name */
  Platny = 'platny',
  /** column name */
  SmenaTypFk = 'smena_typ_fk',
  /** column name */
  TerminCasDo = 'termin_cas_do',
  /** column name */
  TerminCasOd = 'termin_cas_od',
  /** column name */
  TerminDatumDo = 'termin_datum_do',
  /** column name */
  TerminDatumOd = 'termin_datum_od',
  /** column name */
  TerminDo = 'termin_do',
  /** column name */
  TerminOd = 'termin_od'
}

export type Vak_Smena_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Smena_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Smena_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Smena_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Smena_Var_Pop_Fields = {
  __typename?: 'vak_smena_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vak.smena" */
export type Vak_Smena_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vak_Smena_Var_Samp_Fields = {
  __typename?: 'vak_smena_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vak.smena" */
export type Vak_Smena_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vak_Smena_Variance_Fields = {
  __typename?: 'vak_smena_variance_fields';
  id?: Maybe<Scalars['Float']>;
  smena_typ_fk?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vak.smena" */
export type Vak_Smena_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  smena_typ_fk?: InputMaybe<Order_By>;
};

/** columns and relationships of "vak.theme" */
export type Vak_Theme = {
  __typename?: 'vak_theme';
  created_at: Scalars['timestamptz'];
  default: Scalars['Boolean'];
  id: Scalars['String'];
  theme: Scalars['jsonb'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "vak.theme" */
export type Vak_ThemeThemeArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "vak.theme" */
export type Vak_Theme_Aggregate = {
  __typename?: 'vak_theme_aggregate';
  aggregate?: Maybe<Vak_Theme_Aggregate_Fields>;
  nodes: Array<Vak_Theme>;
};

/** aggregate fields of "vak.theme" */
export type Vak_Theme_Aggregate_Fields = {
  __typename?: 'vak_theme_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Vak_Theme_Max_Fields>;
  min?: Maybe<Vak_Theme_Min_Fields>;
};


/** aggregate fields of "vak.theme" */
export type Vak_Theme_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Theme_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vak_Theme_Append_Input = {
  theme?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "vak.theme". All fields are combined with a logical 'AND'. */
export type Vak_Theme_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Theme_Bool_Exp>>;
  _not?: InputMaybe<Vak_Theme_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Theme_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  default?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  theme?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.theme" */
export enum Vak_Theme_Constraint {
  /** unique or primary key constraint on columns "id" */
  ThemePkey = 'theme_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vak_Theme_Delete_At_Path_Input = {
  theme?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Vak_Theme_Delete_Elem_Input = {
  theme?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vak_Theme_Delete_Key_Input = {
  theme?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "vak.theme" */
export type Vak_Theme_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Vak_Theme_Max_Fields = {
  __typename?: 'vak_theme_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Vak_Theme_Min_Fields = {
  __typename?: 'vak_theme_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "vak.theme" */
export type Vak_Theme_Mutation_Response = {
  __typename?: 'vak_theme_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Theme>;
};

/** on_conflict condition type for table "vak.theme" */
export type Vak_Theme_On_Conflict = {
  constraint: Vak_Theme_Constraint;
  update_columns?: Array<Vak_Theme_Update_Column>;
  where?: InputMaybe<Vak_Theme_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.theme". */
export type Vak_Theme_Order_By = {
  created_at?: InputMaybe<Order_By>;
  default?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  theme?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.theme */
export type Vak_Theme_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vak_Theme_Prepend_Input = {
  theme?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "vak.theme" */
export enum Vak_Theme_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Theme = 'theme',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "vak.theme" */
export type Vak_Theme_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "vak_theme" */
export type Vak_Theme_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Theme_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Theme_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "vak.theme" */
export enum Vak_Theme_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  Id = 'id',
  /** column name */
  Theme = 'theme',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Vak_Theme_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Vak_Theme_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Vak_Theme_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Vak_Theme_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Vak_Theme_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Vak_Theme_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Theme_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Theme_Bool_Exp;
};

/** columns and relationships of "vak.uloha" */
export type Vak_Uloha = {
  __typename?: 'vak_uloha';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** Priznak ze je uloha vyriesena (zaklikol checkbox, vyplnil cislo, vyplnil text) */
  done: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  kontrola?: Maybe<Vak_Kontrola>;
  kontrola_fk?: Maybe<Scalars['Int']>;
  /** An object relationship */
  kontrolny_bod: Vak_Kontrolny_Bod;
  kontrolny_bod_fk: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  platny?: Maybe<Scalars['Boolean']>;
  poradie: Scalars['Int'];
  /** An object relationship */
  smena: Vak_Smena;
  smena_fk: Scalars['Int'];
  /** An object relationship */
  uloha_typ: Vak_Uloha_Typ;
  /** An object relationship */
  uloha_typ_enum?: Maybe<Vak_Uloha_Typ_Vstup>;
  uloha_typ_enum_fk?: Maybe<Vak_Uloha_Typ_Vstup_Enum>;
  uloha_typ_fk: Scalars['uuid'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vstup_cislo?: Maybe<Scalars['numeric']>;
  vstup_text?: Maybe<Scalars['String']>;
};

/** aggregated selection of "vak.uloha" */
export type Vak_Uloha_Aggregate = {
  __typename?: 'vak_uloha_aggregate';
  aggregate?: Maybe<Vak_Uloha_Aggregate_Fields>;
  nodes: Array<Vak_Uloha>;
};

export type Vak_Uloha_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Vak_Uloha_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Vak_Uloha_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Vak_Uloha_Aggregate_Bool_Exp_Count>;
};

export type Vak_Uloha_Aggregate_Bool_Exp_Bool_And = {
  arguments: Vak_Uloha_Select_Column_Vak_Uloha_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Uloha_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Uloha_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Vak_Uloha_Select_Column_Vak_Uloha_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Uloha_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Uloha_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Uloha_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.uloha" */
export type Vak_Uloha_Aggregate_Fields = {
  __typename?: 'vak_uloha_aggregate_fields';
  avg?: Maybe<Vak_Uloha_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vak_Uloha_Max_Fields>;
  min?: Maybe<Vak_Uloha_Min_Fields>;
  stddev?: Maybe<Vak_Uloha_Stddev_Fields>;
  stddev_pop?: Maybe<Vak_Uloha_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vak_Uloha_Stddev_Samp_Fields>;
  sum?: Maybe<Vak_Uloha_Sum_Fields>;
  var_pop?: Maybe<Vak_Uloha_Var_Pop_Fields>;
  var_samp?: Maybe<Vak_Uloha_Var_Samp_Fields>;
  variance?: Maybe<Vak_Uloha_Variance_Fields>;
};


/** aggregate fields of "vak.uloha" */
export type Vak_Uloha_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.uloha" */
export type Vak_Uloha_Aggregate_Order_By = {
  avg?: InputMaybe<Vak_Uloha_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Uloha_Max_Order_By>;
  min?: InputMaybe<Vak_Uloha_Min_Order_By>;
  stddev?: InputMaybe<Vak_Uloha_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vak_Uloha_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vak_Uloha_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vak_Uloha_Sum_Order_By>;
  var_pop?: InputMaybe<Vak_Uloha_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vak_Uloha_Var_Samp_Order_By>;
  variance?: InputMaybe<Vak_Uloha_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vak.uloha" */
export type Vak_Uloha_Arr_Rel_Insert_Input = {
  data: Array<Vak_Uloha_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Uloha_On_Conflict>;
};

/** aggregate avg on columns */
export type Vak_Uloha_Avg_Fields = {
  __typename?: 'vak_uloha_avg_fields';
  kontrola_fk?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
  vstup_cislo?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vak.uloha" */
export type Vak_Uloha_Avg_Order_By = {
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vak.uloha". All fields are combined with a logical 'AND'. */
export type Vak_Uloha_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Uloha_Bool_Exp>>;
  _not?: InputMaybe<Vak_Uloha_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Uloha_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  done?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  kontrola?: InputMaybe<Vak_Kontrola_Bool_Exp>;
  kontrola_fk?: InputMaybe<Int_Comparison_Exp>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
  kontrolny_bod_fk?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  platny?: InputMaybe<Boolean_Comparison_Exp>;
  poradie?: InputMaybe<Int_Comparison_Exp>;
  smena?: InputMaybe<Vak_Smena_Bool_Exp>;
  smena_fk?: InputMaybe<Int_Comparison_Exp>;
  uloha_typ?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
  uloha_typ_enum?: InputMaybe<Vak_Uloha_Typ_Vstup_Bool_Exp>;
  uloha_typ_enum_fk?: InputMaybe<Vak_Uloha_Typ_Vstup_Enum_Comparison_Exp>;
  uloha_typ_fk?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  vstup_cislo?: InputMaybe<Numeric_Comparison_Exp>;
  vstup_text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.uloha" */
export enum Vak_Uloha_Constraint {
  /** unique or primary key constraint on columns "id" */
  UlohaPkey = 'uloha_pkey'
}

/** input type for incrementing numeric columns in table "vak.uloha" */
export type Vak_Uloha_Inc_Input = {
  kontrola_fk?: InputMaybe<Scalars['Int']>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  poradie?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  vstup_cislo?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "vak.uloha" */
export type Vak_Uloha_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** Priznak ze je uloha vyriesena (zaklikol checkbox, vyplnil cislo, vyplnil text) */
  done?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  kontrola?: InputMaybe<Vak_Kontrola_Obj_Rel_Insert_Input>;
  kontrola_fk?: InputMaybe<Scalars['Int']>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Obj_Rel_Insert_Input>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  smena?: InputMaybe<Vak_Smena_Obj_Rel_Insert_Input>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  uloha_typ?: InputMaybe<Vak_Uloha_Typ_Obj_Rel_Insert_Input>;
  uloha_typ_enum?: InputMaybe<Vak_Uloha_Typ_Vstup_Obj_Rel_Insert_Input>;
  uloha_typ_enum_fk?: InputMaybe<Vak_Uloha_Typ_Vstup_Enum>;
  uloha_typ_fk?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vstup_cislo?: InputMaybe<Scalars['numeric']>;
  vstup_text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Vak_Uloha_Max_Fields = {
  __typename?: 'vak_uloha_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  kontrola_fk?: Maybe<Scalars['Int']>;
  kontrolny_bod_fk?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  poradie?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
  uloha_typ_fk?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vstup_cislo?: Maybe<Scalars['numeric']>;
  vstup_text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vak.uloha" */
export type Vak_Uloha_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  uloha_typ_fk?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
  vstup_text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Uloha_Min_Fields = {
  __typename?: 'vak_uloha_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  kontrola_fk?: Maybe<Scalars['Int']>;
  kontrolny_bod_fk?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  poradie?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
  uloha_typ_fk?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vstup_cislo?: Maybe<Scalars['numeric']>;
  vstup_text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vak.uloha" */
export type Vak_Uloha_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  uloha_typ_fk?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
  vstup_text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vak.uloha" */
export type Vak_Uloha_Mutation_Response = {
  __typename?: 'vak_uloha_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Uloha>;
};

/** on_conflict condition type for table "vak.uloha" */
export type Vak_Uloha_On_Conflict = {
  constraint: Vak_Uloha_Constraint;
  update_columns?: Array<Vak_Uloha_Update_Column>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.uloha". */
export type Vak_Uloha_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  done?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kontrola?: InputMaybe<Vak_Kontrola_Order_By>;
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  platny?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena?: InputMaybe<Vak_Smena_Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  uloha_typ?: InputMaybe<Vak_Uloha_Typ_Order_By>;
  uloha_typ_enum?: InputMaybe<Vak_Uloha_Typ_Vstup_Order_By>;
  uloha_typ_enum_fk?: InputMaybe<Order_By>;
  uloha_typ_fk?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
  vstup_text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.uloha */
export type Vak_Uloha_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "vak.uloha" */
export enum Vak_Uloha_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
  /** column name */
  KontrolaFk = 'kontrola_fk',
  /** column name */
  KontrolnyBodFk = 'kontrolny_bod_fk',
  /** column name */
  Name = 'name',
  /** column name */
  Platny = 'platny',
  /** column name */
  Poradie = 'poradie',
  /** column name */
  SmenaFk = 'smena_fk',
  /** column name */
  UlohaTypEnumFk = 'uloha_typ_enum_fk',
  /** column name */
  UlohaTypFk = 'uloha_typ_fk',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VstupCislo = 'vstup_cislo',
  /** column name */
  VstupText = 'vstup_text'
}

/** select "vak_uloha_aggregate_bool_exp_bool_and_arguments_columns" columns of table "vak.uloha" */
export enum Vak_Uloha_Select_Column_Vak_Uloha_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Done = 'done',
  /** column name */
  Platny = 'platny'
}

/** select "vak_uloha_aggregate_bool_exp_bool_or_arguments_columns" columns of table "vak.uloha" */
export enum Vak_Uloha_Select_Column_Vak_Uloha_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Done = 'done',
  /** column name */
  Platny = 'platny'
}

/** input type for updating data in table "vak.uloha" */
export type Vak_Uloha_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** Priznak ze je uloha vyriesena (zaklikol checkbox, vyplnil cislo, vyplnil text) */
  done?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  kontrola_fk?: InputMaybe<Scalars['Int']>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  uloha_typ_enum_fk?: InputMaybe<Vak_Uloha_Typ_Vstup_Enum>;
  uloha_typ_fk?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vstup_cislo?: InputMaybe<Scalars['numeric']>;
  vstup_text?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Vak_Uloha_Stddev_Fields = {
  __typename?: 'vak_uloha_stddev_fields';
  kontrola_fk?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
  vstup_cislo?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vak.uloha" */
export type Vak_Uloha_Stddev_Order_By = {
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vak_Uloha_Stddev_Pop_Fields = {
  __typename?: 'vak_uloha_stddev_pop_fields';
  kontrola_fk?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
  vstup_cislo?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vak.uloha" */
export type Vak_Uloha_Stddev_Pop_Order_By = {
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vak_Uloha_Stddev_Samp_Fields = {
  __typename?: 'vak_uloha_stddev_samp_fields';
  kontrola_fk?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
  vstup_cislo?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vak.uloha" */
export type Vak_Uloha_Stddev_Samp_Order_By = {
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vak_uloha" */
export type Vak_Uloha_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Uloha_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Uloha_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** Priznak ze je uloha vyriesena (zaklikol checkbox, vyplnil cislo, vyplnil text) */
  done?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  kontrola_fk?: InputMaybe<Scalars['Int']>;
  kontrolny_bod_fk?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  poradie?: InputMaybe<Scalars['Int']>;
  smena_fk?: InputMaybe<Scalars['Int']>;
  uloha_typ_enum_fk?: InputMaybe<Vak_Uloha_Typ_Vstup_Enum>;
  uloha_typ_fk?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vstup_cislo?: InputMaybe<Scalars['numeric']>;
  vstup_text?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Vak_Uloha_Sum_Fields = {
  __typename?: 'vak_uloha_sum_fields';
  kontrola_fk?: Maybe<Scalars['Int']>;
  kontrolny_bod_fk?: Maybe<Scalars['Int']>;
  poradie?: Maybe<Scalars['Int']>;
  smena_fk?: Maybe<Scalars['Int']>;
  vstup_cislo?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "vak.uloha" */
export type Vak_Uloha_Sum_Order_By = {
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
};

/** columns and relationships of "vak.uloha_typ" */
export type Vak_Uloha_Typ = {
  __typename?: 'vak_uloha_typ';
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  platny?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  uloha_typ_vstup?: Maybe<Vak_Uloha_Typ_Vstup>;
  vstup?: Maybe<Vak_Uloha_Typ_Vstup_Enum>;
};

/** aggregated selection of "vak.uloha_typ" */
export type Vak_Uloha_Typ_Aggregate = {
  __typename?: 'vak_uloha_typ_aggregate';
  aggregate?: Maybe<Vak_Uloha_Typ_Aggregate_Fields>;
  nodes: Array<Vak_Uloha_Typ>;
};

export type Vak_Uloha_Typ_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Vak_Uloha_Typ_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Vak_Uloha_Typ_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Vak_Uloha_Typ_Aggregate_Bool_Exp_Count>;
};

export type Vak_Uloha_Typ_Aggregate_Bool_Exp_Bool_And = {
  arguments: Vak_Uloha_Typ_Select_Column_Vak_Uloha_Typ_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Uloha_Typ_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Vak_Uloha_Typ_Select_Column_Vak_Uloha_Typ_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Vak_Uloha_Typ_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vak_Uloha_Typ_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vak.uloha_typ" */
export type Vak_Uloha_Typ_Aggregate_Fields = {
  __typename?: 'vak_uloha_typ_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Vak_Uloha_Typ_Max_Fields>;
  min?: Maybe<Vak_Uloha_Typ_Min_Fields>;
};


/** aggregate fields of "vak.uloha_typ" */
export type Vak_Uloha_Typ_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Uloha_Typ_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vak.uloha_typ" */
export type Vak_Uloha_Typ_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vak_Uloha_Typ_Max_Order_By>;
  min?: InputMaybe<Vak_Uloha_Typ_Min_Order_By>;
};

/** input type for inserting array relation for remote table "vak.uloha_typ" */
export type Vak_Uloha_Typ_Arr_Rel_Insert_Input = {
  data: Array<Vak_Uloha_Typ_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Uloha_Typ_On_Conflict>;
};

/** Boolean expression to filter rows from the table "vak.uloha_typ". All fields are combined with a logical 'AND'. */
export type Vak_Uloha_Typ_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Uloha_Typ_Bool_Exp>>;
  _not?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Uloha_Typ_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  platny?: InputMaybe<Boolean_Comparison_Exp>;
  uloha_typ_vstup?: InputMaybe<Vak_Uloha_Typ_Vstup_Bool_Exp>;
  vstup?: InputMaybe<Vak_Uloha_Typ_Vstup_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "vak.uloha_typ" */
export enum Vak_Uloha_Typ_Constraint {
  /** unique or primary key constraint on columns "id" */
  UlohaTypPkey = 'uloha_typ_pkey'
}

/** input type for inserting data into table "vak.uloha_typ" */
export type Vak_Uloha_Typ_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  uloha_typ_vstup?: InputMaybe<Vak_Uloha_Typ_Vstup_Obj_Rel_Insert_Input>;
  vstup?: InputMaybe<Vak_Uloha_Typ_Vstup_Enum>;
};

/** aggregate max on columns */
export type Vak_Uloha_Typ_Max_Fields = {
  __typename?: 'vak_uloha_typ_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vak.uloha_typ" */
export type Vak_Uloha_Typ_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vak_Uloha_Typ_Min_Fields = {
  __typename?: 'vak_uloha_typ_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vak.uloha_typ" */
export type Vak_Uloha_Typ_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vak.uloha_typ" */
export type Vak_Uloha_Typ_Mutation_Response = {
  __typename?: 'vak_uloha_typ_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Uloha_Typ>;
};

/** input type for inserting object relation for remote table "vak.uloha_typ" */
export type Vak_Uloha_Typ_Obj_Rel_Insert_Input = {
  data: Vak_Uloha_Typ_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Uloha_Typ_On_Conflict>;
};

/** on_conflict condition type for table "vak.uloha_typ" */
export type Vak_Uloha_Typ_On_Conflict = {
  constraint: Vak_Uloha_Typ_Constraint;
  update_columns?: Array<Vak_Uloha_Typ_Update_Column>;
  where?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.uloha_typ". */
export type Vak_Uloha_Typ_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  platny?: InputMaybe<Order_By>;
  uloha_typ_vstup?: InputMaybe<Vak_Uloha_Typ_Vstup_Order_By>;
  vstup?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vak.uloha_typ */
export type Vak_Uloha_Typ_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "vak.uloha_typ" */
export enum Vak_Uloha_Typ_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Platny = 'platny',
  /** column name */
  Vstup = 'vstup'
}

/** select "vak_uloha_typ_aggregate_bool_exp_bool_and_arguments_columns" columns of table "vak.uloha_typ" */
export enum Vak_Uloha_Typ_Select_Column_Vak_Uloha_Typ_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Platny = 'platny'
}

/** select "vak_uloha_typ_aggregate_bool_exp_bool_or_arguments_columns" columns of table "vak.uloha_typ" */
export enum Vak_Uloha_Typ_Select_Column_Vak_Uloha_Typ_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Platny = 'platny'
}

/** input type for updating data in table "vak.uloha_typ" */
export type Vak_Uloha_Typ_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  vstup?: InputMaybe<Vak_Uloha_Typ_Vstup_Enum>;
};

/** Streaming cursor of the table "vak_uloha_typ" */
export type Vak_Uloha_Typ_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Uloha_Typ_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Uloha_Typ_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  platny?: InputMaybe<Scalars['Boolean']>;
  vstup?: InputMaybe<Vak_Uloha_Typ_Vstup_Enum>;
};

/** update columns of table "vak.uloha_typ" */
export enum Vak_Uloha_Typ_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Platny = 'platny',
  /** column name */
  Vstup = 'vstup'
}

export type Vak_Uloha_Typ_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Uloha_Typ_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Uloha_Typ_Bool_Exp;
};

/** columns and relationships of "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_Vstup = {
  __typename?: 'vak_uloha_typ_vstup';
  name?: Maybe<Scalars['String']>;
  uloha_typ: Scalars['String'];
  /** An array relationship */
  uloha_typs: Array<Vak_Uloha_Typ>;
  /** An aggregate relationship */
  uloha_typs_aggregate: Vak_Uloha_Typ_Aggregate;
  /** An array relationship */
  ulohas: Array<Vak_Uloha>;
  /** An aggregate relationship */
  ulohas_aggregate: Vak_Uloha_Aggregate;
};


/** columns and relationships of "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_VstupUloha_TypsArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
};


/** columns and relationships of "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_VstupUloha_Typs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
};


/** columns and relationships of "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_VstupUlohasArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};


/** columns and relationships of "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_VstupUlohas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By>>;
  where?: InputMaybe<Vak_Uloha_Bool_Exp>;
};

/** aggregated selection of "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_Vstup_Aggregate = {
  __typename?: 'vak_uloha_typ_vstup_aggregate';
  aggregate?: Maybe<Vak_Uloha_Typ_Vstup_Aggregate_Fields>;
  nodes: Array<Vak_Uloha_Typ_Vstup>;
};

/** aggregate fields of "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_Vstup_Aggregate_Fields = {
  __typename?: 'vak_uloha_typ_vstup_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Vak_Uloha_Typ_Vstup_Max_Fields>;
  min?: Maybe<Vak_Uloha_Typ_Vstup_Min_Fields>;
};


/** aggregate fields of "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_Vstup_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "vak.uloha_typ_vstup". All fields are combined with a logical 'AND'. */
export type Vak_Uloha_Typ_Vstup_Bool_Exp = {
  _and?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Bool_Exp>>;
  _not?: InputMaybe<Vak_Uloha_Typ_Vstup_Bool_Exp>;
  _or?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  uloha_typ?: InputMaybe<String_Comparison_Exp>;
  uloha_typs?: InputMaybe<Vak_Uloha_Typ_Bool_Exp>;
  uloha_typs_aggregate?: InputMaybe<Vak_Uloha_Typ_Aggregate_Bool_Exp>;
  ulohas?: InputMaybe<Vak_Uloha_Bool_Exp>;
  ulohas_aggregate?: InputMaybe<Vak_Uloha_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "vak.uloha_typ_vstup" */
export enum Vak_Uloha_Typ_Vstup_Constraint {
  /** unique or primary key constraint on columns "uloha_typ" */
  UlohaTypEnumPkey = 'uloha_typ_enum_pkey'
}

export enum Vak_Uloha_Typ_Vstup_Enum {
  /** CHECKBOX */
  Checkbox = 'CHECKBOX',
  /** NUMBER_INPUT */
  NumberInput = 'NUMBER_INPUT',
  /** TEXT_INPUT */
  TextInput = 'TEXT_INPUT'
}

/** Boolean expression to compare columns of type "vak_uloha_typ_vstup_enum". All fields are combined with logical 'AND'. */
export type Vak_Uloha_Typ_Vstup_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Vak_Uloha_Typ_Vstup_Enum>;
  _in?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Vak_Uloha_Typ_Vstup_Enum>;
  _nin?: InputMaybe<Array<Vak_Uloha_Typ_Vstup_Enum>>;
};

/** input type for inserting data into table "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_Vstup_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  uloha_typ?: InputMaybe<Scalars['String']>;
  uloha_typs?: InputMaybe<Vak_Uloha_Typ_Arr_Rel_Insert_Input>;
  ulohas?: InputMaybe<Vak_Uloha_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Vak_Uloha_Typ_Vstup_Max_Fields = {
  __typename?: 'vak_uloha_typ_vstup_max_fields';
  name?: Maybe<Scalars['String']>;
  uloha_typ?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Vak_Uloha_Typ_Vstup_Min_Fields = {
  __typename?: 'vak_uloha_typ_vstup_min_fields';
  name?: Maybe<Scalars['String']>;
  uloha_typ?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_Vstup_Mutation_Response = {
  __typename?: 'vak_uloha_typ_vstup_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vak_Uloha_Typ_Vstup>;
};

/** input type for inserting object relation for remote table "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_Vstup_Obj_Rel_Insert_Input = {
  data: Vak_Uloha_Typ_Vstup_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vak_Uloha_Typ_Vstup_On_Conflict>;
};

/** on_conflict condition type for table "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_Vstup_On_Conflict = {
  constraint: Vak_Uloha_Typ_Vstup_Constraint;
  update_columns?: Array<Vak_Uloha_Typ_Vstup_Update_Column>;
  where?: InputMaybe<Vak_Uloha_Typ_Vstup_Bool_Exp>;
};

/** Ordering options when selecting data from "vak.uloha_typ_vstup". */
export type Vak_Uloha_Typ_Vstup_Order_By = {
  name?: InputMaybe<Order_By>;
  uloha_typ?: InputMaybe<Order_By>;
  uloha_typs_aggregate?: InputMaybe<Vak_Uloha_Typ_Aggregate_Order_By>;
  ulohas_aggregate?: InputMaybe<Vak_Uloha_Aggregate_Order_By>;
};

/** primary key columns input for table: vak.uloha_typ_vstup */
export type Vak_Uloha_Typ_Vstup_Pk_Columns_Input = {
  uloha_typ: Scalars['String'];
};

/** select columns of table "vak.uloha_typ_vstup" */
export enum Vak_Uloha_Typ_Vstup_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  UlohaTyp = 'uloha_typ'
}

/** input type for updating data in table "vak.uloha_typ_vstup" */
export type Vak_Uloha_Typ_Vstup_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
  uloha_typ?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "vak_uloha_typ_vstup" */
export type Vak_Uloha_Typ_Vstup_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vak_Uloha_Typ_Vstup_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vak_Uloha_Typ_Vstup_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
  uloha_typ?: InputMaybe<Scalars['String']>;
};

/** update columns of table "vak.uloha_typ_vstup" */
export enum Vak_Uloha_Typ_Vstup_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  UlohaTyp = 'uloha_typ'
}

export type Vak_Uloha_Typ_Vstup_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Uloha_Typ_Vstup_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Uloha_Typ_Vstup_Bool_Exp;
};

/** update columns of table "vak.uloha" */
export enum Vak_Uloha_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
  /** column name */
  KontrolaFk = 'kontrola_fk',
  /** column name */
  KontrolnyBodFk = 'kontrolny_bod_fk',
  /** column name */
  Name = 'name',
  /** column name */
  Platny = 'platny',
  /** column name */
  Poradie = 'poradie',
  /** column name */
  SmenaFk = 'smena_fk',
  /** column name */
  UlohaTypEnumFk = 'uloha_typ_enum_fk',
  /** column name */
  UlohaTypFk = 'uloha_typ_fk',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VstupCislo = 'vstup_cislo',
  /** column name */
  VstupText = 'vstup_text'
}

export type Vak_Uloha_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vak_Uloha_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vak_Uloha_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vak_Uloha_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vak_Uloha_Var_Pop_Fields = {
  __typename?: 'vak_uloha_var_pop_fields';
  kontrola_fk?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
  vstup_cislo?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vak.uloha" */
export type Vak_Uloha_Var_Pop_Order_By = {
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vak_Uloha_Var_Samp_Fields = {
  __typename?: 'vak_uloha_var_samp_fields';
  kontrola_fk?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
  vstup_cislo?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vak.uloha" */
export type Vak_Uloha_Var_Samp_Order_By = {
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vak_Uloha_Variance_Fields = {
  __typename?: 'vak_uloha_variance_fields';
  kontrola_fk?: Maybe<Scalars['Float']>;
  kontrolny_bod_fk?: Maybe<Scalars['Float']>;
  poradie?: Maybe<Scalars['Float']>;
  smena_fk?: Maybe<Scalars['Float']>;
  vstup_cislo?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vak.uloha" */
export type Vak_Uloha_Variance_Order_By = {
  kontrola_fk?: InputMaybe<Order_By>;
  kontrolny_bod_fk?: InputMaybe<Order_By>;
  poradie?: InputMaybe<Order_By>;
  smena_fk?: InputMaybe<Order_By>;
  vstup_cislo?: InputMaybe<Order_By>;
};

export type Vak_KontrolaFragment = { __typename: 'vak_kontrola', id: number, ok_predpis_kontrola_fk?: number | null, ok_termin?: boolean | null, termin_cas?: any | null, termin_datum?: any | null, platny?: boolean | null };

export type Vak_Kontrolny_BodFragment = { __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null };

export type Vak_PracovnikFragment = { __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null };

export type Vak_Pracovnik_Smena2pracovnikFragment = { __typename: 'vak_smena2pracovnik', name?: string | null, id: number, platny?: boolean | null };

export type Vak_Pracovnik_Smena2pracovnik_SmenaFragment = { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null };

export type Vak_Pracovnik_Smena2pracovnik_Smena_Smena_TypFragment = { __typename: 'vak_smena_typ', name?: string | null, id: number };

export type Vak_SmenaFragment = { __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null };

export type Vak_Smena_Obhliadka_SumarFragment = { __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null };

export type Vak_Smena_Smena_TypFragment = { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null };

export type Vak_Smena_KontrolaFragment = { __typename: 'vak_kontrola', smena_fk?: number | null, id: number, termin_cas?: any | null, termin_datum?: any | null };

export type Vak_Smena_Obhliadka_Sumar_Predpis_ObhliadkaFragment = { __typename: 'vak_predpis_obhliadka', termin_cas_do?: any | null, id: number, termin_cas?: any | null, poradie?: number | null, name?: string | null };

export type Vak_Smena_Smena2pracovnik_PracovnikFragment = { __typename: 'vak_pracovnik', name?: string | null, id: number };

export type Vak_Smena_UlohaFragment = { __typename: 'vak_uloha', done: boolean, id: any, name?: string | null, platny?: boolean | null, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null };

export type Vak_Smena_Smena2pracovnikFragment = { __typename: 'vak_smena2pracovnik', id: number, name?: string | null, platny?: boolean | null };

export type Vak_Smena_Uloha_Kontrolny_BodFragment = { __typename: 'vak_kontrolny_bod', name?: string | null, id: number };

export type Vak_Smena_Uloha_Uloha_TypFragment = { __typename: 'vak_uloha_typ', name?: string | null, id: any };

export type Vak_Smena_Obhliadka_Sumar_Aggregate_Aggregate_SumFragment = { __typename: 'vak_obhliadka_sumar_sum_fields', ok?: any | null, predpisane?: any | null };

export type Vak_Smena_TypFragment = { __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null };

export type Vak_Smena_Typ_Predpis_ObhliadkaFragment = { __typename: 'vak_predpis_obhliadka', name?: string | null, id: number, poradie?: number | null, termin_cas?: any | null, termin_cas_do?: any | null };

export type Vak_UlohaFragment = { __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null };

export type Vak_Uloha_SmenaFragment = { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null };

export type Vak_Uloha_Smena_Smena_TypFragment = { __typename: 'vak_smena_typ', name?: string | null, id: number };

export type Vak_Uloha_Kontrolny_BodFragment = { __typename: 'vak_kontrolny_bod', name?: string | null, id: number };

export type Vak_Uloha_Uloha_TypFragment = { __typename: 'vak_uloha_typ', name?: string | null, id: any };

export type Vak_Uloha_TypFragment = { __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null };

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename: 'query_root' };

export type Vak_Kontrolny_BodQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Vak_Kontrolny_Bod_Select_Column> | Vak_Kontrolny_Bod_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Kontrolny_Bod_Order_By> | Vak_Kontrolny_Bod_Order_By>;
  where?: InputMaybe<Vak_Kontrolny_Bod_Bool_Exp>;
}>;


export type Vak_Kontrolny_BodQuery = { __typename?: 'query_root', vak_kontrolny_bod: Array<{ __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null }> };

export type Vak_Kontrolny_Bod_By_PkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Vak_Kontrolny_Bod_By_PkQuery = { __typename?: 'query_root', vak_kontrolny_bod_by_pk?: { __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null } | null };

export type Delete_Vak_Kontrolny_BodMutationVariables = Exact<{
  where: Vak_Kontrolny_Bod_Bool_Exp;
}>;


export type Delete_Vak_Kontrolny_BodMutation = { __typename?: 'mutation_root', delete_vak_kontrolny_bod?: { __typename?: 'vak_kontrolny_bod_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null }> } | null };

export type Delete_Vak_Kontrolny_Bod_By_PkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Delete_Vak_Kontrolny_Bod_By_PkMutation = { __typename?: 'mutation_root', delete_vak_kontrolny_bod_by_pk?: { __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null } | null };

export type Insert_Vak_Kontrolny_BodMutationVariables = Exact<{
  vak_kontrolny_bod: Array<Vak_Kontrolny_Bod_Insert_Input> | Vak_Kontrolny_Bod_Insert_Input;
  on_conflict?: InputMaybe<Vak_Kontrolny_Bod_On_Conflict>;
}>;


export type Insert_Vak_Kontrolny_BodMutation = { __typename?: 'mutation_root', insert_vak_kontrolny_bod?: { __typename?: 'vak_kontrolny_bod_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null }> } | null };

export type Insert_Vak_Kontrolny_Bod_OneMutationVariables = Exact<{
  vak_kontrolny_bod: Vak_Kontrolny_Bod_Insert_Input;
  on_conflict?: InputMaybe<Vak_Kontrolny_Bod_On_Conflict>;
}>;


export type Insert_Vak_Kontrolny_Bod_OneMutation = { __typename?: 'mutation_root', insert_vak_kontrolny_bod_one?: { __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null } | null };

export type Update_Vak_Kontrolny_BodMutationVariables = Exact<{
  _inc?: InputMaybe<Vak_Kontrolny_Bod_Inc_Input>;
  vak_kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Set_Input>;
  where: Vak_Kontrolny_Bod_Bool_Exp;
}>;


export type Update_Vak_Kontrolny_BodMutation = { __typename?: 'mutation_root', update_vak_kontrolny_bod?: { __typename?: 'vak_kontrolny_bod_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null }> } | null };

export type Update_Vak_Kontrolny_Bod_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<Vak_Kontrolny_Bod_Inc_Input>;
  vak_kontrolny_bod?: InputMaybe<Vak_Kontrolny_Bod_Set_Input>;
  pk_columns: Vak_Kontrolny_Bod_Pk_Columns_Input;
}>;


export type Update_Vak_Kontrolny_Bod_By_PkMutation = { __typename?: 'mutation_root', update_vak_kontrolny_bod_by_pk?: { __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null } | null };

export type Update_Vak_Kontrolny_Bod_ManyMutationVariables = Exact<{
  updates: Array<Vak_Kontrolny_Bod_Updates> | Vak_Kontrolny_Bod_Updates;
}>;


export type Update_Vak_Kontrolny_Bod_ManyMutation = { __typename?: 'mutation_root', update_vak_kontrolny_bod_many?: Array<{ __typename?: 'vak_kontrolny_bod_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null }> } | null> | null };

export type Vak_Kontrolny_BodCrudFragment = { __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null };

export type Vak_Kontrolny_BodListFragment = { __typename: 'vak_kontrolny_bod', id: number, kod?: string | null, name?: string | null };

export type Vak_PracovnikQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Vak_Pracovnik_Select_Column> | Vak_Pracovnik_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Pracovnik_Order_By> | Vak_Pracovnik_Order_By>;
  where?: InputMaybe<Array<Vak_Pracovnik_Bool_Exp> | Vak_Pracovnik_Bool_Exp>;
}>;


export type Vak_PracovnikQuery = { __typename?: 'query_root', vak_pracovnik: Array<{ __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null }> };

export type Vak_Pracovnik_By_PkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Vak_Pracovnik_By_PkQuery = { __typename?: 'query_root', vak_pracovnik_by_pk?: { __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', name?: string | null, id: number, platny?: boolean | null, smena?: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null } | null }> } | null };

export type Delete_Vak_PracovnikMutationVariables = Exact<{
  where: Vak_Pracovnik_Bool_Exp;
}>;


export type Delete_Vak_PracovnikMutation = { __typename?: 'mutation_root', delete_vak_pracovnik?: { __typename?: 'vak_pracovnik_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', name?: string | null, id: number, platny?: boolean | null, smena?: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null } | null }> }> } | null };

export type Delete_Vak_Pracovnik_By_PkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Delete_Vak_Pracovnik_By_PkMutation = { __typename?: 'mutation_root', delete_vak_pracovnik_by_pk?: { __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', name?: string | null, id: number, platny?: boolean | null, smena?: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null } | null }> } | null };

export type Insert_Vak_PracovnikMutationVariables = Exact<{
  vak_pracovnik: Array<Vak_Pracovnik_Insert_Input> | Vak_Pracovnik_Insert_Input;
  on_conflict?: InputMaybe<Vak_Pracovnik_On_Conflict>;
}>;


export type Insert_Vak_PracovnikMutation = { __typename?: 'mutation_root', insert_vak_pracovnik?: { __typename?: 'vak_pracovnik_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', name?: string | null, id: number, platny?: boolean | null, smena?: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null } | null }> }> } | null };

export type Insert_Vak_Pracovnik_OneMutationVariables = Exact<{
  vak_pracovnik: Vak_Pracovnik_Insert_Input;
  on_conflict?: InputMaybe<Vak_Pracovnik_On_Conflict>;
}>;


export type Insert_Vak_Pracovnik_OneMutation = { __typename?: 'mutation_root', insert_vak_pracovnik_one?: { __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', name?: string | null, id: number, platny?: boolean | null, smena?: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null } | null }> } | null };

export type Update_Vak_PracovnikMutationVariables = Exact<{
  _inc?: InputMaybe<Vak_Pracovnik_Inc_Input>;
  vak_pracovnik?: InputMaybe<Vak_Pracovnik_Set_Input>;
  where: Vak_Pracovnik_Bool_Exp;
}>;


export type Update_Vak_PracovnikMutation = { __typename?: 'mutation_root', update_vak_pracovnik?: { __typename?: 'vak_pracovnik_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', name?: string | null, id: number, platny?: boolean | null, smena?: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null } | null }> }> } | null };

export type Update_Vak_Pracovnik_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<Vak_Pracovnik_Inc_Input>;
  vak_pracovnik?: InputMaybe<Vak_Pracovnik_Set_Input>;
  pk_columns: Vak_Pracovnik_Pk_Columns_Input;
}>;


export type Update_Vak_Pracovnik_By_PkMutation = { __typename?: 'mutation_root', update_vak_pracovnik_by_pk?: { __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', name?: string | null, id: number, platny?: boolean | null, smena?: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null } | null }> } | null };

export type Update_Vak_Pracovnik_ManyMutationVariables = Exact<{
  updates: Array<Vak_Pracovnik_Updates> | Vak_Pracovnik_Updates;
}>;


export type Update_Vak_Pracovnik_ManyMutation = { __typename?: 'mutation_root', update_vak_pracovnik_many?: Array<{ __typename?: 'vak_pracovnik_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', name?: string | null, id: number, platny?: boolean | null, smena?: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null } | null }> }> } | null> | null };

export type Vak_PracovnikCrudFragment = { __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', name?: string | null, id: number, platny?: boolean | null, smena?: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null } | null }> };

export type Vak_PracovnikListFragment = { __typename: 'vak_pracovnik', id: number, name?: string | null, platny?: boolean | null };

export type Vak_SmenaQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Vak_Smena_Select_Column> | Vak_Smena_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Order_By> | Vak_Smena_Order_By>;
  where?: InputMaybe<Array<Vak_Smena_Bool_Exp> | Vak_Smena_Bool_Exp>;
}>;


export type Vak_SmenaQuery = { __typename?: 'query_root', vak_smena: Array<{ __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null }>, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, smena2pracovnik: Array<{ __typename?: 'vak_smena2pracovnik', pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }>, obhliadka_sumar_aggregate: { __typename?: 'vak_obhliadka_sumar_aggregate', aggregate?: { __typename?: 'vak_obhliadka_sumar_aggregate_fields', sum?: { __typename: 'vak_obhliadka_sumar_sum_fields', ok?: any | null, predpisane?: any | null } | null } | null } }>, vak_pracovnik: Array<{ __typename?: 'vak_pracovnik', name?: string | null, id: number }>, vak_smena_typ: Array<{ __typename?: 'vak_smena_typ', id: number, name?: string | null }> };

export type Vak_Smena_By_PkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Vak_Smena_By_PkQuery = { __typename?: 'query_root', vak_smena_by_pk?: { __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null, predpis_obhliadka?: { __typename: 'vak_predpis_obhliadka', termin_cas_do?: any | null, id: number, termin_cas?: any | null, poradie?: number | null, name?: string | null } | null }>, uloha: Array<{ __typename: 'vak_uloha', done: boolean, id: any, name?: string | null, platny?: boolean | null, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } }>, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', id: number, name?: string | null, platny?: boolean | null, pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }> } | null, vak_uloha_typ: Array<{ __typename?: 'vak_uloha_typ', id: any, name?: string | null }> };

export type Vak_Smena_CreateQueryVariables = Exact<{ [key: string]: never; }>;


export type Vak_Smena_CreateQuery = { __typename?: 'query_root', vak_uloha_typ: Array<{ __typename?: 'vak_uloha_typ', id: any, name?: string | null }> };

export type Delete_Vak_SmenaMutationVariables = Exact<{
  where: Vak_Smena_Bool_Exp;
}>;


export type Delete_Vak_SmenaMutation = { __typename?: 'mutation_root', delete_vak_smena?: { __typename?: 'vak_smena_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null, predpis_obhliadka?: { __typename: 'vak_predpis_obhliadka', termin_cas_do?: any | null, id: number, termin_cas?: any | null, poradie?: number | null, name?: string | null } | null }>, uloha: Array<{ __typename: 'vak_uloha', done: boolean, id: any, name?: string | null, platny?: boolean | null, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } }>, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', id: number, name?: string | null, platny?: boolean | null, pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }> }> } | null };

export type Delete_Vak_Smena_By_PkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Delete_Vak_Smena_By_PkMutation = { __typename?: 'mutation_root', delete_vak_smena_by_pk?: { __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null, predpis_obhliadka?: { __typename: 'vak_predpis_obhliadka', termin_cas_do?: any | null, id: number, termin_cas?: any | null, poradie?: number | null, name?: string | null } | null }>, uloha: Array<{ __typename: 'vak_uloha', done: boolean, id: any, name?: string | null, platny?: boolean | null, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } }>, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', id: number, name?: string | null, platny?: boolean | null, pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }> } | null };

export type Insert_Vak_SmenaMutationVariables = Exact<{
  vak_smena: Array<Vak_Smena_Insert_Input> | Vak_Smena_Insert_Input;
  on_conflict?: InputMaybe<Vak_Smena_On_Conflict>;
}>;


export type Insert_Vak_SmenaMutation = { __typename?: 'mutation_root', insert_vak_smena?: { __typename?: 'vak_smena_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null, predpis_obhliadka?: { __typename: 'vak_predpis_obhliadka', termin_cas_do?: any | null, id: number, termin_cas?: any | null, poradie?: number | null, name?: string | null } | null }>, uloha: Array<{ __typename: 'vak_uloha', done: boolean, id: any, name?: string | null, platny?: boolean | null, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } }>, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', id: number, name?: string | null, platny?: boolean | null, pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }> }> } | null };

export type Insert_Vak_Smena_OneMutationVariables = Exact<{
  vak_smena: Vak_Smena_Insert_Input;
  on_conflict?: InputMaybe<Vak_Smena_On_Conflict>;
}>;


export type Insert_Vak_Smena_OneMutation = { __typename?: 'mutation_root', insert_vak_smena_one?: { __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null, predpis_obhliadka?: { __typename: 'vak_predpis_obhliadka', termin_cas_do?: any | null, id: number, termin_cas?: any | null, poradie?: number | null, name?: string | null } | null }>, uloha: Array<{ __typename: 'vak_uloha', done: boolean, id: any, name?: string | null, platny?: boolean | null, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } }>, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', id: number, name?: string | null, platny?: boolean | null, pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }> } | null };

export type Update_Vak_SmenaMutationVariables = Exact<{
  _inc?: InputMaybe<Vak_Smena_Inc_Input>;
  vak_smena?: InputMaybe<Vak_Smena_Set_Input>;
  where: Vak_Smena_Bool_Exp;
}>;


export type Update_Vak_SmenaMutation = { __typename?: 'mutation_root', update_vak_smena?: { __typename?: 'vak_smena_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null, predpis_obhliadka?: { __typename: 'vak_predpis_obhliadka', termin_cas_do?: any | null, id: number, termin_cas?: any | null, poradie?: number | null, name?: string | null } | null }>, uloha: Array<{ __typename: 'vak_uloha', done: boolean, id: any, name?: string | null, platny?: boolean | null, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } }>, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', id: number, name?: string | null, platny?: boolean | null, pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }> }> } | null };

export type Update_Vak_Smena_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<Vak_Smena_Inc_Input>;
  vak_smena?: InputMaybe<Vak_Smena_Set_Input>;
  pk_columns: Vak_Smena_Pk_Columns_Input;
}>;


export type Update_Vak_Smena_By_PkMutation = { __typename?: 'mutation_root', update_vak_smena_by_pk?: { __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null, predpis_obhliadka?: { __typename: 'vak_predpis_obhliadka', termin_cas_do?: any | null, id: number, termin_cas?: any | null, poradie?: number | null, name?: string | null } | null }>, uloha: Array<{ __typename: 'vak_uloha', done: boolean, id: any, name?: string | null, platny?: boolean | null, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } }>, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', id: number, name?: string | null, platny?: boolean | null, pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }> } | null };

export type Update_Vak_Smena_ManyMutationVariables = Exact<{
  updates: Array<Vak_Smena_Updates> | Vak_Smena_Updates;
}>;


export type Update_Vak_Smena_ManyMutation = { __typename?: 'mutation_root', update_vak_smena_many?: Array<{ __typename?: 'vak_smena_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null, predpis_obhliadka?: { __typename: 'vak_predpis_obhliadka', termin_cas_do?: any | null, id: number, termin_cas?: any | null, poradie?: number | null, name?: string | null } | null }>, uloha: Array<{ __typename: 'vak_uloha', done: boolean, id: any, name?: string | null, platny?: boolean | null, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } }>, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', id: number, name?: string | null, platny?: boolean | null, pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }> }> } | null> | null };

export type Vak_SmenaCrudFragment = { __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null, predpis_obhliadka?: { __typename: 'vak_predpis_obhliadka', termin_cas_do?: any | null, id: number, termin_cas?: any | null, poradie?: number | null, name?: string | null } | null }>, uloha: Array<{ __typename: 'vak_uloha', done: boolean, id: any, name?: string | null, platny?: boolean | null, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } }>, smena2pracovnik: Array<{ __typename: 'vak_smena2pracovnik', id: number, name?: string | null, platny?: boolean | null, pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }> };

export type Vak_SmenaListFragment = { __typename: 'vak_smena', id: number, termin_od?: any | null, termin_do?: any | null, ok?: boolean | null, informacia_teren?: string | null, informacia_kancelaria?: string | null, platny?: boolean | null, obhliadka_sumar: Array<{ __typename: 'vak_obhliadka_sumar', predpisane?: any | null, id?: string | null, ok?: any | null, predpis_obhliadka_fk?: number | null, smena_fk?: number | null }>, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number, vstup?: Vak_Smena_Typ_Vstup_Enum | null, class?: string | null, platny?: boolean | null, tolerancia?: any | null } | null, smena2pracovnik: Array<{ __typename?: 'vak_smena2pracovnik', pracovnik?: { __typename: 'vak_pracovnik', name?: string | null, id: number } | null }>, obhliadka_sumar_aggregate: { __typename?: 'vak_obhliadka_sumar_aggregate', aggregate?: { __typename?: 'vak_obhliadka_sumar_aggregate_fields', sum?: { __typename: 'vak_obhliadka_sumar_sum_fields', ok?: any | null, predpisane?: any | null } | null } | null } };

export type Vak_Smena_TypQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Vak_Smena_Typ_Select_Column> | Vak_Smena_Typ_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Smena_Typ_Order_By> | Vak_Smena_Typ_Order_By>;
  where?: InputMaybe<Array<Vak_Smena_Typ_Bool_Exp> | Vak_Smena_Typ_Bool_Exp>;
}>;


export type Vak_Smena_TypQuery = { __typename?: 'query_root', vak_smena_typ: Array<{ __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null }> };

export type Vak_Smena_Typ_By_PkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Vak_Smena_Typ_By_PkQuery = { __typename?: 'query_root', vak_smena_typ_by_pk?: { __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null, predpis_obhliadka: Array<{ __typename: 'vak_predpis_obhliadka', name?: string | null, id: number, poradie?: number | null, termin_cas?: any | null, termin_cas_do?: any | null }> } | null };

export type Delete_Vak_Smena_TypMutationVariables = Exact<{
  where: Vak_Smena_Typ_Bool_Exp;
}>;


export type Delete_Vak_Smena_TypMutation = { __typename?: 'mutation_root', delete_vak_smena_typ?: { __typename?: 'vak_smena_typ_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null, predpis_obhliadka: Array<{ __typename: 'vak_predpis_obhliadka', name?: string | null, id: number, poradie?: number | null, termin_cas?: any | null, termin_cas_do?: any | null }> }> } | null };

export type Delete_Vak_Smena_Typ_By_PkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Delete_Vak_Smena_Typ_By_PkMutation = { __typename?: 'mutation_root', delete_vak_smena_typ_by_pk?: { __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null, predpis_obhliadka: Array<{ __typename: 'vak_predpis_obhliadka', name?: string | null, id: number, poradie?: number | null, termin_cas?: any | null, termin_cas_do?: any | null }> } | null };

export type Insert_Vak_Smena_TypMutationVariables = Exact<{
  vak_smena_typ: Array<Vak_Smena_Typ_Insert_Input> | Vak_Smena_Typ_Insert_Input;
  on_conflict?: InputMaybe<Vak_Smena_Typ_On_Conflict>;
}>;


export type Insert_Vak_Smena_TypMutation = { __typename?: 'mutation_root', insert_vak_smena_typ?: { __typename?: 'vak_smena_typ_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null, predpis_obhliadka: Array<{ __typename: 'vak_predpis_obhliadka', name?: string | null, id: number, poradie?: number | null, termin_cas?: any | null, termin_cas_do?: any | null }> }> } | null };

export type Insert_Vak_Smena_Typ_OneMutationVariables = Exact<{
  vak_smena_typ: Vak_Smena_Typ_Insert_Input;
  on_conflict?: InputMaybe<Vak_Smena_Typ_On_Conflict>;
}>;


export type Insert_Vak_Smena_Typ_OneMutation = { __typename?: 'mutation_root', insert_vak_smena_typ_one?: { __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null, predpis_obhliadka: Array<{ __typename: 'vak_predpis_obhliadka', name?: string | null, id: number, poradie?: number | null, termin_cas?: any | null, termin_cas_do?: any | null }> } | null };

export type Update_Vak_Smena_TypMutationVariables = Exact<{
  _inc?: InputMaybe<Vak_Smena_Typ_Inc_Input>;
  vak_smena_typ?: InputMaybe<Vak_Smena_Typ_Set_Input>;
  where: Vak_Smena_Typ_Bool_Exp;
}>;


export type Update_Vak_Smena_TypMutation = { __typename?: 'mutation_root', update_vak_smena_typ?: { __typename?: 'vak_smena_typ_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null, predpis_obhliadka: Array<{ __typename: 'vak_predpis_obhliadka', name?: string | null, id: number, poradie?: number | null, termin_cas?: any | null, termin_cas_do?: any | null }> }> } | null };

export type Update_Vak_Smena_Typ_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<Vak_Smena_Typ_Inc_Input>;
  vak_smena_typ?: InputMaybe<Vak_Smena_Typ_Set_Input>;
  pk_columns: Vak_Smena_Typ_Pk_Columns_Input;
}>;


export type Update_Vak_Smena_Typ_By_PkMutation = { __typename?: 'mutation_root', update_vak_smena_typ_by_pk?: { __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null, predpis_obhliadka: Array<{ __typename: 'vak_predpis_obhliadka', name?: string | null, id: number, poradie?: number | null, termin_cas?: any | null, termin_cas_do?: any | null }> } | null };

export type Update_Vak_Smena_Typ_ManyMutationVariables = Exact<{
  updates: Array<Vak_Smena_Typ_Updates> | Vak_Smena_Typ_Updates;
}>;


export type Update_Vak_Smena_Typ_ManyMutation = { __typename?: 'mutation_root', update_vak_smena_typ_many?: Array<{ __typename?: 'vak_smena_typ_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null, predpis_obhliadka: Array<{ __typename: 'vak_predpis_obhliadka', name?: string | null, id: number, poradie?: number | null, termin_cas?: any | null, termin_cas_do?: any | null }> }> } | null> | null };

export type Vak_Smena_TypCrudFragment = { __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null, predpis_obhliadka: Array<{ __typename: 'vak_predpis_obhliadka', name?: string | null, id: number, poradie?: number | null, termin_cas?: any | null, termin_cas_do?: any | null }> };

export type Vak_Smena_TypListFragment = { __typename: 'vak_smena_typ', id: number, name?: string | null, class?: string | null, tolerancia?: any | null, vstup?: Vak_Smena_Typ_Vstup_Enum | null, platny?: boolean | null };

export type Vak_UlohaQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Vak_Uloha_Select_Column> | Vak_Uloha_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Order_By> | Vak_Uloha_Order_By>;
  where?: InputMaybe<Array<Vak_Uloha_Bool_Exp> | Vak_Uloha_Bool_Exp>;
}>;


export type Vak_UlohaQuery = { __typename?: 'query_root', vak_uloha: Array<{ __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null, smena: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null }, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } }> };

export type Vak_Uloha_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Vak_Uloha_By_PkQuery = { __typename?: 'query_root', vak_uloha_by_pk?: { __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null } | null };

export type Delete_Vak_UlohaMutationVariables = Exact<{
  where: Vak_Uloha_Bool_Exp;
}>;


export type Delete_Vak_UlohaMutation = { __typename?: 'mutation_root', delete_vak_uloha?: { __typename?: 'vak_uloha_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null }> } | null };

export type Delete_Vak_Uloha_By_PkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Delete_Vak_Uloha_By_PkMutation = { __typename?: 'mutation_root', delete_vak_uloha_by_pk?: { __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null } | null };

export type Insert_Vak_UlohaMutationVariables = Exact<{
  vak_uloha: Array<Vak_Uloha_Insert_Input> | Vak_Uloha_Insert_Input;
  on_conflict?: InputMaybe<Vak_Uloha_On_Conflict>;
}>;


export type Insert_Vak_UlohaMutation = { __typename?: 'mutation_root', insert_vak_uloha?: { __typename?: 'vak_uloha_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null }> } | null };

export type Insert_Vak_Uloha_OneMutationVariables = Exact<{
  vak_uloha: Vak_Uloha_Insert_Input;
  on_conflict?: InputMaybe<Vak_Uloha_On_Conflict>;
}>;


export type Insert_Vak_Uloha_OneMutation = { __typename?: 'mutation_root', insert_vak_uloha_one?: { __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null } | null };

export type Update_Vak_UlohaMutationVariables = Exact<{
  _inc?: InputMaybe<Vak_Uloha_Inc_Input>;
  vak_uloha?: InputMaybe<Vak_Uloha_Set_Input>;
  where: Vak_Uloha_Bool_Exp;
}>;


export type Update_Vak_UlohaMutation = { __typename?: 'mutation_root', update_vak_uloha?: { __typename?: 'vak_uloha_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null }> } | null };

export type Update_Vak_Uloha_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<Vak_Uloha_Inc_Input>;
  vak_uloha?: InputMaybe<Vak_Uloha_Set_Input>;
  pk_columns: Vak_Uloha_Pk_Columns_Input;
}>;


export type Update_Vak_Uloha_By_PkMutation = { __typename?: 'mutation_root', update_vak_uloha_by_pk?: { __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null } | null };

export type Update_Vak_Uloha_ManyMutationVariables = Exact<{
  updates: Array<Vak_Uloha_Updates> | Vak_Uloha_Updates;
}>;


export type Update_Vak_Uloha_ManyMutation = { __typename?: 'mutation_root', update_vak_uloha_many?: Array<{ __typename?: 'vak_uloha_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null }> } | null> | null };

export type Vak_UlohaCrudFragment = { __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null };

export type Vak_UlohaListFragment = { __typename: 'vak_uloha', id: any, done: boolean, poradie: number, vstup_cislo?: any | null, vstup_text?: string | null, platny?: boolean | null, smena: { __typename: 'vak_smena', termin_od?: any | null, id: number, termin_do?: any | null, smena_typ?: { __typename: 'vak_smena_typ', name?: string | null, id: number } | null }, kontrolny_bod: { __typename: 'vak_kontrolny_bod', name?: string | null, id: number }, uloha_typ: { __typename: 'vak_uloha_typ', name?: string | null, id: any } };

export type Vak_Uloha_TypQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Vak_Uloha_Typ_Select_Column> | Vak_Uloha_Typ_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vak_Uloha_Typ_Order_By> | Vak_Uloha_Typ_Order_By>;
  where?: InputMaybe<Array<Vak_Uloha_Typ_Bool_Exp> | Vak_Uloha_Typ_Bool_Exp>;
}>;


export type Vak_Uloha_TypQuery = { __typename?: 'query_root', vak_uloha_typ: Array<{ __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null }> };

export type Vak_Uloha_Typ_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Vak_Uloha_Typ_By_PkQuery = { __typename?: 'query_root', vak_uloha_typ_by_pk?: { __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null } | null };

export type Delete_Vak_Uloha_TypMutationVariables = Exact<{
  where: Vak_Uloha_Typ_Bool_Exp;
}>;


export type Delete_Vak_Uloha_TypMutation = { __typename?: 'mutation_root', delete_vak_uloha_typ?: { __typename?: 'vak_uloha_typ_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null }> } | null };

export type Delete_Vak_Uloha_Typ_By_PkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Delete_Vak_Uloha_Typ_By_PkMutation = { __typename?: 'mutation_root', delete_vak_uloha_typ_by_pk?: { __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null } | null };

export type Insert_Vak_Uloha_TypMutationVariables = Exact<{
  vak_uloha_typ: Array<Vak_Uloha_Typ_Insert_Input> | Vak_Uloha_Typ_Insert_Input;
  on_conflict?: InputMaybe<Vak_Uloha_Typ_On_Conflict>;
}>;


export type Insert_Vak_Uloha_TypMutation = { __typename?: 'mutation_root', insert_vak_uloha_typ?: { __typename?: 'vak_uloha_typ_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null }> } | null };

export type Insert_Vak_Uloha_Typ_OneMutationVariables = Exact<{
  vak_uloha_typ: Vak_Uloha_Typ_Insert_Input;
  on_conflict?: InputMaybe<Vak_Uloha_Typ_On_Conflict>;
}>;


export type Insert_Vak_Uloha_Typ_OneMutation = { __typename?: 'mutation_root', insert_vak_uloha_typ_one?: { __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null } | null };

export type Update_Vak_Uloha_TypMutationVariables = Exact<{
  vak_uloha_typ?: InputMaybe<Vak_Uloha_Typ_Set_Input>;
  where: Vak_Uloha_Typ_Bool_Exp;
}>;


export type Update_Vak_Uloha_TypMutation = { __typename?: 'mutation_root', update_vak_uloha_typ?: { __typename?: 'vak_uloha_typ_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null }> } | null };

export type Update_Vak_Uloha_Typ_By_PkMutationVariables = Exact<{
  vak_uloha_typ?: InputMaybe<Vak_Uloha_Typ_Set_Input>;
  pk_columns: Vak_Uloha_Typ_Pk_Columns_Input;
}>;


export type Update_Vak_Uloha_Typ_By_PkMutation = { __typename?: 'mutation_root', update_vak_uloha_typ_by_pk?: { __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null } | null };

export type Update_Vak_Uloha_Typ_ManyMutationVariables = Exact<{
  updates: Array<Vak_Uloha_Typ_Updates> | Vak_Uloha_Typ_Updates;
}>;


export type Update_Vak_Uloha_Typ_ManyMutation = { __typename?: 'mutation_root', update_vak_uloha_typ_many?: Array<{ __typename?: 'vak_uloha_typ_mutation_response', affected_rows: number, returning: Array<{ __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null }> } | null> | null };

export type Vak_Uloha_TypCrudFragment = { __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null };

export type Vak_Uloha_TypListFragment = { __typename: 'vak_uloha_typ', id: any, name?: string | null, platny?: boolean | null, vstup?: Vak_Uloha_Typ_Vstup_Enum | null };

export const Vak_KontrolaFragmentDoc = gql`
    fragment vak_kontrola on vak_kontrola {
  id
  __typename
  ok_predpis_kontrola_fk
  ok_termin
  termin_cas
  termin_datum
  platny
}
    `;
export const Vak_Smena_KontrolaFragmentDoc = gql`
    fragment vak_smena_kontrola on vak_kontrola {
  smena_fk
  id
  __typename
  termin_cas
  termin_datum
}
    `;
export const Vak_Kontrolny_BodFragmentDoc = gql`
    fragment vak_kontrolny_bod on vak_kontrolny_bod {
  id
  __typename
  kod
  name
}
    `;
export const Vak_Kontrolny_BodCrudFragmentDoc = gql`
    fragment vak_kontrolny_bodCrud on vak_kontrolny_bod {
  ...vak_kontrolny_bod
}
    ${Vak_Kontrolny_BodFragmentDoc}`;
export const Vak_Kontrolny_BodListFragmentDoc = gql`
    fragment vak_kontrolny_bodList on vak_kontrolny_bod {
  ...vak_kontrolny_bod
}
    ${Vak_Kontrolny_BodFragmentDoc}`;
export const Vak_PracovnikFragmentDoc = gql`
    fragment vak_pracovnik on vak_pracovnik {
  id
  __typename
  name
  platny
}
    `;
export const Vak_Pracovnik_Smena2pracovnikFragmentDoc = gql`
    fragment vak_pracovnik_smena2pracovnik on vak_smena2pracovnik {
  name
  id
  __typename
  platny
}
    `;
export const Vak_Pracovnik_Smena2pracovnik_SmenaFragmentDoc = gql`
    fragment vak_pracovnik_smena2pracovnik_smena on vak_smena {
  termin_od
  id
  __typename
  termin_do
}
    `;
export const Vak_Pracovnik_Smena2pracovnik_Smena_Smena_TypFragmentDoc = gql`
    fragment vak_pracovnik_smena2pracovnik_smena_smena_typ on vak_smena_typ {
  name
  id
  __typename
}
    `;
export const Vak_PracovnikCrudFragmentDoc = gql`
    fragment vak_pracovnikCrud on vak_pracovnik {
  ...vak_pracovnik
  smena2pracovnik(order_by: {id: asc}, where: {platny: {_eq: true}}) {
    ...vak_pracovnik_smena2pracovnik
    smena {
      ...vak_pracovnik_smena2pracovnik_smena
      smena_typ {
        ...vak_pracovnik_smena2pracovnik_smena_smena_typ
      }
    }
  }
}
    ${Vak_PracovnikFragmentDoc}
${Vak_Pracovnik_Smena2pracovnikFragmentDoc}
${Vak_Pracovnik_Smena2pracovnik_SmenaFragmentDoc}
${Vak_Pracovnik_Smena2pracovnik_Smena_Smena_TypFragmentDoc}`;
export const Vak_PracovnikListFragmentDoc = gql`
    fragment vak_pracovnikList on vak_pracovnik {
  ...vak_pracovnik
}
    ${Vak_PracovnikFragmentDoc}`;
export const Vak_SmenaFragmentDoc = gql`
    fragment vak_smena on vak_smena {
  id
  __typename
  termin_od
  termin_do
  ok
  informacia_teren
  informacia_kancelaria
  termin_od
  platny
}
    `;
export const Vak_Smena_Smena_TypFragmentDoc = gql`
    fragment vak_smena_smena_typ on vak_smena_typ {
  name
  id
  __typename
  vstup
  class
  platny
  tolerancia
}
    `;
export const Vak_Smena_Obhliadka_SumarFragmentDoc = gql`
    fragment vak_smena_obhliadka_sumar on vak_obhliadka_sumar {
  predpisane
  id
  __typename
  ok
  predpis_obhliadka_fk
  smena_fk
}
    `;
export const Vak_Smena_Obhliadka_Sumar_Predpis_ObhliadkaFragmentDoc = gql`
    fragment vak_smena_obhliadka_sumar_predpis_obhliadka on vak_predpis_obhliadka {
  termin_cas_do
  id
  __typename
  termin_cas
  poradie
  name
}
    `;
export const Vak_Smena_UlohaFragmentDoc = gql`
    fragment vak_smena_uloha on vak_uloha {
  done
  id
  __typename
  name
  platny
  poradie
  vstup_cislo
  vstup_text
}
    `;
export const Vak_Smena_Uloha_Kontrolny_BodFragmentDoc = gql`
    fragment vak_smena_uloha_kontrolny_bod on vak_kontrolny_bod {
  name
  id
  __typename
}
    `;
export const Vak_Smena_Uloha_Uloha_TypFragmentDoc = gql`
    fragment vak_smena_uloha_uloha_typ on vak_uloha_typ {
  name
  id
  __typename
}
    `;
export const Vak_Smena_Smena2pracovnikFragmentDoc = gql`
    fragment vak_smena_smena2pracovnik on vak_smena2pracovnik {
  id
  __typename
  name
  platny
}
    `;
export const Vak_Smena_Smena2pracovnik_PracovnikFragmentDoc = gql`
    fragment vak_smena_smena2pracovnik_pracovnik on vak_pracovnik {
  name
  id
  __typename
}
    `;
export const Vak_SmenaCrudFragmentDoc = gql`
    fragment vak_smenaCrud on vak_smena {
  ...vak_smena
  smena_typ {
    ...vak_smena_smena_typ
  }
  obhliadka_sumar(order_by: {id: asc}) {
    ...vak_smena_obhliadka_sumar
    predpis_obhliadka {
      ...vak_smena_obhliadka_sumar_predpis_obhliadka
    }
  }
  uloha(order_by: {poradie: asc}) {
    ...vak_smena_uloha
    kontrolny_bod {
      ...vak_smena_uloha_kontrolny_bod
    }
    uloha_typ {
      ...vak_smena_uloha_uloha_typ
    }
  }
  smena2pracovnik(order_by: {id: asc}, where: {platny: {_eq: true}}) {
    ...vak_smena_smena2pracovnik
    pracovnik {
      ...vak_smena_smena2pracovnik_pracovnik
    }
  }
}
    ${Vak_SmenaFragmentDoc}
${Vak_Smena_Smena_TypFragmentDoc}
${Vak_Smena_Obhliadka_SumarFragmentDoc}
${Vak_Smena_Obhliadka_Sumar_Predpis_ObhliadkaFragmentDoc}
${Vak_Smena_UlohaFragmentDoc}
${Vak_Smena_Uloha_Kontrolny_BodFragmentDoc}
${Vak_Smena_Uloha_Uloha_TypFragmentDoc}
${Vak_Smena_Smena2pracovnikFragmentDoc}
${Vak_Smena_Smena2pracovnik_PracovnikFragmentDoc}`;
export const Vak_Smena_Obhliadka_Sumar_Aggregate_Aggregate_SumFragmentDoc = gql`
    fragment vak_smena_obhliadka_sumar_aggregate_aggregate_sum on vak_obhliadka_sumar_sum_fields {
  ok
  predpisane
  __typename
}
    `;
export const Vak_SmenaListFragmentDoc = gql`
    fragment vak_smenaList on vak_smena {
  ...vak_smena
  obhliadka_sumar(order_by: {id: asc}) {
    ...vak_smena_obhliadka_sumar
  }
  smena_typ {
    ...vak_smena_smena_typ
  }
  smena2pracovnik(order_by: {id: asc}) {
    pracovnik {
      ...vak_smena_smena2pracovnik_pracovnik
    }
  }
  obhliadka_sumar_aggregate(order_by: {id: asc}) {
    aggregate {
      sum {
        ...vak_smena_obhliadka_sumar_aggregate_aggregate_sum
      }
    }
  }
}
    ${Vak_SmenaFragmentDoc}
${Vak_Smena_Obhliadka_SumarFragmentDoc}
${Vak_Smena_Smena_TypFragmentDoc}
${Vak_Smena_Smena2pracovnik_PracovnikFragmentDoc}
${Vak_Smena_Obhliadka_Sumar_Aggregate_Aggregate_SumFragmentDoc}`;
export const Vak_Smena_TypFragmentDoc = gql`
    fragment vak_smena_typ on vak_smena_typ {
  id
  name
  class
  tolerancia
  __typename
  vstup
  platny
}
    `;
export const Vak_Smena_Typ_Predpis_ObhliadkaFragmentDoc = gql`
    fragment vak_smena_typ_predpis_obhliadka on vak_predpis_obhliadka {
  name
  id
  __typename
  poradie
  termin_cas
  termin_cas_do
}
    `;
export const Vak_Smena_TypCrudFragmentDoc = gql`
    fragment vak_smena_typCrud on vak_smena_typ {
  ...vak_smena_typ
  predpis_obhliadka(order_by: {created_at: asc}) {
    ...vak_smena_typ_predpis_obhliadka
  }
}
    ${Vak_Smena_TypFragmentDoc}
${Vak_Smena_Typ_Predpis_ObhliadkaFragmentDoc}`;
export const Vak_Smena_TypListFragmentDoc = gql`
    fragment vak_smena_typList on vak_smena_typ {
  ...vak_smena_typ
}
    ${Vak_Smena_TypFragmentDoc}`;
export const Vak_UlohaFragmentDoc = gql`
    fragment vak_uloha on vak_uloha {
  id
  __typename
  done
  poradie
  vstup_cislo
  vstup_text
  platny
}
    `;
export const Vak_UlohaCrudFragmentDoc = gql`
    fragment vak_ulohaCrud on vak_uloha {
  ...vak_uloha
}
    ${Vak_UlohaFragmentDoc}`;
export const Vak_Uloha_SmenaFragmentDoc = gql`
    fragment vak_uloha_smena on vak_smena {
  termin_od
  id
  __typename
  termin_do
}
    `;
export const Vak_Uloha_Smena_Smena_TypFragmentDoc = gql`
    fragment vak_uloha_smena_smena_typ on vak_smena_typ {
  name
  id
  __typename
}
    `;
export const Vak_Uloha_Kontrolny_BodFragmentDoc = gql`
    fragment vak_uloha_kontrolny_bod on vak_kontrolny_bod {
  name
  id
  __typename
}
    `;
export const Vak_Uloha_Uloha_TypFragmentDoc = gql`
    fragment vak_uloha_uloha_typ on vak_uloha_typ {
  name
  id
  __typename
}
    `;
export const Vak_UlohaListFragmentDoc = gql`
    fragment vak_ulohaList on vak_uloha {
  ...vak_uloha
  smena {
    ...vak_uloha_smena
    smena_typ {
      ...vak_uloha_smena_smena_typ
    }
  }
  kontrolny_bod {
    ...vak_uloha_kontrolny_bod
  }
  uloha_typ {
    ...vak_uloha_uloha_typ
  }
}
    ${Vak_UlohaFragmentDoc}
${Vak_Uloha_SmenaFragmentDoc}
${Vak_Uloha_Smena_Smena_TypFragmentDoc}
${Vak_Uloha_Kontrolny_BodFragmentDoc}
${Vak_Uloha_Uloha_TypFragmentDoc}`;
export const Vak_Uloha_TypFragmentDoc = gql`
    fragment vak_uloha_typ on vak_uloha_typ {
  id
  __typename
  name
  platny
  vstup
}
    `;
export const Vak_Uloha_TypCrudFragmentDoc = gql`
    fragment vak_uloha_typCrud on vak_uloha_typ {
  ...vak_uloha_typ
}
    ${Vak_Uloha_TypFragmentDoc}`;
export const Vak_Uloha_TypListFragmentDoc = gql`
    fragment vak_uloha_typList on vak_uloha_typ {
  ...vak_uloha_typ
}
    ${Vak_Uloha_TypFragmentDoc}`;
export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;

export function useDummyQuery(options?: Omit<Urql.UseQueryArgs<DummyQueryVariables>, 'query'>) {
  return Urql.useQuery<DummyQuery, DummyQueryVariables>({ query: DummyDocument, ...options });
};
export const Vak_Kontrolny_BodDocument = gql`
    query vak_kontrolny_bod($distinct_on: [vak_kontrolny_bod_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [vak_kontrolny_bod_order_by!] = {id: desc}, $where: vak_kontrolny_bod_bool_exp) {
  vak_kontrolny_bod(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...vak_kontrolny_bodList
  }
}
    ${Vak_Kontrolny_BodListFragmentDoc}`;

export function useVak_Kontrolny_BodQuery(options?: Omit<Urql.UseQueryArgs<Vak_Kontrolny_BodQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_Kontrolny_BodQuery, Vak_Kontrolny_BodQueryVariables>({ query: Vak_Kontrolny_BodDocument, ...options });
};
export const Vak_Kontrolny_Bod_By_PkDocument = gql`
    query vak_kontrolny_bod_by_pk($id: Int!) {
  vak_kontrolny_bod_by_pk(id: $id) {
    ...vak_kontrolny_bodCrud
  }
}
    ${Vak_Kontrolny_BodCrudFragmentDoc}`;

export function useVak_Kontrolny_Bod_By_PkQuery(options: Omit<Urql.UseQueryArgs<Vak_Kontrolny_Bod_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_Kontrolny_Bod_By_PkQuery, Vak_Kontrolny_Bod_By_PkQueryVariables>({ query: Vak_Kontrolny_Bod_By_PkDocument, ...options });
};
export const Delete_Vak_Kontrolny_BodDocument = gql`
    mutation delete_vak_kontrolny_bod($where: vak_kontrolny_bod_bool_exp!) {
  delete_vak_kontrolny_bod(where: $where) {
    returning {
      ...vak_kontrolny_bodCrud
    }
    affected_rows
  }
}
    ${Vak_Kontrolny_BodCrudFragmentDoc}`;

export function useDelete_Vak_Kontrolny_BodMutation() {
  return Urql.useMutation<Delete_Vak_Kontrolny_BodMutation, Delete_Vak_Kontrolny_BodMutationVariables>(Delete_Vak_Kontrolny_BodDocument);
};
export const Delete_Vak_Kontrolny_Bod_By_PkDocument = gql`
    mutation delete_vak_kontrolny_bod_by_pk($id: Int!) {
  delete_vak_kontrolny_bod_by_pk(id: $id) {
    ...vak_kontrolny_bodCrud
  }
}
    ${Vak_Kontrolny_BodCrudFragmentDoc}`;

export function useDelete_Vak_Kontrolny_Bod_By_PkMutation() {
  return Urql.useMutation<Delete_Vak_Kontrolny_Bod_By_PkMutation, Delete_Vak_Kontrolny_Bod_By_PkMutationVariables>(Delete_Vak_Kontrolny_Bod_By_PkDocument);
};
export const Insert_Vak_Kontrolny_BodDocument = gql`
    mutation insert_vak_kontrolny_bod($vak_kontrolny_bod: [vak_kontrolny_bod_insert_input!]!, $on_conflict: vak_kontrolny_bod_on_conflict) {
  insert_vak_kontrolny_bod(objects: $vak_kontrolny_bod, on_conflict: $on_conflict) {
    returning {
      ...vak_kontrolny_bodCrud
    }
    affected_rows
  }
}
    ${Vak_Kontrolny_BodCrudFragmentDoc}`;

export function useInsert_Vak_Kontrolny_BodMutation() {
  return Urql.useMutation<Insert_Vak_Kontrolny_BodMutation, Insert_Vak_Kontrolny_BodMutationVariables>(Insert_Vak_Kontrolny_BodDocument);
};
export const Insert_Vak_Kontrolny_Bod_OneDocument = gql`
    mutation insert_vak_kontrolny_bod_one($vak_kontrolny_bod: vak_kontrolny_bod_insert_input!, $on_conflict: vak_kontrolny_bod_on_conflict) {
  insert_vak_kontrolny_bod_one(
    object: $vak_kontrolny_bod
    on_conflict: $on_conflict
  ) {
    ...vak_kontrolny_bodCrud
  }
}
    ${Vak_Kontrolny_BodCrudFragmentDoc}`;

export function useInsert_Vak_Kontrolny_Bod_OneMutation() {
  return Urql.useMutation<Insert_Vak_Kontrolny_Bod_OneMutation, Insert_Vak_Kontrolny_Bod_OneMutationVariables>(Insert_Vak_Kontrolny_Bod_OneDocument);
};
export const Update_Vak_Kontrolny_BodDocument = gql`
    mutation update_vak_kontrolny_bod($_inc: vak_kontrolny_bod_inc_input, $vak_kontrolny_bod: vak_kontrolny_bod_set_input, $where: vak_kontrolny_bod_bool_exp!) {
  update_vak_kontrolny_bod(_inc: $_inc, _set: $vak_kontrolny_bod, where: $where) {
    returning {
      ...vak_kontrolny_bodCrud
    }
    affected_rows
  }
}
    ${Vak_Kontrolny_BodCrudFragmentDoc}`;

export function useUpdate_Vak_Kontrolny_BodMutation() {
  return Urql.useMutation<Update_Vak_Kontrolny_BodMutation, Update_Vak_Kontrolny_BodMutationVariables>(Update_Vak_Kontrolny_BodDocument);
};
export const Update_Vak_Kontrolny_Bod_By_PkDocument = gql`
    mutation update_vak_kontrolny_bod_by_pk($_inc: vak_kontrolny_bod_inc_input, $vak_kontrolny_bod: vak_kontrolny_bod_set_input, $pk_columns: vak_kontrolny_bod_pk_columns_input!) {
  update_vak_kontrolny_bod_by_pk(
    _inc: $_inc
    _set: $vak_kontrolny_bod
    pk_columns: $pk_columns
  ) {
    ...vak_kontrolny_bodCrud
  }
}
    ${Vak_Kontrolny_BodCrudFragmentDoc}`;

export function useUpdate_Vak_Kontrolny_Bod_By_PkMutation() {
  return Urql.useMutation<Update_Vak_Kontrolny_Bod_By_PkMutation, Update_Vak_Kontrolny_Bod_By_PkMutationVariables>(Update_Vak_Kontrolny_Bod_By_PkDocument);
};
export const Update_Vak_Kontrolny_Bod_ManyDocument = gql`
    mutation update_vak_kontrolny_bod_many($updates: [vak_kontrolny_bod_updates!]!) {
  update_vak_kontrolny_bod_many(updates: $updates) {
    returning {
      ...vak_kontrolny_bodCrud
    }
    affected_rows
  }
}
    ${Vak_Kontrolny_BodCrudFragmentDoc}`;

export function useUpdate_Vak_Kontrolny_Bod_ManyMutation() {
  return Urql.useMutation<Update_Vak_Kontrolny_Bod_ManyMutation, Update_Vak_Kontrolny_Bod_ManyMutationVariables>(Update_Vak_Kontrolny_Bod_ManyDocument);
};
export const Vak_PracovnikDocument = gql`
    query vak_pracovnik($distinct_on: [vak_pracovnik_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [vak_pracovnik_order_by!] = {id: desc}, $where: [vak_pracovnik_bool_exp!]) {
  vak_pracovnik(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: {platny: {_eq: true}, _and: $where}
  ) {
    ...vak_pracovnikList
  }
}
    ${Vak_PracovnikListFragmentDoc}`;

export function useVak_PracovnikQuery(options?: Omit<Urql.UseQueryArgs<Vak_PracovnikQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_PracovnikQuery, Vak_PracovnikQueryVariables>({ query: Vak_PracovnikDocument, ...options });
};
export const Vak_Pracovnik_By_PkDocument = gql`
    query vak_pracovnik_by_pk($id: Int!) {
  vak_pracovnik_by_pk(id: $id) {
    ...vak_pracovnikCrud
  }
}
    ${Vak_PracovnikCrudFragmentDoc}`;

export function useVak_Pracovnik_By_PkQuery(options: Omit<Urql.UseQueryArgs<Vak_Pracovnik_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_Pracovnik_By_PkQuery, Vak_Pracovnik_By_PkQueryVariables>({ query: Vak_Pracovnik_By_PkDocument, ...options });
};
export const Delete_Vak_PracovnikDocument = gql`
    mutation delete_vak_pracovnik($where: vak_pracovnik_bool_exp!) {
  delete_vak_pracovnik(where: $where) {
    returning {
      ...vak_pracovnikCrud
    }
    affected_rows
  }
}
    ${Vak_PracovnikCrudFragmentDoc}`;

export function useDelete_Vak_PracovnikMutation() {
  return Urql.useMutation<Delete_Vak_PracovnikMutation, Delete_Vak_PracovnikMutationVariables>(Delete_Vak_PracovnikDocument);
};
export const Delete_Vak_Pracovnik_By_PkDocument = gql`
    mutation delete_vak_pracovnik_by_pk($id: Int!) {
  delete_vak_pracovnik_by_pk(id: $id) {
    ...vak_pracovnikCrud
  }
}
    ${Vak_PracovnikCrudFragmentDoc}`;

export function useDelete_Vak_Pracovnik_By_PkMutation() {
  return Urql.useMutation<Delete_Vak_Pracovnik_By_PkMutation, Delete_Vak_Pracovnik_By_PkMutationVariables>(Delete_Vak_Pracovnik_By_PkDocument);
};
export const Insert_Vak_PracovnikDocument = gql`
    mutation insert_vak_pracovnik($vak_pracovnik: [vak_pracovnik_insert_input!]!, $on_conflict: vak_pracovnik_on_conflict) {
  insert_vak_pracovnik(objects: $vak_pracovnik, on_conflict: $on_conflict) {
    returning {
      ...vak_pracovnikCrud
    }
    affected_rows
  }
}
    ${Vak_PracovnikCrudFragmentDoc}`;

export function useInsert_Vak_PracovnikMutation() {
  return Urql.useMutation<Insert_Vak_PracovnikMutation, Insert_Vak_PracovnikMutationVariables>(Insert_Vak_PracovnikDocument);
};
export const Insert_Vak_Pracovnik_OneDocument = gql`
    mutation insert_vak_pracovnik_one($vak_pracovnik: vak_pracovnik_insert_input!, $on_conflict: vak_pracovnik_on_conflict) {
  insert_vak_pracovnik_one(object: $vak_pracovnik, on_conflict: $on_conflict) {
    ...vak_pracovnikCrud
  }
}
    ${Vak_PracovnikCrudFragmentDoc}`;

export function useInsert_Vak_Pracovnik_OneMutation() {
  return Urql.useMutation<Insert_Vak_Pracovnik_OneMutation, Insert_Vak_Pracovnik_OneMutationVariables>(Insert_Vak_Pracovnik_OneDocument);
};
export const Update_Vak_PracovnikDocument = gql`
    mutation update_vak_pracovnik($_inc: vak_pracovnik_inc_input, $vak_pracovnik: vak_pracovnik_set_input, $where: vak_pracovnik_bool_exp!) {
  update_vak_pracovnik(_inc: $_inc, _set: $vak_pracovnik, where: $where) {
    returning {
      ...vak_pracovnikCrud
    }
    affected_rows
  }
}
    ${Vak_PracovnikCrudFragmentDoc}`;

export function useUpdate_Vak_PracovnikMutation() {
  return Urql.useMutation<Update_Vak_PracovnikMutation, Update_Vak_PracovnikMutationVariables>(Update_Vak_PracovnikDocument);
};
export const Update_Vak_Pracovnik_By_PkDocument = gql`
    mutation update_vak_pracovnik_by_pk($_inc: vak_pracovnik_inc_input, $vak_pracovnik: vak_pracovnik_set_input, $pk_columns: vak_pracovnik_pk_columns_input!) {
  update_vak_pracovnik_by_pk(
    _inc: $_inc
    _set: $vak_pracovnik
    pk_columns: $pk_columns
  ) {
    ...vak_pracovnikCrud
  }
}
    ${Vak_PracovnikCrudFragmentDoc}`;

export function useUpdate_Vak_Pracovnik_By_PkMutation() {
  return Urql.useMutation<Update_Vak_Pracovnik_By_PkMutation, Update_Vak_Pracovnik_By_PkMutationVariables>(Update_Vak_Pracovnik_By_PkDocument);
};
export const Update_Vak_Pracovnik_ManyDocument = gql`
    mutation update_vak_pracovnik_many($updates: [vak_pracovnik_updates!]!) {
  update_vak_pracovnik_many(updates: $updates) {
    returning {
      ...vak_pracovnikCrud
    }
    affected_rows
  }
}
    ${Vak_PracovnikCrudFragmentDoc}`;

export function useUpdate_Vak_Pracovnik_ManyMutation() {
  return Urql.useMutation<Update_Vak_Pracovnik_ManyMutation, Update_Vak_Pracovnik_ManyMutationVariables>(Update_Vak_Pracovnik_ManyDocument);
};
export const Vak_SmenaDocument = gql`
    query vak_smena($distinct_on: [vak_smena_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [vak_smena_order_by!] = {id: desc}, $where: [vak_smena_bool_exp!]) {
  vak_smena(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: {platny: {_eq: true}, _and: $where}
  ) {
    ...vak_smenaList
  }
  vak_pracovnik(where: {platny: {_eq: true}}) {
    name
    id
  }
  vak_smena_typ(where: {platny: {_eq: true}}) {
    id
    name
  }
}
    ${Vak_SmenaListFragmentDoc}`;

export function useVak_SmenaQuery(options?: Omit<Urql.UseQueryArgs<Vak_SmenaQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_SmenaQuery, Vak_SmenaQueryVariables>({ query: Vak_SmenaDocument, ...options });
};
export const Vak_Smena_By_PkDocument = gql`
    query vak_smena_by_pk($id: Int!) {
  vak_smena_by_pk(id: $id) {
    ...vak_smenaCrud
  }
  vak_uloha_typ(where: {platny: {_eq: true}}) {
    id
    name
  }
}
    ${Vak_SmenaCrudFragmentDoc}`;

export function useVak_Smena_By_PkQuery(options: Omit<Urql.UseQueryArgs<Vak_Smena_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_Smena_By_PkQuery, Vak_Smena_By_PkQueryVariables>({ query: Vak_Smena_By_PkDocument, ...options });
};
export const Vak_Smena_CreateDocument = gql`
    query vak_smena_create {
  vak_uloha_typ(where: {platny: {_eq: true}}) {
    id
    name
  }
}
    `;

export function useVak_Smena_CreateQuery(options?: Omit<Urql.UseQueryArgs<Vak_Smena_CreateQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_Smena_CreateQuery, Vak_Smena_CreateQueryVariables>({ query: Vak_Smena_CreateDocument, ...options });
};
export const Delete_Vak_SmenaDocument = gql`
    mutation delete_vak_smena($where: vak_smena_bool_exp!) {
  delete_vak_smena(where: $where) {
    returning {
      ...vak_smenaCrud
    }
    affected_rows
  }
}
    ${Vak_SmenaCrudFragmentDoc}`;

export function useDelete_Vak_SmenaMutation() {
  return Urql.useMutation<Delete_Vak_SmenaMutation, Delete_Vak_SmenaMutationVariables>(Delete_Vak_SmenaDocument);
};
export const Delete_Vak_Smena_By_PkDocument = gql`
    mutation delete_vak_smena_by_pk($id: Int!) {
  delete_vak_smena_by_pk(id: $id) {
    ...vak_smenaCrud
  }
}
    ${Vak_SmenaCrudFragmentDoc}`;

export function useDelete_Vak_Smena_By_PkMutation() {
  return Urql.useMutation<Delete_Vak_Smena_By_PkMutation, Delete_Vak_Smena_By_PkMutationVariables>(Delete_Vak_Smena_By_PkDocument);
};
export const Insert_Vak_SmenaDocument = gql`
    mutation insert_vak_smena($vak_smena: [vak_smena_insert_input!]!, $on_conflict: vak_smena_on_conflict) {
  insert_vak_smena(objects: $vak_smena, on_conflict: $on_conflict) {
    returning {
      ...vak_smenaCrud
    }
    affected_rows
  }
}
    ${Vak_SmenaCrudFragmentDoc}`;

export function useInsert_Vak_SmenaMutation() {
  return Urql.useMutation<Insert_Vak_SmenaMutation, Insert_Vak_SmenaMutationVariables>(Insert_Vak_SmenaDocument);
};
export const Insert_Vak_Smena_OneDocument = gql`
    mutation insert_vak_smena_one($vak_smena: vak_smena_insert_input!, $on_conflict: vak_smena_on_conflict) {
  insert_vak_smena_one(object: $vak_smena, on_conflict: $on_conflict) {
    ...vak_smenaCrud
  }
}
    ${Vak_SmenaCrudFragmentDoc}`;

export function useInsert_Vak_Smena_OneMutation() {
  return Urql.useMutation<Insert_Vak_Smena_OneMutation, Insert_Vak_Smena_OneMutationVariables>(Insert_Vak_Smena_OneDocument);
};
export const Update_Vak_SmenaDocument = gql`
    mutation update_vak_smena($_inc: vak_smena_inc_input, $vak_smena: vak_smena_set_input, $where: vak_smena_bool_exp!) {
  update_vak_smena(_inc: $_inc, _set: $vak_smena, where: $where) {
    returning {
      ...vak_smenaCrud
    }
    affected_rows
  }
}
    ${Vak_SmenaCrudFragmentDoc}`;

export function useUpdate_Vak_SmenaMutation() {
  return Urql.useMutation<Update_Vak_SmenaMutation, Update_Vak_SmenaMutationVariables>(Update_Vak_SmenaDocument);
};
export const Update_Vak_Smena_By_PkDocument = gql`
    mutation update_vak_smena_by_pk($_inc: vak_smena_inc_input, $vak_smena: vak_smena_set_input, $pk_columns: vak_smena_pk_columns_input!) {
  update_vak_smena_by_pk(_inc: $_inc, _set: $vak_smena, pk_columns: $pk_columns) {
    ...vak_smenaCrud
  }
}
    ${Vak_SmenaCrudFragmentDoc}`;

export function useUpdate_Vak_Smena_By_PkMutation() {
  return Urql.useMutation<Update_Vak_Smena_By_PkMutation, Update_Vak_Smena_By_PkMutationVariables>(Update_Vak_Smena_By_PkDocument);
};
export const Update_Vak_Smena_ManyDocument = gql`
    mutation update_vak_smena_many($updates: [vak_smena_updates!]!) {
  update_vak_smena_many(updates: $updates) {
    returning {
      ...vak_smenaCrud
    }
    affected_rows
  }
}
    ${Vak_SmenaCrudFragmentDoc}`;

export function useUpdate_Vak_Smena_ManyMutation() {
  return Urql.useMutation<Update_Vak_Smena_ManyMutation, Update_Vak_Smena_ManyMutationVariables>(Update_Vak_Smena_ManyDocument);
};
export const Vak_Smena_TypDocument = gql`
    query vak_smena_typ($distinct_on: [vak_smena_typ_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [vak_smena_typ_order_by!] = {id: desc}, $where: [vak_smena_typ_bool_exp!]) {
  vak_smena_typ(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: {platny: {_eq: true}, _and: $where}
  ) {
    ...vak_smena_typList
  }
}
    ${Vak_Smena_TypListFragmentDoc}`;

export function useVak_Smena_TypQuery(options?: Omit<Urql.UseQueryArgs<Vak_Smena_TypQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_Smena_TypQuery, Vak_Smena_TypQueryVariables>({ query: Vak_Smena_TypDocument, ...options });
};
export const Vak_Smena_Typ_By_PkDocument = gql`
    query vak_smena_typ_by_pk($id: Int!) {
  vak_smena_typ_by_pk(id: $id) {
    ...vak_smena_typCrud
  }
}
    ${Vak_Smena_TypCrudFragmentDoc}`;

export function useVak_Smena_Typ_By_PkQuery(options: Omit<Urql.UseQueryArgs<Vak_Smena_Typ_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_Smena_Typ_By_PkQuery, Vak_Smena_Typ_By_PkQueryVariables>({ query: Vak_Smena_Typ_By_PkDocument, ...options });
};
export const Delete_Vak_Smena_TypDocument = gql`
    mutation delete_vak_smena_typ($where: vak_smena_typ_bool_exp!) {
  delete_vak_smena_typ(where: $where) {
    returning {
      ...vak_smena_typCrud
    }
    affected_rows
  }
}
    ${Vak_Smena_TypCrudFragmentDoc}`;

export function useDelete_Vak_Smena_TypMutation() {
  return Urql.useMutation<Delete_Vak_Smena_TypMutation, Delete_Vak_Smena_TypMutationVariables>(Delete_Vak_Smena_TypDocument);
};
export const Delete_Vak_Smena_Typ_By_PkDocument = gql`
    mutation delete_vak_smena_typ_by_pk($id: Int!) {
  delete_vak_smena_typ_by_pk(id: $id) {
    ...vak_smena_typCrud
  }
}
    ${Vak_Smena_TypCrudFragmentDoc}`;

export function useDelete_Vak_Smena_Typ_By_PkMutation() {
  return Urql.useMutation<Delete_Vak_Smena_Typ_By_PkMutation, Delete_Vak_Smena_Typ_By_PkMutationVariables>(Delete_Vak_Smena_Typ_By_PkDocument);
};
export const Insert_Vak_Smena_TypDocument = gql`
    mutation insert_vak_smena_typ($vak_smena_typ: [vak_smena_typ_insert_input!]!, $on_conflict: vak_smena_typ_on_conflict) {
  insert_vak_smena_typ(objects: $vak_smena_typ, on_conflict: $on_conflict) {
    returning {
      ...vak_smena_typCrud
    }
    affected_rows
  }
}
    ${Vak_Smena_TypCrudFragmentDoc}`;

export function useInsert_Vak_Smena_TypMutation() {
  return Urql.useMutation<Insert_Vak_Smena_TypMutation, Insert_Vak_Smena_TypMutationVariables>(Insert_Vak_Smena_TypDocument);
};
export const Insert_Vak_Smena_Typ_OneDocument = gql`
    mutation insert_vak_smena_typ_one($vak_smena_typ: vak_smena_typ_insert_input!, $on_conflict: vak_smena_typ_on_conflict) {
  insert_vak_smena_typ_one(object: $vak_smena_typ, on_conflict: $on_conflict) {
    ...vak_smena_typCrud
  }
}
    ${Vak_Smena_TypCrudFragmentDoc}`;

export function useInsert_Vak_Smena_Typ_OneMutation() {
  return Urql.useMutation<Insert_Vak_Smena_Typ_OneMutation, Insert_Vak_Smena_Typ_OneMutationVariables>(Insert_Vak_Smena_Typ_OneDocument);
};
export const Update_Vak_Smena_TypDocument = gql`
    mutation update_vak_smena_typ($_inc: vak_smena_typ_inc_input, $vak_smena_typ: vak_smena_typ_set_input, $where: vak_smena_typ_bool_exp!) {
  update_vak_smena_typ(_inc: $_inc, _set: $vak_smena_typ, where: $where) {
    returning {
      ...vak_smena_typCrud
    }
    affected_rows
  }
}
    ${Vak_Smena_TypCrudFragmentDoc}`;

export function useUpdate_Vak_Smena_TypMutation() {
  return Urql.useMutation<Update_Vak_Smena_TypMutation, Update_Vak_Smena_TypMutationVariables>(Update_Vak_Smena_TypDocument);
};
export const Update_Vak_Smena_Typ_By_PkDocument = gql`
    mutation update_vak_smena_typ_by_pk($_inc: vak_smena_typ_inc_input, $vak_smena_typ: vak_smena_typ_set_input, $pk_columns: vak_smena_typ_pk_columns_input!) {
  update_vak_smena_typ_by_pk(
    _inc: $_inc
    _set: $vak_smena_typ
    pk_columns: $pk_columns
  ) {
    ...vak_smena_typCrud
  }
}
    ${Vak_Smena_TypCrudFragmentDoc}`;

export function useUpdate_Vak_Smena_Typ_By_PkMutation() {
  return Urql.useMutation<Update_Vak_Smena_Typ_By_PkMutation, Update_Vak_Smena_Typ_By_PkMutationVariables>(Update_Vak_Smena_Typ_By_PkDocument);
};
export const Update_Vak_Smena_Typ_ManyDocument = gql`
    mutation update_vak_smena_typ_many($updates: [vak_smena_typ_updates!]!) {
  update_vak_smena_typ_many(updates: $updates) {
    returning {
      ...vak_smena_typCrud
    }
    affected_rows
  }
}
    ${Vak_Smena_TypCrudFragmentDoc}`;

export function useUpdate_Vak_Smena_Typ_ManyMutation() {
  return Urql.useMutation<Update_Vak_Smena_Typ_ManyMutation, Update_Vak_Smena_Typ_ManyMutationVariables>(Update_Vak_Smena_Typ_ManyDocument);
};
export const Vak_UlohaDocument = gql`
    query vak_uloha($distinct_on: [vak_uloha_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [vak_uloha_order_by!] = {id: desc}, $where: [vak_uloha_bool_exp!]) {
  vak_uloha(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: {platny: {_eq: true}, _and: $where}
  ) {
    ...vak_ulohaList
  }
}
    ${Vak_UlohaListFragmentDoc}`;

export function useVak_UlohaQuery(options?: Omit<Urql.UseQueryArgs<Vak_UlohaQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_UlohaQuery, Vak_UlohaQueryVariables>({ query: Vak_UlohaDocument, ...options });
};
export const Vak_Uloha_By_PkDocument = gql`
    query vak_uloha_by_pk($id: uuid!) {
  vak_uloha_by_pk(id: $id) {
    ...vak_ulohaCrud
  }
}
    ${Vak_UlohaCrudFragmentDoc}`;

export function useVak_Uloha_By_PkQuery(options: Omit<Urql.UseQueryArgs<Vak_Uloha_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_Uloha_By_PkQuery, Vak_Uloha_By_PkQueryVariables>({ query: Vak_Uloha_By_PkDocument, ...options });
};
export const Delete_Vak_UlohaDocument = gql`
    mutation delete_vak_uloha($where: vak_uloha_bool_exp!) {
  delete_vak_uloha(where: $where) {
    returning {
      ...vak_ulohaCrud
    }
    affected_rows
  }
}
    ${Vak_UlohaCrudFragmentDoc}`;

export function useDelete_Vak_UlohaMutation() {
  return Urql.useMutation<Delete_Vak_UlohaMutation, Delete_Vak_UlohaMutationVariables>(Delete_Vak_UlohaDocument);
};
export const Delete_Vak_Uloha_By_PkDocument = gql`
    mutation delete_vak_uloha_by_pk($id: uuid!) {
  delete_vak_uloha_by_pk(id: $id) {
    ...vak_ulohaCrud
  }
}
    ${Vak_UlohaCrudFragmentDoc}`;

export function useDelete_Vak_Uloha_By_PkMutation() {
  return Urql.useMutation<Delete_Vak_Uloha_By_PkMutation, Delete_Vak_Uloha_By_PkMutationVariables>(Delete_Vak_Uloha_By_PkDocument);
};
export const Insert_Vak_UlohaDocument = gql`
    mutation insert_vak_uloha($vak_uloha: [vak_uloha_insert_input!]!, $on_conflict: vak_uloha_on_conflict) {
  insert_vak_uloha(objects: $vak_uloha, on_conflict: $on_conflict) {
    returning {
      ...vak_ulohaCrud
    }
    affected_rows
  }
}
    ${Vak_UlohaCrudFragmentDoc}`;

export function useInsert_Vak_UlohaMutation() {
  return Urql.useMutation<Insert_Vak_UlohaMutation, Insert_Vak_UlohaMutationVariables>(Insert_Vak_UlohaDocument);
};
export const Insert_Vak_Uloha_OneDocument = gql`
    mutation insert_vak_uloha_one($vak_uloha: vak_uloha_insert_input!, $on_conflict: vak_uloha_on_conflict) {
  insert_vak_uloha_one(object: $vak_uloha, on_conflict: $on_conflict) {
    ...vak_ulohaCrud
  }
}
    ${Vak_UlohaCrudFragmentDoc}`;

export function useInsert_Vak_Uloha_OneMutation() {
  return Urql.useMutation<Insert_Vak_Uloha_OneMutation, Insert_Vak_Uloha_OneMutationVariables>(Insert_Vak_Uloha_OneDocument);
};
export const Update_Vak_UlohaDocument = gql`
    mutation update_vak_uloha($_inc: vak_uloha_inc_input, $vak_uloha: vak_uloha_set_input, $where: vak_uloha_bool_exp!) {
  update_vak_uloha(_inc: $_inc, _set: $vak_uloha, where: $where) {
    returning {
      ...vak_ulohaCrud
    }
    affected_rows
  }
}
    ${Vak_UlohaCrudFragmentDoc}`;

export function useUpdate_Vak_UlohaMutation() {
  return Urql.useMutation<Update_Vak_UlohaMutation, Update_Vak_UlohaMutationVariables>(Update_Vak_UlohaDocument);
};
export const Update_Vak_Uloha_By_PkDocument = gql`
    mutation update_vak_uloha_by_pk($_inc: vak_uloha_inc_input, $vak_uloha: vak_uloha_set_input, $pk_columns: vak_uloha_pk_columns_input!) {
  update_vak_uloha_by_pk(_inc: $_inc, _set: $vak_uloha, pk_columns: $pk_columns) {
    ...vak_ulohaCrud
  }
}
    ${Vak_UlohaCrudFragmentDoc}`;

export function useUpdate_Vak_Uloha_By_PkMutation() {
  return Urql.useMutation<Update_Vak_Uloha_By_PkMutation, Update_Vak_Uloha_By_PkMutationVariables>(Update_Vak_Uloha_By_PkDocument);
};
export const Update_Vak_Uloha_ManyDocument = gql`
    mutation update_vak_uloha_many($updates: [vak_uloha_updates!]!) {
  update_vak_uloha_many(updates: $updates) {
    returning {
      ...vak_ulohaCrud
    }
    affected_rows
  }
}
    ${Vak_UlohaCrudFragmentDoc}`;

export function useUpdate_Vak_Uloha_ManyMutation() {
  return Urql.useMutation<Update_Vak_Uloha_ManyMutation, Update_Vak_Uloha_ManyMutationVariables>(Update_Vak_Uloha_ManyDocument);
};
export const Vak_Uloha_TypDocument = gql`
    query vak_uloha_typ($distinct_on: [vak_uloha_typ_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [vak_uloha_typ_order_by!] = {id: desc}, $where: [vak_uloha_typ_bool_exp!]) {
  vak_uloha_typ(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: {platny: {_eq: true}, _and: $where}
  ) {
    ...vak_uloha_typList
  }
}
    ${Vak_Uloha_TypListFragmentDoc}`;

export function useVak_Uloha_TypQuery(options?: Omit<Urql.UseQueryArgs<Vak_Uloha_TypQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_Uloha_TypQuery, Vak_Uloha_TypQueryVariables>({ query: Vak_Uloha_TypDocument, ...options });
};
export const Vak_Uloha_Typ_By_PkDocument = gql`
    query vak_uloha_typ_by_pk($id: uuid!) {
  vak_uloha_typ_by_pk(id: $id) {
    ...vak_uloha_typCrud
  }
}
    ${Vak_Uloha_TypCrudFragmentDoc}`;

export function useVak_Uloha_Typ_By_PkQuery(options: Omit<Urql.UseQueryArgs<Vak_Uloha_Typ_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Vak_Uloha_Typ_By_PkQuery, Vak_Uloha_Typ_By_PkQueryVariables>({ query: Vak_Uloha_Typ_By_PkDocument, ...options });
};
export const Delete_Vak_Uloha_TypDocument = gql`
    mutation delete_vak_uloha_typ($where: vak_uloha_typ_bool_exp!) {
  delete_vak_uloha_typ(where: $where) {
    returning {
      ...vak_uloha_typCrud
    }
    affected_rows
  }
}
    ${Vak_Uloha_TypCrudFragmentDoc}`;

export function useDelete_Vak_Uloha_TypMutation() {
  return Urql.useMutation<Delete_Vak_Uloha_TypMutation, Delete_Vak_Uloha_TypMutationVariables>(Delete_Vak_Uloha_TypDocument);
};
export const Delete_Vak_Uloha_Typ_By_PkDocument = gql`
    mutation delete_vak_uloha_typ_by_pk($id: uuid!) {
  delete_vak_uloha_typ_by_pk(id: $id) {
    ...vak_uloha_typCrud
  }
}
    ${Vak_Uloha_TypCrudFragmentDoc}`;

export function useDelete_Vak_Uloha_Typ_By_PkMutation() {
  return Urql.useMutation<Delete_Vak_Uloha_Typ_By_PkMutation, Delete_Vak_Uloha_Typ_By_PkMutationVariables>(Delete_Vak_Uloha_Typ_By_PkDocument);
};
export const Insert_Vak_Uloha_TypDocument = gql`
    mutation insert_vak_uloha_typ($vak_uloha_typ: [vak_uloha_typ_insert_input!]!, $on_conflict: vak_uloha_typ_on_conflict) {
  insert_vak_uloha_typ(objects: $vak_uloha_typ, on_conflict: $on_conflict) {
    returning {
      ...vak_uloha_typCrud
    }
    affected_rows
  }
}
    ${Vak_Uloha_TypCrudFragmentDoc}`;

export function useInsert_Vak_Uloha_TypMutation() {
  return Urql.useMutation<Insert_Vak_Uloha_TypMutation, Insert_Vak_Uloha_TypMutationVariables>(Insert_Vak_Uloha_TypDocument);
};
export const Insert_Vak_Uloha_Typ_OneDocument = gql`
    mutation insert_vak_uloha_typ_one($vak_uloha_typ: vak_uloha_typ_insert_input!, $on_conflict: vak_uloha_typ_on_conflict) {
  insert_vak_uloha_typ_one(object: $vak_uloha_typ, on_conflict: $on_conflict) {
    ...vak_uloha_typCrud
  }
}
    ${Vak_Uloha_TypCrudFragmentDoc}`;

export function useInsert_Vak_Uloha_Typ_OneMutation() {
  return Urql.useMutation<Insert_Vak_Uloha_Typ_OneMutation, Insert_Vak_Uloha_Typ_OneMutationVariables>(Insert_Vak_Uloha_Typ_OneDocument);
};
export const Update_Vak_Uloha_TypDocument = gql`
    mutation update_vak_uloha_typ($vak_uloha_typ: vak_uloha_typ_set_input, $where: vak_uloha_typ_bool_exp!) {
  update_vak_uloha_typ(_set: $vak_uloha_typ, where: $where) {
    returning {
      ...vak_uloha_typCrud
    }
    affected_rows
  }
}
    ${Vak_Uloha_TypCrudFragmentDoc}`;

export function useUpdate_Vak_Uloha_TypMutation() {
  return Urql.useMutation<Update_Vak_Uloha_TypMutation, Update_Vak_Uloha_TypMutationVariables>(Update_Vak_Uloha_TypDocument);
};
export const Update_Vak_Uloha_Typ_By_PkDocument = gql`
    mutation update_vak_uloha_typ_by_pk($vak_uloha_typ: vak_uloha_typ_set_input, $pk_columns: vak_uloha_typ_pk_columns_input!) {
  update_vak_uloha_typ_by_pk(_set: $vak_uloha_typ, pk_columns: $pk_columns) {
    ...vak_uloha_typCrud
  }
}
    ${Vak_Uloha_TypCrudFragmentDoc}`;

export function useUpdate_Vak_Uloha_Typ_By_PkMutation() {
  return Urql.useMutation<Update_Vak_Uloha_Typ_By_PkMutation, Update_Vak_Uloha_Typ_By_PkMutationVariables>(Update_Vak_Uloha_Typ_By_PkDocument);
};
export const Update_Vak_Uloha_Typ_ManyDocument = gql`
    mutation update_vak_uloha_typ_many($updates: [vak_uloha_typ_updates!]!) {
  update_vak_uloha_typ_many(updates: $updates) {
    returning {
      ...vak_uloha_typCrud
    }
    affected_rows
  }
}
    ${Vak_Uloha_TypCrudFragmentDoc}`;

export function useUpdate_Vak_Uloha_Typ_ManyMutation() {
  return Urql.useMutation<Update_Vak_Uloha_Typ_ManyMutation, Update_Vak_Uloha_Typ_ManyMutationVariables>(Update_Vak_Uloha_Typ_ManyDocument);
};