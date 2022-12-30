/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ApplicationQuestionItemsDynamicZoneInput: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ApplicationField = {
  __typename?: 'ApplicationField';
  applications?: Maybe<ApplicationSessionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  questions?: Maybe<ApplicationQuestionRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ApplicationFieldApplicationsArgs = {
  filters?: InputMaybe<ApplicationSessionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ApplicationFieldQuestionsArgs = {
  filters?: InputMaybe<ApplicationQuestionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ApplicationFieldEntity = {
  __typename?: 'ApplicationFieldEntity';
  attributes?: Maybe<ApplicationField>;
  id?: Maybe<Scalars['ID']>;
};

export type ApplicationFieldEntityResponse = {
  __typename?: 'ApplicationFieldEntityResponse';
  data?: Maybe<ApplicationFieldEntity>;
};

export type ApplicationFieldEntityResponseCollection = {
  __typename?: 'ApplicationFieldEntityResponseCollection';
  data: Array<ApplicationFieldEntity>;
  meta: ResponseCollectionMeta;
};

export type ApplicationFieldFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ApplicationFieldFiltersInput>>>;
  applications?: InputMaybe<ApplicationSessionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ApplicationFieldFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ApplicationFieldFiltersInput>>>;
  questions?: InputMaybe<ApplicationQuestionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ApplicationFieldInput = {
  applications?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ApplicationQuestion = {
  __typename?: 'ApplicationQuestion';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  field?: Maybe<ApplicationFieldEntityResponse>;
  items: Array<Maybe<ApplicationQuestionItemsDynamicZone>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ApplicationQuestionEntity = {
  __typename?: 'ApplicationQuestionEntity';
  attributes?: Maybe<ApplicationQuestion>;
  id?: Maybe<Scalars['ID']>;
};

export type ApplicationQuestionEntityResponse = {
  __typename?: 'ApplicationQuestionEntityResponse';
  data?: Maybe<ApplicationQuestionEntity>;
};

export type ApplicationQuestionEntityResponseCollection = {
  __typename?: 'ApplicationQuestionEntityResponseCollection';
  data: Array<ApplicationQuestionEntity>;
  meta: ResponseCollectionMeta;
};

export type ApplicationQuestionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ApplicationQuestionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  field?: InputMaybe<ApplicationFieldFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ApplicationQuestionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ApplicationQuestionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ApplicationQuestionInput = {
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['ID']>;
  items?: InputMaybe<Array<Scalars['ApplicationQuestionItemsDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ApplicationQuestionItemsDynamicZone = ComponentApplicationCodeblock | ComponentApplicationImage | ComponentApplicationTweet | Error;

export type ApplicationQuestionRelationResponseCollection = {
  __typename?: 'ApplicationQuestionRelationResponseCollection';
  data: Array<ApplicationQuestionEntity>;
};

export type ApplicationSession = {
  __typename?: 'ApplicationSession';
  completed: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  field?: Maybe<ApplicationFieldEntityResponse>;
  identifier: Scalars['String'];
  name: Scalars['String'];
  response?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ApplicationSessionEntity = {
  __typename?: 'ApplicationSessionEntity';
  attributes?: Maybe<ApplicationSession>;
  id?: Maybe<Scalars['ID']>;
};

export type ApplicationSessionEntityResponse = {
  __typename?: 'ApplicationSessionEntityResponse';
  data?: Maybe<ApplicationSessionEntity>;
};

export type ApplicationSessionEntityResponseCollection = {
  __typename?: 'ApplicationSessionEntityResponseCollection';
  data: Array<ApplicationSessionEntity>;
  meta: ResponseCollectionMeta;
};

export type ApplicationSessionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ApplicationSessionFiltersInput>>>;
  completed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  field?: InputMaybe<ApplicationFieldFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  identifier?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ApplicationSessionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ApplicationSessionFiltersInput>>>;
  response?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ApplicationSessionInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  field?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  response?: InputMaybe<Scalars['JSON']>;
};

export type ApplicationSessionRelationResponseCollection = {
  __typename?: 'ApplicationSessionRelationResponseCollection';
  data: Array<ApplicationSessionEntity>;
};

export type AwesomeHelpHelp = {
  __typename?: 'AwesomeHelpHelp';
  componentName?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fieldName?: Maybe<Scalars['String']>;
  helpContent?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zoneName?: Maybe<Scalars['String']>;
};

export type AwesomeHelpHelpEntity = {
  __typename?: 'AwesomeHelpHelpEntity';
  attributes?: Maybe<AwesomeHelpHelp>;
  id?: Maybe<Scalars['ID']>;
};

export type AwesomeHelpHelpEntityResponse = {
  __typename?: 'AwesomeHelpHelpEntityResponse';
  data?: Maybe<AwesomeHelpHelpEntity>;
};

export type AwesomeHelpHelpEntityResponseCollection = {
  __typename?: 'AwesomeHelpHelpEntityResponseCollection';
  data: Array<AwesomeHelpHelpEntity>;
  meta: ResponseCollectionMeta;
};

export type AwesomeHelpHelpFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AwesomeHelpHelpFiltersInput>>>;
  componentName?: InputMaybe<StringFilterInput>;
  containerType?: InputMaybe<StringFilterInput>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fieldName?: InputMaybe<StringFilterInput>;
  helpContent?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AwesomeHelpHelpFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AwesomeHelpHelpFiltersInput>>>;
  path?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  zoneName?: InputMaybe<StringFilterInput>;
};

export type AwesomeHelpHelpInput = {
  componentName?: InputMaybe<Scalars['String']>;
  containerType?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  fieldName?: InputMaybe<Scalars['String']>;
  helpContent?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  zoneName?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComingSoon = {
  __typename?: 'ComingSoon';
  Text: Scalars['String'];
  Title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ComingSoonRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ComingSoonLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type ComingSoonEntity = {
  __typename?: 'ComingSoonEntity';
  attributes?: Maybe<ComingSoon>;
  id?: Maybe<Scalars['ID']>;
};

export type ComingSoonEntityResponse = {
  __typename?: 'ComingSoonEntityResponse';
  data?: Maybe<ComingSoonEntity>;
};

export type ComingSoonInput = {
  Text?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ComingSoonRelationResponseCollection = {
  __typename?: 'ComingSoonRelationResponseCollection';
  data: Array<ComingSoonEntity>;
};

export type ComponentApplicationCodeblock = {
  __typename?: 'ComponentApplicationCodeblock';
  content?: Maybe<Scalars['String']>;
  editable: Scalars['Boolean'];
  filename: Scalars['String'];
  id: Scalars['ID'];
};

export type ComponentApplicationImage = {
  __typename?: 'ComponentApplicationImage';
  alt: Scalars['String'];
  id: Scalars['ID'];
  src: Scalars['String'];
};

export type ComponentApplicationTweet = {
  __typename?: 'ComponentApplicationTweet';
  avatar?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['ID'];
  replies?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type ComponentCommonButton = {
  __typename?: 'ComponentCommonButton';
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  to: Scalars['String'];
  type: Enum_Componentcommonbutton_Type;
};

export type ComponentCommonContributor = {
  __typename?: 'ComponentCommonContributor';
  character: Scalars['String'];
  contributor?: Maybe<ContributorEntityResponse>;
  id: Scalars['ID'];
  role: Scalars['String'];
};

export type ComponentCommonContributorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonContributorFiltersInput>>>;
  character?: InputMaybe<StringFilterInput>;
  contributor?: InputMaybe<ContributorFiltersInput>;
  not?: InputMaybe<ComponentCommonContributorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonContributorFiltersInput>>>;
  role?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonContributorInput = {
  character?: InputMaybe<Scalars['String']>;
  contributor?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  role?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonTextBlock = {
  __typename?: 'ComponentCommonTextBlock';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentFeaturedFilm = {
  __typename?: 'ComponentFeaturedFilm';
  id: Scalars['ID'];
  video?: Maybe<VideoEntityResponse>;
};

export type ComponentFeaturedSeries = {
  __typename?: 'ComponentFeaturedSeries';
  id: Scalars['ID'];
  serie?: Maybe<SerieEntityResponse>;
};

export type ComponentMoviePoster = {
  __typename?: 'ComponentMoviePoster';
  description: Scalars['String'];
  id: Scalars['ID'];
  is_series: Scalars['Boolean'];
  poster_img: UploadFileEntityResponse;
  title: Scalars['String'];
};

export type ComponentMovieVideo = {
  __typename?: 'ComponentMovieVideo';
  id: Scalars['ID'];
  num?: Maybe<Scalars['Int']>;
  video?: Maybe<VideoEntityResponse>;
};

export type Contributor = {
  __typename?: 'Contributor';
  bio: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  href?: Maybe<Scalars['String']>;
  image: UploadFileEntityResponse;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContributorEntity = {
  __typename?: 'ContributorEntity';
  attributes?: Maybe<Contributor>;
  id?: Maybe<Scalars['ID']>;
};

export type ContributorEntityResponse = {
  __typename?: 'ContributorEntityResponse';
  data?: Maybe<ContributorEntity>;
};

export type ContributorEntityResponseCollection = {
  __typename?: 'ContributorEntityResponseCollection';
  data: Array<ContributorEntity>;
  meta: ResponseCollectionMeta;
};

export type ContributorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContributorFiltersInput>>>;
  bio?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContributorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContributorFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContributorInput = {
  bio?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentcommonbutton_Type {
  Button = 'button',
  Link = 'link',
  Linkout = 'linkout'
}

export enum Enum_Graphsbuildergraph_Type {
  Bar = 'bar',
  DateLine = 'dateLine',
  Line = 'line',
  Pie = 'pie'
}

export enum Enum_Serie_Genre {
  Action = 'Action',
  Adventure = 'Adventure',
  Animation = 'Animation',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Family = 'Family',
  Fantasy = 'Fantasy',
  History = 'History',
  Horror = 'Horror',
  Music = 'Music',
  Mystery = 'Mystery',
  Romance = 'Romance',
  SciFi = 'SciFi',
  Thriller = 'Thriller',
  War = 'War'
}

export enum Enum_Video_Genre {
  Action = 'Action',
  Adventure = 'Adventure',
  Animation = 'Animation',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Family = 'Family',
  Fantasy = 'Fantasy',
  History = 'History',
  Horror = 'Horror',
  Music = 'Music',
  Mystery = 'Mystery',
  Romance = 'Romance',
  SciFi = 'SciFi',
  Thriller = 'Thriller',
  War = 'War'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type EzformsRecipient = {
  __typename?: 'EzformsRecipient';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EzformsRecipientEntity = {
  __typename?: 'EzformsRecipientEntity';
  attributes?: Maybe<EzformsRecipient>;
  id?: Maybe<Scalars['ID']>;
};

export type EzformsRecipientEntityResponse = {
  __typename?: 'EzformsRecipientEntityResponse';
  data?: Maybe<EzformsRecipientEntity>;
};

export type EzformsRecipientEntityResponseCollection = {
  __typename?: 'EzformsRecipientEntityResponseCollection';
  data: Array<EzformsRecipientEntity>;
  meta: ResponseCollectionMeta;
};

export type EzformsRecipientFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EzformsRecipientFiltersInput>;
  number?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EzformsRecipientInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
};

export type EzformsSubmission = {
  __typename?: 'EzformsSubmission';
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Scalars['JSON']>;
  formName?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EzformsSubmissionEntity = {
  __typename?: 'EzformsSubmissionEntity';
  attributes?: Maybe<EzformsSubmission>;
  id?: Maybe<Scalars['ID']>;
};

export type EzformsSubmissionEntityResponse = {
  __typename?: 'EzformsSubmissionEntityResponse';
  data?: Maybe<EzformsSubmissionEntity>;
};

export type EzformsSubmissionEntityResponseCollection = {
  __typename?: 'EzformsSubmissionEntityResponseCollection';
  data: Array<EzformsSubmissionEntity>;
  meta: ResponseCollectionMeta;
};

export type EzformsSubmissionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  data?: InputMaybe<JsonFilterInput>;
  formName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EzformsSubmissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  score?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EzformsSubmissionInput = {
  data?: InputMaybe<Scalars['JSON']>;
  formName?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['String']>;
};

export type Featured = {
  __typename?: 'Featured';
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video?: Maybe<VideoEntityResponse>;
};

export type FeaturedEntity = {
  __typename?: 'FeaturedEntity';
  attributes?: Maybe<Featured>;
  id?: Maybe<Scalars['ID']>;
};

export type FeaturedEntityResponse = {
  __typename?: 'FeaturedEntityResponse';
  data?: Maybe<FeaturedEntity>;
};

export type FeaturedInput = {
  video?: InputMaybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = ApplicationField | ApplicationQuestion | ApplicationSession | AwesomeHelpHelp | ComingSoon | ComponentApplicationCodeblock | ComponentApplicationImage | ComponentApplicationTweet | ComponentCommonButton | ComponentCommonContributor | ComponentCommonTextBlock | ComponentFeaturedFilm | ComponentFeaturedSeries | ComponentMoviePoster | ComponentMovieVideo | Contributor | EzformsRecipient | EzformsSubmission | Featured | GraphsBuilderGraph | I18NLocale | Imprint | Serie | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Video;

export type GraphsBuilderGraph = {
  __typename?: 'GraphsBuilderGraph';
  collectionX: Scalars['String'];
  collectionXAttribute?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  type: Enum_Graphsbuildergraph_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GraphsBuilderGraphEntity = {
  __typename?: 'GraphsBuilderGraphEntity';
  attributes?: Maybe<GraphsBuilderGraph>;
  id?: Maybe<Scalars['ID']>;
};

export type GraphsBuilderGraphEntityResponse = {
  __typename?: 'GraphsBuilderGraphEntityResponse';
  data?: Maybe<GraphsBuilderGraphEntity>;
};

export type GraphsBuilderGraphEntityResponseCollection = {
  __typename?: 'GraphsBuilderGraphEntityResponseCollection';
  data: Array<GraphsBuilderGraphEntity>;
  meta: ResponseCollectionMeta;
};

export type GraphsBuilderGraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GraphsBuilderGraphFiltersInput>>>;
  collectionX?: InputMaybe<StringFilterInput>;
  collectionXAttribute?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<GraphsBuilderGraphFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GraphsBuilderGraphFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GraphsBuilderGraphInput = {
  collectionX?: InputMaybe<Scalars['String']>;
  collectionXAttribute?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Graphsbuildergraph_Type>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type Imprint = {
  __typename?: 'Imprint';
  createdAt?: Maybe<Scalars['DateTime']>;
  impressum: Scalars['String'];
  privacy: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  terms: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ImprintEntity = {
  __typename?: 'ImprintEntity';
  attributes?: Maybe<Imprint>;
  id?: Maybe<Scalars['ID']>;
};

export type ImprintEntityResponse = {
  __typename?: 'ImprintEntityResponse';
  data?: Maybe<ImprintEntity>;
};

export type ImprintInput = {
  impressum?: InputMaybe<Scalars['String']>;
  privacy?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  terms?: InputMaybe<Scalars['String']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createApplicationField?: Maybe<ApplicationFieldEntityResponse>;
  createApplicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  createApplicationSession?: Maybe<ApplicationSessionEntityResponse>;
  createAwesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  createComingSoonLocalization?: Maybe<ComingSoonEntityResponse>;
  createContributor?: Maybe<ContributorEntityResponse>;
  createEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  createEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  createGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  createSerie?: Maybe<SerieEntityResponse>;
  createSerieLocalization?: Maybe<SerieEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVideo?: Maybe<VideoEntityResponse>;
  createVideoLocalization?: Maybe<VideoEntityResponse>;
  deleteApplicationField?: Maybe<ApplicationFieldEntityResponse>;
  deleteApplicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  deleteApplicationSession?: Maybe<ApplicationSessionEntityResponse>;
  deleteAwesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  deleteComingSoon?: Maybe<ComingSoonEntityResponse>;
  deleteContributor?: Maybe<ContributorEntityResponse>;
  deleteEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  deleteEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  deleteFeatured?: Maybe<FeaturedEntityResponse>;
  deleteGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  deleteImprint?: Maybe<ImprintEntityResponse>;
  deleteSerie?: Maybe<SerieEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVideo?: Maybe<VideoEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateApplicationField?: Maybe<ApplicationFieldEntityResponse>;
  updateApplicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  updateApplicationSession?: Maybe<ApplicationSessionEntityResponse>;
  updateAwesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  updateComingSoon?: Maybe<ComingSoonEntityResponse>;
  updateContributor?: Maybe<ContributorEntityResponse>;
  updateEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  updateEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  updateFeatured?: Maybe<FeaturedEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  updateImprint?: Maybe<ImprintEntityResponse>;
  updateSerie?: Maybe<SerieEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVideo?: Maybe<VideoEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateApplicationFieldArgs = {
  data: ApplicationFieldInput;
};


export type MutationCreateApplicationQuestionArgs = {
  data: ApplicationQuestionInput;
};


export type MutationCreateApplicationSessionArgs = {
  data: ApplicationSessionInput;
};


export type MutationCreateAwesomeHelpHelpArgs = {
  data: AwesomeHelpHelpInput;
};


export type MutationCreateComingSoonLocalizationArgs = {
  data?: InputMaybe<ComingSoonInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContributorArgs = {
  data: ContributorInput;
};


export type MutationCreateEzformsRecipientArgs = {
  data: EzformsRecipientInput;
};


export type MutationCreateEzformsSubmissionArgs = {
  data: EzformsSubmissionInput;
};


export type MutationCreateGraphsBuilderGraphArgs = {
  data: GraphsBuilderGraphInput;
};


export type MutationCreateSerieArgs = {
  data: SerieInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSerieLocalizationArgs = {
  data?: InputMaybe<SerieInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVideoArgs = {
  data: VideoInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateVideoLocalizationArgs = {
  data?: InputMaybe<VideoInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteApplicationFieldArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicationQuestionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicationSessionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAwesomeHelpHelpArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteComingSoonArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteContributorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEzformsRecipientArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEzformsSubmissionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGraphsBuilderGraphArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSerieArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVideoArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateApplicationFieldArgs = {
  data: ApplicationFieldInput;
  id: Scalars['ID'];
};


export type MutationUpdateApplicationQuestionArgs = {
  data: ApplicationQuestionInput;
  id: Scalars['ID'];
};


export type MutationUpdateApplicationSessionArgs = {
  data: ApplicationSessionInput;
  id: Scalars['ID'];
};


export type MutationUpdateAwesomeHelpHelpArgs = {
  data: AwesomeHelpHelpInput;
  id: Scalars['ID'];
};


export type MutationUpdateComingSoonArgs = {
  data: ComingSoonInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateContributorArgs = {
  data: ContributorInput;
  id: Scalars['ID'];
};


export type MutationUpdateEzformsRecipientArgs = {
  data: EzformsRecipientInput;
  id: Scalars['ID'];
};


export type MutationUpdateEzformsSubmissionArgs = {
  data: EzformsSubmissionInput;
  id: Scalars['ID'];
};


export type MutationUpdateFeaturedArgs = {
  data: FeaturedInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGraphsBuilderGraphArgs = {
  data: GraphsBuilderGraphInput;
  id: Scalars['ID'];
};


export type MutationUpdateImprintArgs = {
  data: ImprintInput;
};


export type MutationUpdateSerieArgs = {
  data: SerieInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateVideoArgs = {
  data: VideoInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  applicationField?: Maybe<ApplicationFieldEntityResponse>;
  applicationFields?: Maybe<ApplicationFieldEntityResponseCollection>;
  applicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  applicationQuestions?: Maybe<ApplicationQuestionEntityResponseCollection>;
  applicationSession?: Maybe<ApplicationSessionEntityResponse>;
  applicationSessions?: Maybe<ApplicationSessionEntityResponseCollection>;
  awesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  awesomeHelpHelps?: Maybe<AwesomeHelpHelpEntityResponseCollection>;
  comingSoon?: Maybe<ComingSoonEntityResponse>;
  contributor?: Maybe<ContributorEntityResponse>;
  contributors?: Maybe<ContributorEntityResponseCollection>;
  ezformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  ezformsRecipients?: Maybe<EzformsRecipientEntityResponseCollection>;
  ezformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  ezformsSubmissions?: Maybe<EzformsSubmissionEntityResponseCollection>;
  featured?: Maybe<FeaturedEntityResponse>;
  graphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  graphsBuilderGraphs?: Maybe<GraphsBuilderGraphEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  imprint?: Maybe<ImprintEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  serie?: Maybe<SerieEntityResponse>;
  series?: Maybe<SerieEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  video?: Maybe<VideoEntityResponse>;
  videos?: Maybe<VideoEntityResponseCollection>;
};


export type QueryApplicationFieldArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicationFieldsArgs = {
  filters?: InputMaybe<ApplicationFieldFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryApplicationQuestionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicationQuestionsArgs = {
  filters?: InputMaybe<ApplicationQuestionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryApplicationSessionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicationSessionsArgs = {
  filters?: InputMaybe<ApplicationSessionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAwesomeHelpHelpArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAwesomeHelpHelpsArgs = {
  filters?: InputMaybe<AwesomeHelpHelpFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryComingSoonArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContributorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContributorsArgs = {
  filters?: InputMaybe<ContributorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEzformsRecipientArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEzformsRecipientsArgs = {
  filters?: InputMaybe<EzformsRecipientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEzformsSubmissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEzformsSubmissionsArgs = {
  filters?: InputMaybe<EzformsSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGraphsBuilderGraphArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGraphsBuilderGraphsArgs = {
  filters?: InputMaybe<GraphsBuilderGraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryImprintArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySerieArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QuerySeriesArgs = {
  filters?: InputMaybe<SerieFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVideoArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryVideosArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Serie = {
  __typename?: 'Serie';
  age: Scalars['Int'];
  background_image?: Maybe<UploadFileEntityResponse>;
  contributors?: Maybe<Array<Maybe<ComponentCommonContributor>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  genre: Enum_Serie_Genre;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<SerieRelationResponseCollection>;
  original?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  rating?: Maybe<Scalars['Float']>;
  thumbnail: UploadFileEntityResponse;
  title: Scalars['String'];
  title_image?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  videos?: Maybe<VideoRelationResponseCollection>;
  year: Scalars['Date'];
};


export type SerieContributorsArgs = {
  filters?: InputMaybe<ComponentCommonContributorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SerieLocalizationsArgs = {
  filters?: InputMaybe<SerieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SerieVideosArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SerieEntity = {
  __typename?: 'SerieEntity';
  attributes?: Maybe<Serie>;
  id?: Maybe<Scalars['ID']>;
};

export type SerieEntityResponse = {
  __typename?: 'SerieEntityResponse';
  data?: Maybe<SerieEntity>;
};

export type SerieEntityResponseCollection = {
  __typename?: 'SerieEntityResponseCollection';
  data: Array<SerieEntity>;
  meta: ResponseCollectionMeta;
};

export type SerieFiltersInput = {
  age?: InputMaybe<IntFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SerieFiltersInput>>>;
  contributors?: InputMaybe<ComponentCommonContributorFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  genre?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<SerieFiltersInput>;
  not?: InputMaybe<SerieFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SerieFiltersInput>>>;
  original?: InputMaybe<BooleanFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  videos?: InputMaybe<VideoFiltersInput>;
  year?: InputMaybe<DateFilterInput>;
};

export type SerieInput = {
  age?: InputMaybe<Scalars['Int']>;
  background_image?: InputMaybe<Scalars['ID']>;
  contributors?: InputMaybe<Array<InputMaybe<ComponentCommonContributorInput>>>;
  description?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<Enum_Serie_Genre>;
  original?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  rating?: InputMaybe<Scalars['Float']>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_image?: InputMaybe<Scalars['ID']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  year?: InputMaybe<Scalars['Date']>;
};

export type SerieRelationResponseCollection = {
  __typename?: 'SerieRelationResponseCollection';
  data: Array<SerieEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  admin?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  image?: Maybe<UploadFileEntityResponse>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: Maybe<VideoRelationResponseCollection>;
};


export type UsersPermissionsUserWatchlistArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  admin?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  watchlist?: InputMaybe<VideoFiltersInput>;
};

export type UsersPermissionsUserInput = {
  admin?: InputMaybe<Scalars['Boolean']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
  watchlist?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Video = {
  __typename?: 'Video';
  age: Scalars['Int'];
  background_image?: Maybe<UploadFileEntityResponse>;
  contributors: Array<Maybe<ComponentCommonContributor>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  episode?: Maybe<Scalars['Int']>;
  genre: Enum_Video_Genre;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<VideoRelationResponseCollection>;
  on_watchlist?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  original?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  rating?: Maybe<Scalars['Float']>;
  series?: Maybe<SerieEntityResponse>;
  thumbnail: UploadFileEntityResponse;
  title: Scalars['String'];
  title_image?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Date']>;
  youtube_url: Scalars['String'];
};


export type VideoContributorsArgs = {
  filters?: InputMaybe<ComponentCommonContributorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type VideoLocalizationsArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type VideoOn_WatchlistArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VideoEntity = {
  __typename?: 'VideoEntity';
  attributes?: Maybe<Video>;
  id?: Maybe<Scalars['ID']>;
};

export type VideoEntityResponse = {
  __typename?: 'VideoEntityResponse';
  data?: Maybe<VideoEntity>;
};

export type VideoEntityResponseCollection = {
  __typename?: 'VideoEntityResponseCollection';
  data: Array<VideoEntity>;
  meta: ResponseCollectionMeta;
};

export type VideoFiltersInput = {
  age?: InputMaybe<IntFilterInput>;
  and?: InputMaybe<Array<InputMaybe<VideoFiltersInput>>>;
  contributors?: InputMaybe<ComponentCommonContributorFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  episode?: InputMaybe<IntFilterInput>;
  genre?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<VideoFiltersInput>;
  not?: InputMaybe<VideoFiltersInput>;
  on_watchlist?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VideoFiltersInput>>>;
  original?: InputMaybe<BooleanFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  series?: InputMaybe<SerieFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  year?: InputMaybe<DateFilterInput>;
  youtube_url?: InputMaybe<StringFilterInput>;
};

export type VideoInput = {
  age?: InputMaybe<Scalars['Int']>;
  background_image?: InputMaybe<Scalars['ID']>;
  contributors?: InputMaybe<Array<InputMaybe<ComponentCommonContributorInput>>>;
  description?: InputMaybe<Scalars['String']>;
  episode?: InputMaybe<Scalars['Int']>;
  genre?: InputMaybe<Enum_Video_Genre>;
  on_watchlist?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  original?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  rating?: InputMaybe<Scalars['Float']>;
  series?: InputMaybe<Scalars['ID']>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  title_image?: InputMaybe<Scalars['ID']>;
  year?: InputMaybe<Scalars['Date']>;
  youtube_url?: InputMaybe<Scalars['String']>;
};

export type VideoRelationResponseCollection = {
  __typename?: 'VideoRelationResponseCollection';
  data: Array<VideoEntity>;
};
