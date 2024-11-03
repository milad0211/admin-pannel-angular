export interface topcard {
    bgcolor: string,
    icon: string,
    title: string | number,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-cart3',
        title: 102,
        subtitle: 'All Products'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-inboxes',
        title: 24,
        subtitle: 'All Categories'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: ' $456k',
        subtitle: 'Yearly Sales'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        title: '$21k',
        subtitle: 'Weekly Sales'
    },

] 