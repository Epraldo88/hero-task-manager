import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import {
  getDashboardSummary,
  getPerformanceStatusSummary,
  getRecentActivities,
  getStatusSummary,
} from "services/dashboard.service";

const useDashboard = () => {
  const queryClient = useQueryClient();

  const {
    data: summary,
    isLoading: isSummaryLoading,
    isError: isSummaryError,
  } = useQuery({
    queryKey: ["dashboard/summary"],
    queryFn: getDashboardSummary,
  });

  const {
    data: statusSummary,
    isLoading: isStatusSummaryLoading,
    isError: isStatusSummaryError,
  } = useQuery({
    queryKey: ["dashboard/status-summary"],
    queryFn: getStatusSummary,
  });

  const {
    data: performanceStatus,
    isLoading: isPerformanceStatusLoading,
    isError: isPerformanceStatusError,
  } = useQuery({
    queryKey: ["dashboard/performance-status"],
    queryFn: getPerformanceStatusSummary,
  });

  const {
    data: recentActivites,
    isLoading: isRecentActivitesLoading,
    isError: isRecentActivitesError,
  } = useQuery({
    queryKey: ["dashboard/recent-activities"],
    queryFn: getRecentActivities,
  });

  return {
    summary,
    statusSummary,
    performanceStatus,
    recentActivites,
    loading: {
      summary: isSummaryLoading,
      statusSummary: isStatusSummaryLoading,
      performanceStatus: isPerformanceStatusLoading,
      recentActivites: isRecentActivitesLoading,
    },
    error: {
      summary: isSummaryError,
      statusSummary: isStatusSummaryError,
      performanceStatus: isPerformanceStatusError,
      recentActivites: isRecentActivitesError,
    },
  };
};

export default useDashboard;
