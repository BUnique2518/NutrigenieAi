import api from '@/lib/api';

export const dashboardService = {
    async getDashboardData() {
        const response = await api.get('/dashboard/calculate');
        return response.data;
    },
};
