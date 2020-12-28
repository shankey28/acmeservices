/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApplicantProfile = /* GraphQL */ `
  query GetApplicantProfile($UserName: String!) {
    getApplicantProfile(UserName: $UserName) {
      id
      Email
      UserName
      Name
      YoE
      CaFocus
      PayOpt
      Gender
      AppStatus
      Resume {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listApplicantProfiles = /* GraphQL */ `
  query ListApplicantProfiles(
    $UserName: String
    $filter: ModelApplicantProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listApplicantProfiles(
      UserName: $UserName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        Email
        UserName
        Name
        YoE
        CaFocus
        PayOpt
        Gender
        AppStatus
        Resume {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecuriterComment = /* GraphQL */ `
  query GetRecuriterComment($CandidateId: ID!, $CreatedOn: AWSDateTime!) {
    getRecuriterComment(CandidateId: $CandidateId, CreatedOn: $CreatedOn) {
      id
      CandidateId
      Comment
      CreatedOn
      createdAt
      updatedAt
    }
  }
`;
export const listRecuriterComments = /* GraphQL */ `
  query ListRecuriterComments(
    $CandidateId: ID
    $CreatedOn: ModelStringKeyConditionInput
    $filter: ModelRecuriterCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRecuriterComments(
      CandidateId: $CandidateId
      CreatedOn: $CreatedOn
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        CandidateId
        Comment
        CreatedOn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getApplicantEmployer = /* GraphQL */ `
  query GetApplicantEmployer($id: ID!) {
    getApplicantEmployer(id: $id) {
      id
      CandidateId
      EmployerCode
      createdAt
      updatedAt
    }
  }
`;
export const listApplicantEmployers = /* GraphQL */ `
  query ListApplicantEmployers(
    $filter: ModelApplicantEmployerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplicantEmployers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        CandidateId
        EmployerCode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
