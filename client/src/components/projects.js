import React, { memo, forwardRef } from 'react';
import { Grid } from '@mui/material';
import FirstPortfolioCard from '../projects/firstPortfolio';
import NBATrackerCard from '../projects/NBATracker';
import MealerDealerCard from '../projects/mealerDealer';
import InsulinkCard from '../projects/insuLink';

const gridStyles = {
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const ProjectsList = forwardRef((props, ref) => {
    const { style } = props;

    return (
        <Grid container
            id='proj-container'
            // direction={'column'}
            // rowSpacing={6}
            ref={ref}
            style={style}
            sx={gridStyles}
        >
            <Grid container item
                id='proj-top-row'
                // justifyContent={'space-between'}
            >
                <Grid item className='projCard' >
                    <InsulinkCard />
                </Grid>
                <Grid item className='projCard'>
                    <MealerDealerCard />
                </Grid>
            </Grid>
            <Grid container item
                id='proj-bottom-row'
                // justifyContent={'space-between'}
            >
                <Grid item  className='projCard'>
                    <NBATrackerCard />
                </Grid>
                <Grid item  className='projCard'>
                    <FirstPortfolioCard />
                </Grid>
            </Grid>
        </Grid>
    );
});

export default memo(ProjectsList);