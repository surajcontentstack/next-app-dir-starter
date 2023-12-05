import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useCallback } from "react";

import RenderComponents from "../RenderComponents";
import { getPageRes } from "../../helper";
import { onEntryChange } from "../../utils";
import { Props } from "../../typescript/pages";

export default async function Home(props: Props) {
    const entryResponse = await getPageRes("/about-us");
    return entryResponse ? (
        <RenderComponents
            pageComponents={entryResponse.page_components}
            contentTypeUid="page"
            entryUid={entryResponse.uid}
            locale={entryResponse.locale}
        />
    ) : (
        <Skeleton count={3} height={300} />
    );
}
