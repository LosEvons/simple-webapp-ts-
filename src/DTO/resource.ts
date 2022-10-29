export class Resource {
    name!: string;
    id!: number;

    resourceCount: number;
    autoHarvesterCount: number;
    autoHarvesterStrength: number;
    autoHarvesterBuildCost: number;
    autoHarvesterImproveCost: number;

    private static _uid: number = 0;

    private newUid(): number {
        Resource._uid += 1;
        return Resource._uid - 1;
    }

    constructor(name: string, params?: any) {
        this.name = name;
        this.id = this.newUid();

        this.resourceCount = params?.resourceCount ?? 0;
        this.autoHarvesterCount = params?.autoHarvesterCount ?? 0;
        this.autoHarvesterStrength = params?.autoHarvesterStrength ?? 1;
        this.autoHarvesterBuildCost = params?.autoHarvesterBuildCost ?? 0;
        this.autoHarvesterImproveCost = params?.autoHarvesterImproveCost ?? 0;

    }

}