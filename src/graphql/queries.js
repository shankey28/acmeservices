/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApplicantProfile = /* GraphQL */ `
  query GetApplicantProfile($userName: String!) {
    getApplicantProfile(userName: $userName) {
      id
      email
      userName
      name
      yOe
      caFocus
      payOpt
      gender
      appStatus
      resume {
        bucket
        region
        key
      }
      employer
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listApplicantProfiles = /* GraphQL */ `
  query ListApplicantProfiles(
    $userName: String
    $filter: ModelApplicantProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listApplicantProfiles(
      userName: $userName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        email
        userName
        name
        yOe
        caFocus
        payOpt
        gender
        appStatus
        resume {
          bucket
          region
          key
        }
        employer
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getRecuriterComment = /* GraphQL */ `
  query GetRecuriterComment($candidateID: ID!, $createdOn: AWSDateTime!) {
    getRecuriterComment(candidateID: $candidateID, createdOn: $createdOn) {
      id
      candidateID
      comment
      createdOn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listRecuriterComments = /* GraphQL */ `
  query ListRecuriterComments(
    $candidateID: ID
    $createdOn: ModelStringKeyConditionInput
    $filter: ModelRecuriterCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRecuriterComments(
      candidateID: $candidateID
      createdOn: $createdOn
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        candidateID
        comment
        createdOn
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
